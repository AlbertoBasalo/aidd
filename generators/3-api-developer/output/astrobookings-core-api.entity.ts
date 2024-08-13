// user.entity.ts
import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from '../dto/user.dto';

@Entity('users')
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  hashedPassword: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// job.entity.ts
import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { JobType, JobStatus, EntityType } from '../dto/job.dto';

@Entity('jobs')
export class Job {
  @ObjectIdColumn()
  _id: string;

  @Column({
    type: 'enum',
    enum: JobType,
  })
  type: JobType;

  @Column({
    type: 'enum',
    enum: JobStatus,
  })
  status: JobStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  startedAt?: Date;

  @Column({ nullable: true })
  completedAt?: Date;

  @Column({ default: 0 })
  retryCount: number;

  @Column({ nullable: true })
  errorMessage?: string;

  @Column({ type: 'json', nullable: true })
  notification?: {
    recipientEmail: string;
    subject: string;
    message: string;
  };

  @Column({ type: 'json', nullable: true })
  reconciliation?: {
    entityType: EntityType;
    entityId: string;
    changesLog: string;
  };
}

// system-log.entity.ts
import { Entity, Column, ObjectIdColumn, CreateDateColumn } from 'typeorm';
import { EventType, Severity } from '../dto/log.dto';

@Entity('systemLogs')
export class SystemLog {
  @ObjectIdColumn()
  _id: string;

  @CreateDateColumn()
  timestamp: Date;

  @Column({
    type: 'enum',
    enum: EventType,
  })
  eventType: EventType;

  @Column({
    type: 'enum',
    enum: Severity,
  })
  severity: Severity;

  @Column()
  message: string;

  @Column({ nullable: true })
  userId?: string;

  @Column({ nullable: true })
  ipAddress?: string;

  @Column({ type: 'json', nullable: true })
  additionalData?: Record<string, any>;
}
