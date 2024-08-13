// user.dto.ts
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export enum UserRole {
  Customer = 'customer',
  Supplier = 'supplier',
  Employee = 'employee'
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}

export class UserDto {
  id: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// auth.dto.ts
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class AuthResponseDto {
  token: string;
  expiresIn: number;
  user: UserDto;
}

// job.dto.ts
import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';

export enum JobType {
  Notification = 'NOTIFICATION',
  Reconciliation = 'RECONCILIATION'
}

export enum JobStatus {
  Queued = 'queued',
  Processing = 'processing',
  Completed = 'completed',
  Failed = 'failed'
}

export type EntityType = 'launch' | 'booking';

export class CreateJobDto {
  @IsEnum(JobType)
  type: JobType;

  @IsObject()
  @IsOptional()
  notification?: {
    recipientEmail: string;
    subject: string;
    message: string;
  };

  @IsObject()
  @IsOptional()
  reconciliation?: {
    entityType: EntityType;
    entityId: string;
  };
}

export class JobDto {
  id: string;
  type: JobType;
  status: JobStatus;
  createdAt: Date;
  updatedAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  retryCount?: number;
  errorMessage?: string;
  notification?: {
    recipientEmail: string;
    subject: string;
    message: string;
  };
  reconciliation?: {
    entityType: EntityType;
    entityId: string;
    changesLog: string;
  };
}

// log.dto.ts
import { IsEnum, IsIP, IsObject, IsOptional, IsString, IsUUID } from 'class-validator';

export enum EventType {
  Auth = 'AUTH',
  Error = 'ERROR',
  Reconcile = 'RECONCILE',
  Notify = 'NOTIFY'
}

export enum Severity {
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Critical = 'critical'
}

export class CreateLogDto {
  @IsEnum(EventType)
  eventType: EventType;

  @IsEnum(Severity)
  severity: Severity;

  @IsString()
  message: string;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsIP()
  @IsOptional()
  ipAddress?: string;

  @IsObject()
  @IsOptional()
  additionalData?: Record<string, any>;
}

export class LogDto {
  id: string;
  timestamp: Date;
  eventType: EventType;
  severity: Severity;
  message: string;
  userId?: string;
  ipAddress?: string;
  additionalData?: Record<string, any>;
}
