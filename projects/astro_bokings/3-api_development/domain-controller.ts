import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { AuthService } from './domain.service';
import { RocketsService } from './domain.service';
import { LaunchesService } from './domain.service';
import { FinancialReportsService } from './domain.service';
import {
  LoginRequestDto,
  LoginResponseDto,
  CreateRocketDto,
  UpdateRocketDto,
  RocketDto,
  CreateLaunchDto,
  UpdateLaunchDto,
  LaunchDto,
  UpdateLaunchStatusDto,
  BookingDto,
  PassengerManifestDto,
  FinancialReportDto
} from './domain.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Log in to supplier account
   * @param loginRequestDto Login credentials
   * @returns Login response with token and user info
   */
  @Post('login')
  async login(@Body() loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    return this.authService.login(loginRequestDto);
  }
}

@Controller('api/v1/rockets')
export class RocketsController {
  constructor(private readonly rocketsService: RocketsService) {}

  /**
   * Get all rockets for the supplier
   * @returns List of rockets
   */
  @Get()
  async findAll(): Promise<RocketDto[]> {
    return this.rocketsService.findAll();
  }

  /**
   * Add a new rocket to the fleet
   * @param createRocketDto Rocket details
   * @returns Created rocket
   */
  @Post()
  async create(@Body() createRocketDto: CreateRocketDto): Promise<RocketDto> {
    return this.rocketsService.create(createRocketDto);
  }

  /**
   * Update rocket specifications
   * @param id Rocket ID
   * @param updateRocketDto Updated rocket details
   * @returns Updated rocket
   */
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRocketDto: UpdateRocketDto): Promise<RocketDto> {
    return this.rocketsService.update(id, updateRocketDto);
  }
}

@Controller('api/v1/launches')
export class LaunchesController {
  constructor(private readonly launchesService: LaunchesService) {}

  /**
   * Get all scheduled launches for the supplier
   * @returns List of launches
   */
  @Get()
  async findAll(): Promise<LaunchDto[]> {
    return this.launchesService.findAll();
  }

  /**
   * Schedule a new rocket launch
   * @param createLaunchDto Launch details
   * @returns Created launch
   */
  @Post()
  async create(@Body() createLaunchDto: CreateLaunchDto): Promise<LaunchDto> {
    return this.launchesService.create(createLaunchDto);
  }

  /**
   * Update launch details
   * @param id Launch ID
   * @param updateLaunchDto Updated launch details
   * @returns Updated launch
   */
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLaunchDto: UpdateLaunchDto): Promise<LaunchDto> {
    return this.launchesService.update(id, updateLaunchDto);
  }

  /**
   * Update launch status (delay or abort)
   * @param id Launch ID
   * @param updateLaunchStatusDto Updated launch status
   * @returns Updated launch
   */
  @Put(':id/status')
  async updateStatus(@Param('id') id: string, @Body() updateLaunchStatusDto: UpdateLaunchStatusDto): Promise<LaunchDto> {
    return this.launchesService.updateStatus(id, updateLaunchStatusDto);
  }

  /**
   * View bookings for a specific launch
   * @param id Launch ID
   * @returns List of bookings for the launch
   */
  @Get(':id/bookings')
  async findBookings(@Param('id') id: string): Promise<BookingDto[]> {
    return this.launchesService.findBookings(id);
  }

  /**
   * Generate passenger manifest for a launch
   * @param id Launch ID
   * @returns Passenger manifest
   */
  @Get(':id/passenger-manifest')
  async getPassengerManifest(@Param('id') id: string): Promise<PassengerManifestDto> {
    return this.launchesService.getPassengerManifest(id);
  }
}

@Controller('api/v1/financial-reports')
export class FinancialReportsController {
  constructor(private readonly financialReportsService: FinancialReportsService) {}

  /**
   * View financial reports for launches
   * @returns Financial report
   */
  @Get()
  async getFinancialReport(): Promise<FinancialReportDto> {
    return this.financialReportsService.getFinancialReport();
  }
}
