import { IsString, IsEmail, IsNotEmpty, MinLength, IsObject, IsNumber, Min, IsDate, IsEnum, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

// Auth DTOs
export class LoginRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

export class LoginResponseDto {
  @IsString()
  token: string;

  @IsObject()
  user: SupplierDto;
}

export class SupplierDto {
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

// Rocket DTOs
export class CreateRocketDto {
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

export class UpdateRocketDto extends PartialType(CreateRocketDto) {}

export class RocketDto {
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

// Launch DTOs
export class CreateLaunchDto {
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

export class UpdateLaunchDto extends PartialType(CreateLaunchDto) {}

export enum LaunchStatus {
  Scheduled = 'Scheduled',
  InProgress = 'In Progress',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export class UpdateLaunchStatusDto {
  @IsEnum(LaunchStatus)
  status: LaunchStatus;

  @IsString()
  @IsOptional()
  reason?: string;
}

export class LaunchDto {
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

export class BookingDto {
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

export class PassengerManifestDto {
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

export class PassengerDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  dateOfBirth: Date;
}

// Financial Report DTOs
export class FinancialReportDto {
  @IsNumber()
  totalRevenue: number;

  @IsNumber()
  platformFees: number;

  @IsNumber()
  netRevenue: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LaunchRevenueDto)
  launchesRevenue: LaunchRevenueDto[];
}

export class LaunchRevenueDto {
  @IsString()
  launchId: string;

  @IsNumber()
  revenue: number;
}
