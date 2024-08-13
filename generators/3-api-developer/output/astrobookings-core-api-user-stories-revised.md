# AstroBookings Core API: User Stories with API Details

## Authentication and Authorization

### 1. Secure User Registration
As a `System`, I want to **securely store and manage user credentials** so that I can maintain the integrity of user accounts.

**POST** _/auth/register_

Sample Input:
```json
{
  "email": "newuser@example.com",
  "password": "SecurePass123!",
  "role": "customer"
}
```

Sample Output:
```json
{
  "id": "507f1f77bcf86cd799439011",
  "email": "newuser@example.com",
  "role": "customer",
  "createdAt": "2024-08-12T10:00:00Z"
}
```

### 2. User Authentication
As an `APIConsumer`, I want to **authenticate users** so that I can ensure only authorized access to the system.

**POST** _/auth/login_

Sample Input:
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

Sample Output:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "role": "customer"
  }
}
```

## Logging and Monitoring

### 3. System Event Logging
As a `System`, I want to **log all significant events and errors** so that IT operators can monitor and troubleshoot the system effectively.

**POST** _/logs_

Sample Input:
```json
{
  "eventType": "AUTH",
  "severity": "error",
  "message": "Failed login attempt",
  "userId": "507f1f77bcf86cd799439011",
  "ipAddress": "192.168.1.1",
  "additionalData": {
    "reason": "Invalid password"
  }
}
```

Sample Output:
```json
{
  "id": "507f1f77bcf86cd799439013",
  "timestamp": "2024-08-12T10:15:30Z",
  "eventType": "AUTH",
  "severity": "error",
  "message": "Failed login attempt",
  "userId": "507f1f77bcf86cd799439011",
  "ipAddress": "192.168.1.1",
  "additionalData": {
    "reason": "Invalid password"
  }
}
```

### 4. Retrieve System Logs
As an `ITOperator`, I want to **retrieve system logs** so that I can analyze system behavior and identify issues.

**GET** _/logs_

Sample Input (Query Parameters):
```
from=2024-08-12T00:00:00Z
to=2024-08-12T23:59:59Z
eventType=AUTH
severity=error
```

Sample Output:
```json
{
  "logs": [
    {
      "id": "507f1f77bcf86cd799439013",
      "timestamp": "2024-08-12T10:15:30Z",
      "eventType": "AUTH",
      "severity": "error",
      "message": "Failed login attempt",
      "userId": "507f1f77bcf86cd799439011",
      "ipAddress": "192.168.1.1",
      "additionalData": {
        "reason": "Invalid password"
      }
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10
}
```

## Notification Handling

### 5. Trigger Email Notifications
As an `APIConsumer`, I want to **trigger email notifications** so that I can inform customers and suppliers about important events.

**POST** _/notifications_

Sample Input:
```json
{
  "type": "NEW_BOOKING",
  "recipient": "supplier@example.com",
  "data": {
    "bookingId": "booking123",
    "launchId": "launch456",
    "seats": 2
  }
}
```

Sample Output:
```json
{
  "jobId": "507f1f77bcf86cd799439014",
  "status": "queued"
}
```

### 6. Process Notification Jobs
As a `JobScheduler`, I want to **interact with the External Notification Service** so that I can send scheduled emails to customers and suppliers.

**POST** _/jobs_

Sample Input:
```json
{
  "type": "NOTIFICATION",
  "notification": {
    "recipientEmail": "customer@example.com",
    "subject": "Booking Confirmation",
    "message": "Your booking has been confirmed."
  }
}
```

Sample Output:
```json
{
  "id": "507f1f77bcf86cd799439015",
  "type": "NOTIFICATION",
  "status": "queued",
  "createdAt": "2024-08-12T12:00:00Z",
  "updatedAt": "2024-08-12T12:00:00Z"
}
```

## Data Reconciliation

### 7. Initiate Reconciliation Process
As a `JobScheduler`, I want to **initiate the reconciliation process between the customer document DB and admin relational DB** so that I can ensure data consistency across the system.

**POST** _/reconciliation_

Sample Input:
```json
{
  "entityType": "launch",
  "entityId": "507f1f77bcf86cd799439016"
}
```

Sample Output:
```json
{
  "jobId": "507f1f77bcf86cd799439017",
  "type": "RECONCILIATION",
  "status": "queued",
  "createdAt": "2024-08-12T13:00:00Z",
  "updatedAt": "2024-08-12T13:00:00Z",
  "reconciliation": {
    "entityType": "launch",
    "entityId": "507f1f77bcf86cd799439016"
  }
}
```

### 8. Trigger Reconciliation Event
As an `APIConsumer`, I want to **trigger a reconciliation event** so that I can inform the job scheduler about changes on my side.

**POST** _/reconciliation/events_

Sample Input:
```json
{
  "entityType": "booking",
  "entityId": "507f1f77bcf86cd799439018",
  "action": "update"
}
```

Sample Output:
```json
{
  "eventId": "507f1f77bcf86cd799439019",
  "status": "queued"
}
```

### 9. Execute Reconciliation Jobs
As a `System`, I want to **execute predefined reconciliation jobs** so that I can resolve any discrepancies between customer facing data and operational data.

**PUT** _/jobs/{jobId}/execute_

Sample Input:
```json
{
  "jobId": "507f1f77bcf86cd799439017"
}
```

Sample Output:
```json
{
  "jobId": "507f1f77bcf86cd799439017",
  "type": "RECONCILIATION",
  "status": "completed",
  "startedAt": "2024-08-12T13:05:00Z",
  "completedAt": "2024-08-12T13:10:00Z",
  "reconciliation": {
    "entityType": "launch",
    "entityId": "507f1f77bcf86cd799439016",
    "changesLog": "Updated 3 fields: capacity, price, date"
  }
}
```

### 10. Monitor Reconciliation Process
As an `ITOperator`, I want to **monitor the reconciliation process and view detailed logs of changes made between the document DB and relational DB** so that I can ensure data consistency and quickly address any synchronization issues.

**GET** _/reconciliation/jobs_

Sample Input (Query Parameters):
```
from=2024-08-12T00:00:00Z
to=2024-08-12T23:59:59Z
status=completed
```

Sample Output:
```json
{
  "jobs": [
    {
      "jobId": "507f1f77bcf86cd799439017",
      "type": "RECONCILIATION",
      "status": "completed",
      "startedAt": "2024-08-12T13:05:00Z",
      "completedAt": "2024-08-12T13:10:00Z",
      "reconciliation": {
        "entityType": "launch",
        "entityId": "507f1f77bcf86cd799439016",
        "changesLog": "Updated 3 fields: capacity, price, date"
      }
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10
}
```
