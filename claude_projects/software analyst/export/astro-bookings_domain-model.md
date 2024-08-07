# AstroBookings: Domain Model

> Timestamp: 07/08/2024 16:00

## 🧑‍💻 Customer Web Application & Customer API Service

### User

Description: Represents any user of the system, including customers, suppliers, and employees.

- **id**: Unique identifier for the user `UUID`
- **email**: User's email address `Text`
- **passwordHash**: Hashed password for authentication `Text`
- **role**: User's role in the system `Text` [Customer, Supplier, Employee]
- **createdAt**: Timestamp of user creation `DateTime`
- **updatedAt**: Timestamp of last user update `DateTime`

### Customer

Description: Represents a registered customer who can book space travel experiences.

- **id**: Unique identifier for the customer `UUID`
- userId: Reference to the User entity `UUID`
- **firstName**: Customer's first name `Text`
- **lastName**: Customer's last name `Text`
- **dateOfBirth**: Customer's date of birth `Date`
- contactNumber: Customer's contact phone number `Text`
- address: Customer's address `Text`
- _isVIP_: Whether the customer is a VIP `Boolean`
- **createdAt**: Timestamp of customer creation `DateTime`
- **updatedAt**: Timestamp of last customer update `DateTime`

### Booking

Description: Represents a reservation made by a customer for a specific launch.

- **id**: Unique identifier for the booking `UUID`
- **customerId**: Reference to the Customer entity `UUID`
- **launchId**: Reference to the Launch entity `UUID`
- **numberOfSeats**: Number of seats booked `Integer` (1-6)
- **totalPrice**: Total price of the booking `Decimal`
- **status**: Current status of the booking `Text` [Confirmed, Cancelled, Completed]
- bookingDate: Date when the booking was made `DateTime`
- cancellationDate: Date when the booking was cancelled (if applicable) `DateTime`
- **createdAt**: Timestamp of booking creation `DateTime`
- **updatedAt**: Timestamp of last booking update `DateTime`

### Launch

Description: Represents a scheduled space travel event using a specific rocket.

- **id**: Unique identifier for the launch `UUID`
- **rocketId**: Reference to the Rocket entity `UUID`
- **supplierId**: Reference to the Supplier entity `UUID`
- **destination**: Destination of the launch `Text` [LowEarthOrbit, ISS, Moon, Mars]
- **launchDate**: Scheduled date and time of the launch `DateTime`
- **price**: Price per seat for the launch `Decimal`
- **totalSeats**: Total number of seats available on the launch `Integer`
- _availableSeats_: Number of seats still available `Integer`
- **status**: Current status of the launch `Text` [Scheduled, Delayed, Completed, Aborted]
- **createdAt**: Timestamp of launch creation `DateTime`
- **updatedAt**: Timestamp of last launch update `DateTime`

### CustomerNotification

Description: Represents notifications sent to customers about their bookings or new launches.

- **id**: Unique identifier for the notification `UUID`
- **customerId**: Reference to the Customer entity `UUID`
- **type**: Type of notification `Text` [BookingConfirmation, LaunchUpdate, NewLaunchAlert]
- **content**: Content of the notification `Text`
- **sentAt**: Timestamp when the notification was sent `DateTime`
- isRead: Whether the notification has been read by the customer `Boolean`

## 🧑‍💻 Supplier Web Application & Admin API Service

### Supplier

Description: Represents a company that provides rocket launches for space travel.

- **id**: Unique identifier for the supplier `UUID`
- userId: Reference to the User entity `UUID`
- **companyName**: Name of the supplier company `Text`
- **contactPerson**: Name of the primary contact person `Text`
- **contactEmail**: Email of the primary contact person `Text`
- contactPhone: Phone number of the primary contact person `Text`
- **taxId**: Tax identification number of the company `Text`
- **legalAddress**: Legal address of the company `Text`
- **createdAt**: Timestamp of supplier creation `DateTime`
- **updatedAt**: Timestamp of last supplier update `DateTime`

### Rocket

Description: Represents a spacecraft capable of carrying passengers to space.

- **id**: Unique identifier for the rocket `UUID`
- **supplierId**: Reference to the Supplier entity `UUID`
- **name**: Name of the rocket `Text`
- **model**: Model or version of the rocket `Text`
- **capacity**: Maximum number of passengers the rocket can carry `Integer`
- **range**: Maximum travel range of the rocket `Text` [LowEarthOrbit, ISS, Moon, Mars]
- description: Detailed description of the rocket `Text`
- **createdAt**: Timestamp of rocket creation `DateTime`
- **updatedAt**: Timestamp of last rocket update `DateTime`

### Spaceport

Description: Represents a location from which rockets are launched.

- **id**: Unique identifier for the spaceport `UUID`
- **name**: Name of the spaceport `Text`
- **location**: Geographic location of the spaceport `Text`
- coordinates: GPS coordinates of the spaceport `Text`
- description: Detailed description of the spaceport `Text`
- **createdAt**: Timestamp of spaceport creation `DateTime`
- **updatedAt**: Timestamp of last spaceport update `DateTime`

