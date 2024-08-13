# AstroBookings: Core API Service User Stories

> Generated on: Monday, August 12, 2024, 15:30 PM UTC

## Roles

- `System`: Automated processes within the Core API Service
- `APIConsumer`: Other services that consume the Core API (Customer API, Admin API, Job Scheduler)
- `ExternalService`: Notification Service
- `ITOperator`: Staff managing and monitoring the system
- `JobScheduler`: Automated process that triggers scheduled tasks

## User Stories

### Authentication and Authorization

1. As a `System`, I want to **securely store and manage user credentials** _so that I can maintain the integrity of user accounts_.

2. As an `APIConsumer`, I want to **authenticate users** _so that I can ensure only authorized access to the system_.

### Logging and Monitoring

3. As a `System`, I want to **log all significant events and errors** _so that IT operators can monitor and troubleshoot the system effectively_.

4. As an `ITOperator`, I want to **retrieve system logs** _so that I can analyze system behavior and identify issues_.

### Notification Handling

5. As an `APIConsumer`, I want to **trigger email notifications** _so that I can inform customers and suppliers about important events_.

6. As a `JobScheduler`, I want to **interact with the External Notification Service** _so that I can send scheduled emails to customers and suppliers_.

### Data Reconciliation

7. As a `JobScheduler`, I want to **initiate the reconciliation process between the customer document DB and admin relational DB** _so that I can ensure data consistency across the system_.

8. As an `APIConsumer`, I want to **trigger a reconciliation event** _so that I can inform the job scheduler about changes on my side_.

9. As a `System`, I want to **executed predefined reconciliation jobs** _so that I can resolve any discrepancies between customer facing data and operational data_.

10. As an `ITOperator`, I want to **monitor the reconciliation process and view detailed logs of changes made between the document DB and relational DB** _so that I can ensure data consistency and quickly address any synchronization issues_.
