import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import {
  BookingDto,
  CreateLaunchDto,
  CreateRocketDto,
  FinancialReportDto,
  LaunchDto,
  LaunchStatus,
  LoginRequestDto,
  LoginResponseDto,
  PassengerManifestDto,
  RocketDto,
  UpdateLaunchDto,
  UpdateLaunchStatusDto,
  UpdateRocketDto,
} from "./domain.dto";
import { Booking, Invoice, Launch, Passenger, Rocket, Supplier } from "./domain.entity";

@Injectable()
export class BaseService<T> {
  constructor(private readonly repository: Repository<T>) {}

  protected async findOneOrFail(options: FindOneOptions<T>): Promise<T> {
    const entity = await this.repository.findOne(options);
    if (!entity) {
      throw new NotFoundException(`${this.repository.metadata.name} not found`);
    }
    return entity;
  }

  protected async createEntity(createDto: Partial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return await this.repository.save(entity);
  }

  protected async updateEntity(entity: T, updateDto: Partial<T>): Promise<T> {
    Object.assign(entity, updateDto);
    return await this.repository.save(entity);
  }
}

@Injectable()
export class AuthService extends BaseService<Supplier> {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>
  ) {
    super(supplierRepository);
  }

  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    const supplier = await this.findOneOrFail({ where: { legalNumber: loginRequestDto.email } });
    // In a real application, you would implement proper authentication here
    return {
      token: "mock_token",
      user: {
        id: supplier.id,
        companyName: supplier.companyName,
        legalNumber: supplier.legalNumber,
        legalAddress: supplier.legalAddress,
      },
    };
  }
}

@Injectable()
export class RocketsService extends BaseService<Rocket> {
  constructor(
    @InjectRepository(Rocket)
    private rocketRepository: Repository<Rocket>
  ) {
    super(rocketRepository);
  }

  async findAll(): Promise<RocketDto[]> {
    const rockets = await this.rocketRepository.find({ relations: ["supplier"] });
    return rockets.map((rocket) => this.mapToDto(rocket));
  }

  async create(createRocketDto: CreateRocketDto): Promise<RocketDto> {
    const rocket = await this.createEntity(createRocketDto);
    return this.mapToDto(rocket);
  }

  async update(id: string, updateRocketDto: UpdateRocketDto): Promise<RocketDto> {
    const rocket = await this.findOneOrFail({ where: { id } });
    const updatedRocket = await this.updateEntity(rocket, updateRocketDto);
    return this.mapToDto(updatedRocket);
  }

  private mapToDto(rocket: Rocket): RocketDto {
    return {
      id: rocket.id,
      supplierId: rocket.supplierId,
      name: rocket.name,
      specifications: rocket.specifications,
    };
  }
}

@Injectable()
export class LaunchesService extends BaseService<Launch> {
  constructor(
    @InjectRepository(Launch)
    private launchRepository: Repository<Launch>,
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>
  ) {
    super(launchRepository);
  }

  async findAll(): Promise<LaunchDto[]> {
    const launches = await this.launchRepository.find({ relations: ["rocket", "supplier"] });
    return launches.map((launch) => this.mapToDto(launch));
  }

  async create(createLaunchDto: CreateLaunchDto): Promise<LaunchDto> {
    const launch = await this.createEntity({
      ...createLaunchDto,
      status: LaunchStatus.Scheduled,
    });
    return this.mapToDto(launch);
  }

  async update(id: string, updateLaunchDto: UpdateLaunchDto): Promise<LaunchDto> {
    const launch = await this.findOneOrFail({ where: { id } });
    const updatedLaunch = await this.updateEntity(launch, updateLaunchDto);
    return this.mapToDto(updatedLaunch);
  }

  async updateStatus(id: string, updateLaunchStatusDto: UpdateLaunchStatusDto): Promise<LaunchDto> {
    const launch = await this.findOneOrFail({ where: { id } });
    const updatedLaunch = await this.updateEntity(launch, { status: updateLaunchStatusDto.status });
    return this.mapToDto(updatedLaunch);
  }

  async findBookings(id: string): Promise<BookingDto[]> {
    const bookings = await this.bookingRepository.find({
      where: { launchId: id },
      relations: ["launch"],
    });
    return bookings.map((booking) => this.mapBookingToDto(booking));
  }

  async getPassengerManifest(id: string): Promise<PassengerManifestDto> {
    const launch = await this.findOneOrFail({ where: { id } });
    const bookings = await this.bookingRepository.find({
      where: { launchId: id },
      relations: ["passengers"],
    });

    const passengers = bookings.flatMap((booking) =>
      booking.passengers.map((passenger) => ({
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        dateOfBirth: passenger.dateOfBirth,
      }))
    );

    return {
      launchId: launch.id,
      launchDate: launch.launchDate,
      destination: launch.destination,
      passengers,
    };
  }

  private mapToDto(launch: Launch): LaunchDto {
    return {
      id: launch.id,
      rocketId: launch.rocketId,
      supplierId: launch.supplierId,
      launchDate: launch.launchDate,
      destination: launch.destination,
      capacity: launch.capacity,
      pricePerSeat: launch.pricePerSeat,
      status: launch.status,
    };
  }

  private mapBookingToDto(booking: Booking): BookingDto {
    return {
      id: booking.id,
      customerId: booking.customerId,
      launchId: booking.launchId,
      numberOfSeats: booking.numberOfSeats,
      status: booking.status,
      totalAmount: booking.totalAmount,
    };
  }
}

@Injectable()
export class FinancialReportsService extends BaseService<Invoice> {
  constructor(
    @InjectRepository(Launch)
    private launchRepository: Repository<Launch>,
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>
  ) {
    super(invoiceRepository);
  }

  async getFinancialReport(): Promise<FinancialReportDto> {
    const launches = await this.launchRepository.find({ relations: ["bookings"] });

    let totalRevenue = 0;
    const launchesRevenue = launches.map((launch) => {
      const launchRevenue = launch.bookings.reduce((sum, booking) => sum + booking.totalAmount, 0);
      totalRevenue += launchRevenue;
      return { launchId: launch.id, revenue: launchRevenue };
    });

    const platformFees = totalRevenue * 0.1; // Assuming 10% platform fee
    const netRevenue = totalRevenue - platformFees;

    return {
      totalRevenue,
      platformFees,
      netRevenue,
      launchesRevenue,
    };
  }
}
