// Auth

/**
 * DTO for login request
 */
class LoginRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

/**
 * DTO for login response
 */
class LoginResponseDto {
  @IsString()
  token: string;

  @IsObject()
  user: SupplierDto;
}

/**
 * DTO for supplier
 */
class SupplierDto {
  @IsString()
  id: string;

  @IsString()
  userId: string;

  @IsString()
  companyName: string;

  @IsString()
  legalNumber: string;

  @IsString()
  legalAddress: string;
}

/**
 * Authentication controller
 * Handles supplier authentication
 */
@Controller('api/v1/auth')
class AuthController {
  /**
   * Log in to supplier account
   * @param loginRequestDto Login credentials
   * @returns Login response with token and user info
   */
  @Post('login')
  async login(@Body() loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    // Implementation
  }
}

/**
 * Authentication service
 * Manages supplier authentication
 */
@Injectable()
class AuthService {
  /**
   * Authenticate supplier
   * @param loginRequestDto Login credentials
   * @returns Login response with token and user info
   */
  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    // Implementation
  }
}

// Rockets

/**
 * DTO for creating a rocket
 */
class CreateRocketDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  specifications: string;

  @IsNumber()
  @Min(1)
  capacity: number;
}

/**
 * DTO for updating a rocket
 */
class UpdateRocketDto extends PartialType(CreateRocketDto) {}

/**
 * DTO for rocket response
 */
class RocketDto {
  @IsString()
  id: string;

  @IsString()
  supplierId: string;

  @IsString()
  name: string;

  @IsString()
  specifications: string;

  @IsNumber()
  capacity: number;
}

/**
 * Rockets controller
 * Manages supplier's rockets
 */
@Controller('api/v1/rockets')
class RocketsController {
  /**
   * Get all rockets for the supplier
   * @returns List of rockets
   */
  @Get()
  async findAll(): Promise<RocketDto[]> {
    // Implementation
  }

  /**
   * Add a new rocket to the fleet
   * @param createRocketDto Rocket details
   * @returns Created rocket
   */
  @Post()
  async create(@Body() createRocketDto: CreateRocketDto): Promise<RocketDto> {
    // Implementation
  }

  /**
   * Update rocket specifications
   * @param id Rocket ID
   * @param updateRocketDto Updated rocket details
   * @returns Updated rocket
   */
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRocketDto: UpdateRocketDto): Promise<RocketDto> {
    // Implementation
  }
}

/**
 * Rockets service
 * Manages rocket-related operations
 */
@Injectable()
class RocketsService {
  async findAll(): Promise<RocketDto[]> {
    // Implementation
  }

  async create(createRocketDto: CreateRocketDto): Promise<RocketDto> {
    // Implementation
  }

  async update(id: string, updateRocketDto: UpdateRocketDto): Promise<RocketDto> {
    // Implementation
  }
}

// Launches

/**
 * DTO for creating a launch
 */
class CreateLaunchDto {
  @IsString()
  @IsNotEmpty()
  rocketId: string;

  @IsDate()
  @IsNotEmpty()
  launchDate: Date;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsNumber()
  @Min(0)
  pricePerSeat: number;
}

/**
 * DTO for updating a launch
 */
class UpdateLaunchDto extends PartialType(CreateLaunchDto) {}

/**
 * Enum for launch status
 */
enum LaunchStatus {
  Scheduled = 'Scheduled',
  InProgress = 'In Progress',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

/**
 * DTO for updating launch status
 */
class UpdateLaunchStatusDto {
  @IsEnum(LaunchStatus)
  status: LaunchStatus;

  @IsString()
  @IsOptional()
  reason?: string;
}

/**
 * DTO for launch response
 */
class LaunchDto {
  @IsString()
  id: string;

  @IsString()
  rocketId: string;

  @IsString()
  supplierId: string;

  @IsDate()
  launchDate: Date;

  @IsString()
  destination: string;

  @IsNumber()
  pricePerSeat: number;

  @IsEnum(LaunchStatus)
  status: LaunchStatus;
}

/**
 * DTO for booking response
 */
class BookingDto {
  @IsString()
  id: string;

  @IsString()
  customerId: string;

  @IsString()
  launchId: string;

  @IsNumber()
  numberOfSeats: number;

  @IsString()
  status: string;

  @IsNumber()
  totalAmount: number;
}

/**
 * DTO for passenger manifest response
 */
class PassengerManifestDto {
  @IsString()
  launchId: string;

  @IsDate()
  launchDate: Date;

  @IsString()
  destination: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PassengerDto)
  passengers: PassengerDto[];
}

/**
 * DTO for passenger in manifest
 */
class PassengerDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  dateOfBirth: Date;
}

/**
 * Launches controller
 * Manages supplier's launches
 */
@Controller('api/v1/launches')
class LaunchesController {
  /**