### SupplierNotification

Description: Represents notifications sent to suppliers about their launches or bookings.

- **id**: Unique identifier for the notification `UUID`
- **supplierId**: Reference to the Supplier entity `UUID`
- **type**: Type of notification `Text` [NewBooking, LaunchUpdate, PaymentReceived]
- **content**: Content of the notification `Text`
- **sentAt**: Timestamp when the notification was sent `DateTime`
- isRead: Whether the notification has been read by the supplier `Boolean`

## 🧑‍💻 Employee Web Application & Admin API Service

### Employee

Description: Represents an AstroBookings employee who manages various aspects of the system.

- **id**: Unique identifier for the employee `UUID`
- userId: Reference to the User entity `UUID`
- **firstName**: Employee's first name `Text`
- **lastName**: Employee's last name `Text`
- **position**: Employee's position in the company `Text` [CustomerService, FinancialOperator, OperationsManager]
- **department**: Department the employee works in `Text`
- contactEmail: Employee's work email `Text`
- contactPhone: Employee's work phone number `Text`
- **createdAt**: Timestamp of employee creation `DateTime`
- **updatedAt**: Timestamp of last employee update `DateTime`

### Invoice

Description: Represents a financial document for a booking or a supplier's service.

- **id**: Unique identifier for the invoice `UUID`
- **relatedId**: Reference to either a Booking or Launch entity `UUID`
- **type**: Type of invoice `Text` [CustomerBooking, SupplierLaunch, SupplierFee]
- **recipientId**: Reference to either a Customer or Supplier entity `UUID`
- **amount**: Total amount of the invoice `Decimal`
- **status**: Current status of the invoice `Text` [Pending, Paid, Refunded, Failed]
- **dueDate**: Date by which the invoice should be paid `Date`
- paymentDate: Date when the invoice was paid (if applicable) `Date`
- **createdAt**: Timestamp of invoice creation `DateTime`
- **updatedAt**: Timestamp of last invoice update `DateTime`

## 🧑‍💻 IT Operations Web Application & System Monitoring API Service

### SystemLog

Description: Represents a log entry in the system for monitoring and troubleshooting.

- **id**: Unique identifier for the log entry `UUID`
- **timestamp**: Timestamp when the log entry was created `DateTime`
- **level**: Severity level of the log `Text` [Info, Warning, Error, Critical]
- **component**: System component that generated the log `Text`
- **message**: Detailed log message `Text`
- stackTrace: Stack trace for error logs (if applicable) `Text`

### NotificationStatus

Description: Represents the status of notifications sent by the system.

- **id**: Unique identifier for the notification status `UUID`
- **notificationId**: Reference to either a CustomerNotification or SupplierNotification entity `UUID`
- **status**: Current status of the notification `Text` [Sent, Delivered, Failed]
- **timestamp**: Timestamp of the last status update `DateTime`
- failureReason: Reason for failure (if applicable) `Text`

### SystemMetric

Description: Represents various performance metrics of the system.

- **id**: Unique identifier for the system metric `UUID`
- **timestamp**: Timestamp when the metric was recorded `DateTime`
- **metricName**: Name of the metric being measured `Text`
- **metricValue**: Recorded value of the metric `Decimal`
- **unit**: Unit of measurement for the metric `Text`

## 🧑‍💼 Authentication Service

### AuthenticationToken

Description: Represents an authentication token for user sessions.

- **id**: Unique identifier for the token `UUID`
- **userId**: Reference to the User entity `UUID`
- **token**: The actual token string `Text`
- **expiresAt**: Expiration timestamp of the token `DateTime`
- isRevoked: Whether the token has been revoked `Boolean`
- **createdAt**: Timestamp of token creation `DateTime`

## 🧑‍🏭 Data Synchronization Job

### SyncLog

Description: Represents a log of data synchronization activities.

- **id**: Unique identifier for the sync log `UUID`
- **timestamp**: Timestamp when the sync activity occurred `DateTime`
- **operation**: Type of sync operation performed `Text` [CustomerSync, BookingSync, LaunchSync]
- **status**: Status of the sync operation `Text` [Success, Partial, Failed]
- **affectedRecords**: Number of records affected by the sync `Integer`
- errorDetails: Details of any errors encountered during sync `Text`

## 🧑‍🏭 Notification Job

### NotificationQueue

Description: Represents the queue of notifications to be sent.

- **id**: Unique identifier for the queue item `UUID`
- **notificationId**: Reference to either a CustomerNotification or SupplierNotification entity `UUID`
- **priority**: Priority level of the notification `Integer` (1-5)
- **scheduledTime**: Scheduled time for sending the notification `DateTime`
- **status**: Current status in the queue `Text` [Pending, Processing, Sent, Failed]
- retryCount: Number of retry attempts (if applicable) `Integer`
- lastAttempt: Timestamp of the last sending attempt `DateTime`

