# AstroBookings: Core API Domain Model

## User Management Subdomain

### User

Represents all users of the system.

- **id**: Unique identifier `UUID`
- **email**: User's email address `Text`
- **hashedPassword**: Securely hashed password `Text`
- **role**: User's role in the system `Enum` [customer, supplier, employee]
- createdAt: Timestamp of user creation `DateTime`
- updatedAt: Timestamp of last update `DateTime`

## Job Subdomain

### Job

Represents all types of jobs in the system.

- **id**: Unique identifier `UUID`
- **type**: Type of job `Enum` [NOTIFICATION, RECONCILIATION]
- **status**: Current status of the job `Enum` [queued, processing, completed, failed]
- **createdAt**: Time the job was created `DateTime`
- **updatedAt**: Time the job was last updated `DateTime`
- startedAt: Time the job started processing `DateTime`
- completedAt: Time the job completed `DateTime`
- retryCount: Number of retry attempts `Integer`
- errorMessage: Description of error if job failed `Text`
- notification: Nested document for notification details (optional)
  - **recipientEmail**: Email of the recipient `Text`
  - **subject**: Subject of the notification `Text`
  - **message**: Content of the notification `Text`
- reconciliation: Nested document for reconciliation details (optional)
  - **entityType**: Type of entity to reconcile `Enum` [launch, booking]
  - **entityId**: ID of the entity to reconcile `UUID`
  - **changesLog**: Log of changes made during reconciliation `Text`

## Logging Subdomain

### SystemLog

Represents a log entry in the system.

- **id**: Unique identifier `UUID`
- **timestamp**: Time of the log entry `DateTime`
- **eventType**: Type of event logged `Enum` [AUTH, ERROR, RECONCILE, NOTIFY]
- **severity**: Severity level of the log `Enum` [info, warning, error, critical]
- **message**: Log message `Text`
- userId: ID of the user related to the log (if applicable) `UUID`
- ipAddress: IP address related to the log (if applicable) `Text`
- additionalData: Any additional data related to the log entry `JSON`

## Relationships

1. User _(1 to 0 or many)_ SystemLog
   - `User` _is related to_ `SystemLog`
   - `SystemLog` _refers to_ `User`
