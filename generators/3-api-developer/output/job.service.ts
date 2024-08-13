// job.mapper.ts

import { Job } from '../entities/job.entity';
import { JobDto, JobType, JobStatus, EntityType } from '../dto/job.dto';

export function mapJobToDto(job: Job): JobDto {
  return {
    id: job._id.toString(), // Convert ObjectId to string
    type: job.type as JobType,
    status: job.status as JobStatus,
    createdAt: job.createdAt,
    updatedAt: job.updatedAt,
    startedAt: job.startedAt,
    completedAt: job.completedAt,
    retryCount: job.retryCount,
    errorMessage: job.errorMessage,
    notification: job.notification ? {
      recipientEmail: job.notification.recipientEmail,
      subject: job.notification.subject,
      message: job.notification.message
    } : undefined,
    reconciliation: job.reconciliation ? {
      entityType: job.reconciliation.entityType as EntityType,
      entityId: job.reconciliation.entityId,
      changesLog: job.reconciliation.changesLog
    } : undefined
  };
}

// Example usage in a service
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../entities/job.entity';
import { JobDto, CreateJobDto } from '../dto/job.dto';
import { mapJobToDto } from './job.mapper';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>
  ) {}

  async getJob(id: string): Promise<JobDto> {
    const job = await this.jobRepository.findOne(id);
    return mapJobToDto(job);
  }

  async createJob(createJobDto: CreateJobDto): Promise<JobDto> {
    const job = this.jobRepository.create({
      ...createJobDto,
      status: 'queued' // Set initial status
    });
    const savedJob = await this.jobRepository.save(job);
    return mapJobToDto(savedJob);
  }
}
