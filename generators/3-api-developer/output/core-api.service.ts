// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto, LoginDto, AuthResponseDto, UserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async register(createUserDto: CreateUserDto): Promise<AuthResponseDto> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      ...createUserDto,
      hashedPassword,
    });
    await this.userRepository.save(user);
    return this.generateAuthResponse(user);
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findOne({ where: { email: loginDto.email } });
    if (user && await bcrypt.compare(loginDto.password, user.hashedPassword)) {
      return this.generateAuthResponse(user);
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  private generateAuthResponse(user: User): AuthResponseDto {
    const payload = { sub: user._id, email: user.email, role: user.role };
    return {
      token: this.jwtService.sign(payload),
      expiresIn: 3600,
      user: this.mapUserToDto(user),
    };
  }

  private mapUserToDto(user: User): UserDto {
    return {
      id: user._id.toString(),
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}

// log.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SystemLog } from '../entities/system-log.entity';
import { CreateLogDto, LogDto } from '../dto/log.dto';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(SystemLog)
    private logRepository: Repository<SystemLog>
  ) {}

  async createLog(createLogDto: CreateLogDto): Promise<LogDto> {
    const log = this.logRepository.create(createLogDto);
    const savedLog = await this.logRepository.save(log);
    return this.mapLogToDto(savedLog);
  }

  async getLogs(filters: any): Promise<{ logs: LogDto[], total: number, page: number, pageSize: number }> {
    const [logs, total] = await this.logRepository.findAndCount({
      where: filters,
      order: { timestamp: 'DESC' },
      take: filters.pageSize || 10,
      skip: ((filters.page || 1) - 1) * (filters.pageSize || 10),
    });

    return {
      logs: logs.map(this.mapLogToDto),
      total,
      page: filters.page || 1,
      pageSize: filters.pageSize || 10,
    };
  }

  private mapLogToDto(log: SystemLog): LogDto {
    return {
      id: log._id.toString(),
      timestamp: log.timestamp,
      eventType: log.eventType,
      severity: log.severity,
      message: log.message,
      userId: log.userId,
      ipAddress: log.ipAddress,
      additionalData: log.additionalData,
    };
  }
}

// job.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../entities/job.entity';
import { CreateJobDto, JobDto, JobStatus } from '../dto/job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>
  ) {}

  async createJob(createJobDto: CreateJobDto): Promise<JobDto> {
    const job = this.jobRepository.create({
      ...createJobDto,
      status: JobStatus.Queued,
    });
    const savedJob = await this.jobRepository.save(job);
    return this.mapJobToDto(savedJob);
  }

  async getJob(id: string): Promise<JobDto> {
    const job = await this.jobRepository.findOne(id);
    return this.mapJobToDto(job);
  }

  async getJobs(filters: any): Promise<{ jobs: JobDto[], total: number, page: number, pageSize: number }> {
    const [jobs, total] = await this.jobRepository.findAndCount({
      where: filters,
      order: { createdAt: 'DESC' },
      take: filters.pageSize || 10,
      skip: ((filters.page || 1) - 1) * (filters.pageSize || 10),
    });

    return {
      jobs: jobs.map(this.mapJobToDto),
      total,
      page: filters.page || 1,
      pageSize: filters.pageSize || 10,
    };
  }

  async updateJobStatus(id: string, status: JobStatus): Promise<JobDto> {
    await this.jobRepository.update(id, { status });
    const updatedJob = await this.jobRepository.findOne(id);
    return this.mapJobToDto(updatedJob);
  }

  private mapJobToDto(job: Job): JobDto {
    return {
      id: job._id.toString(),
      type: job.type,
      status: job.status,
      createdAt: job.createdAt,
      updatedAt: job.updatedAt,
      startedAt: job.startedAt,
      completedAt: job.completedAt,
      retryCount: job.retryCount,
      errorMessage: job.errorMessage,
      notification: job.notification,
      reconciliation: job.reconciliation,
    };
  }
}

// reconciliation.service.ts
import { Injectable } from '@nestjs/common';
import { JobService } from './job.service';
import { JobDto, JobType, JobStatus } from '../dto/job.dto';

@Injectable()
export class ReconciliationService {
  constructor(private jobService: JobService) {}

  async startReconciliation(reconciliationData: any): Promise<JobDto> {
    return this.jobService.createJob({
      type: JobType.Reconciliation,
      reconciliation: {
        entityType: reconciliationData.entityType,
        entityId: reconciliationData.entityId,
      },
    });
  }

  async triggerReconciliationEvent(eventData: any): Promise<{ eventId: string; status: string }> {
    const job = await this.jobService.createJob({
      type: JobType.Reconciliation,
      reconciliation: {
        entityType: eventData.entityType,
        entityId: eventData.entityId,
        changesLog: JSON.stringify(eventData.changes),
      },
    });

    return {
      eventId: job.id,
      status: JobStatus.Queued,
    };
  }

  async getReconciliationJobs(filters: any): Promise<{ jobs: JobDto[]; total: number; page: number; pageSize: number }> {
    return this.jobService.getJobs({
      ...filters,
      type: JobType.Reconciliation,
    });
  }
}
