/**
 * Authentication controller
 * @class
 * @description Handles user registration and login
 * @example
 * Base URL: /auth
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Register a new user
   * @description Creates a new user account
   * @example
   * POST /auth/register
   * @param {CreateUserDto} createUserDto - User registration data
   * @returns {Promise<AuthResponseDto>} Authentication response with token
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: CreateUserDto): Promise<AuthResponseDto> {
    return this.authService.register(createUserDto);
  }

  /**
   * User login
   * @description Authenticates a user and returns a token
   * @example
   * POST /auth/login
   * @param {LoginDto} loginDto - User login credentials
   * @returns {Promise<AuthResponseDto>} Authentication response with token
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(loginDto);
  }
}

/**
 * Log controller
 * @class
 * @description Handles system log operations
 * @example
 * Base URL: /logs
 */
@Controller('logs')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LogController {
  constructor(private readonly logService: LogService) {}

  /**
   * Create a new log entry
   * @description Creates a new system log entry (restricted to system role)
   * @example
   * POST /logs
   * @param {CreateLogDto} createLogDto - Log entry data
   * @returns {Promise<LogDto>} Created log entry
   */
  @Post()
  @Roles('system')
  async createLog(@Body() createLogDto: CreateLogDto): Promise<LogDto> {
    return this.logService.createLog(createLogDto);
  }

  /**
   * Retrieve logs
   * @description Gets system logs with optional filters (restricted to employee role)
   * @example
   * GET /logs?page=1&pageSize=10&severity=error
   * @param {object} filters - Query parameters for filtering logs
   * @returns {Promise<{ logs: LogDto[], total: number, page: number, pageSize: number }>} Paginated log entries
   */
  @Get()
  @Roles('employee')
  async getLogs(@Query() filters: any): Promise<{ logs: LogDto[], total: number, page: number, pageSize: number }> {
    return this.logService.getLogs(filters);
  }
}

/**
 * Job controller
 * @class
 * @description Handles job operations
 * @example
 * Base URL: /jobs
 */
@Controller('jobs')
@UseGuards(JwtAuthGuard, RolesGuard)
export class JobController {
  constructor(private readonly jobService: JobService) {}

  /**
   * Create a new job
   * @description Creates a new job (restricted to employee and system roles)
   * @example
   * POST /jobs
   * @param {CreateJobDto} createJobDto - Job creation data
   * @returns {Promise<JobDto>} Created job
   */
  @Post()
  @Roles('employee', 'system')
  async createJob(@Body() createJobDto: CreateJobDto): Promise<JobDto> {
    return this.jobService.createJob(createJobDto);
  }

  /**
   * Retrieve a specific job
   * @description Gets details of a specific job by ID (restricted to employee role)
   * @example
   * GET /jobs/5f9a8f9b9d9b9d9b9d9b9d9b
   * @param {string} id - Job ID
   * @returns {Promise<JobDto>} Job details
   */
  @Get(':id')
  @Roles('employee')
  async getJob(@Param('id') id: string): Promise<JobDto> {
    return this.jobService.getJob(id);
  }

  /**
   * Retrieve jobs
   * @description Gets jobs with optional filters (restricted to employee role)
   * @example
   * GET /jobs?page=1&pageSize=10&status=completed
   * @param {object} filters - Query parameters for filtering jobs
   * @returns {Promise<{ jobs: JobDto[], total: number, page: number, pageSize: number }>} Paginated job list
   */
  @Get()
  @Roles('employee')
  async getJobs(@Query() filters: any): Promise<{ jobs: JobDto[], total: number, page: number, pageSize: number }> {
    return this.jobService.getJobs(filters);
  }
}

/**
 * Reconciliation controller
 * @class
 * @description Handles data reconciliation operations
 * @example
 * Base URL: /reconciliation
 */
@Controller('reconciliation')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReconciliationController {
  constructor(private readonly reconciliationService: ReconciliationService) {}

  /**
   * Start reconciliation process
   * @description Initiates a new reconciliation process (restricted to employee and system roles)
   * @example
   * POST /reconciliation
   * @param {object} reconciliationData - Data for reconciliation process
   * @returns {Promise<JobDto>} Created reconciliation job
   */
  @Post()
  @Roles('employee', 'system')
  async startReconciliation(@Body() reconciliationData: any): Promise<JobDto> {
    return this.reconciliationService.startReconciliation(reconciliationData);
  }

  /**
   * Trigger reconciliation event
   * @description Triggers a reconciliation event (restricted to system role)
   * @example
   * POST /reconciliation/events
   * @param {object} eventData - Data for the reconciliation event
   * @returns {Promise<{ eventId: string, status: string }>} Reconciliation event details
   */
  @Post('events')
  @Roles('system')
  async triggerReconciliationEvent(@Body() eventData: any): Promise<{ eventId: string, status: string }> {
    return this.reconciliationService.triggerReconciliationEvent(eventData);
  }

  /**
   * Retrieve reconciliation jobs
   * @description Gets reconciliation jobs with optional filters (restricted to employee role)
   * @example
   * GET /reconciliation/jobs?page=1&pageSize=10&status=completed
   * @param {object} filters - Query parameters for filtering reconciliation jobs
   * @returns {Promise<{ jobs: JobDto[], total: number, page: number, pageSize: number }>} Paginated reconciliation job list
   */
  @Get('jobs')
  @Roles('employee')
  async getReconciliationJobs(@Query() filters: any): Promise<{ jobs: JobDto[], total: number, page: number, pageSize: number }> {
    return this.reconciliationService.getReconciliationJobs(filters);
  }
}
