# Astro Bookings: Comprehensive Domain Model

> Timestamp: 08/08/2024 18:00 UTC

## User Management Subdomain

### User

Represents the base user entity for all system users.

- **id**: Unique identifier `UUID`
- **email**: User's email address `Text`
- **password**: Hashed password `Text`
- **firstName**: User's first name `Text`
- **lastName**: User's last name `Text`
- **phoneNumber**: User's contact number `Text`
- **role**: User's role in the system `Enum` [Customer, Supplier, Employee]

### Customer

Represents a user who can book space trips.

- **id**: Unique identifier `UUID`
- **userId**: Reference to User entity `UUID`
- **legalNumber**: Customer's legal identification number `Text`
- **legalAddress**: Customer's legal address `Text`
- **isVIP**: Indicates if the customer has VIP status `Boolean`

### Supplier

Represents a user who provides rockets and schedules launches.

- **id**: Unique identifier `UUID`
- **userId**: Reference to User entity `UUID`
- **companyName**: Name of the supplier's company `Text`
- **legalNumber**: Supplier's legal identification number `Text`
- **legalAddress**: Supplier's legal address `Text`

### Employee

Represents a user who manages bookings and system operations.

- **id**: Unique identifier `UUID`
- **userId**: Reference to User entity `UUID`
- **department**: Employee's department `Text`

## Space Travel Subdomain

### Supplier

Represents a user who provides rockets and schedules launches.

- **id**: Unique identifier `UUID`
- **companyName**: Name of the supplier's company `Text`

### Rocket

Represents a spacecraft owned by a supplier.

- **id**: Unique identifier `UUID`
- **supplierId**: Reference to Supplier entity `UUID`
- **name**: Name of the rocket `Text`
- **specifications**: Technical details of the rocket `Text`

### Launch

Represents a scheduled space trip using a specific rocket.

- **id**: Unique identifier `UUID`
- **rocketId**: Reference to Rocket entity `UUID`
- **supplierId**: Reference to Supplier entity `UUID`
- **launchDate**: Date and time of the launch `DateTime`
- **destination**: Destination of the launch `Text`
- **capacity**: Total number of seats available `Integer`
- **pricePerSeat**: Cost per seat `Decimal`
- **status**: Current status of the launch `Enum` [Scheduled, In Progress, Completed, Cancelled]

## Booking Subdomain

### Customer

Represents a user who can book space trips.

- **id**: Unique identifier `UUID`
- **firstName**: Customer's first name `Text`
- **lastName**: Customer's last name `Text`
- **email**: Customer's email address `Text`
- **isVIP**: Indicates if the customer has VIP status `Boolean`

### Booking

Represents a reservation made by a customer for a specific launch.

- **id**: Unique identifier `UUID`
- **customerId**: Reference to Customer entity `UUID`
- **launchId**: Reference to Launch entity `UUID`
- **numberOfSeats**: Number of seats booked `Integer`
- **status**: Current status of the booking `Enum` [Pending, Confirmed, Cancelled]
- **totalAmount**: Total cost of the booking `Decimal`

### Passenger

Represents an individual traveling on a booked launch.

- **id**: Unique identifier `UUID`
- **bookingId**: Reference to Booking entity `UUID`
- **firstName**: Passenger's first name `Text`
- **lastName**: Passenger's last name `Text`
- **dateOfBirth**: Passenger's date of birth `Date`

### Launch

Represents a scheduled space trip (simplified for booking context).

- **id**: Unique identifier `UUID`
- **launchDate**: Date and time of the launch `DateTime`
- **destination**: Destination of the launch `Text`
- **pricePerSeat**: Cost per seat `Decimal`
- **availableSeats**: Number of seats available `Integer`

## Financial Subdomain

### Customer

Represents a customer in the financial context.

- **id**: Unique identifier `UUID`
- **firstName**: Customer's first name `Text`
- **lastName**: Customer's last name `Text`
- **email**: Customer's email address `Text`
- **legalNumber**: Customer's legal identification number `Text`
- **legalAddress**: Customer's legal address `Text`

### Supplier

Represents a supplier in the financial context.

- **id**: Unique identifier `UUID`
- **companyName**: Name of the supplier's company `Text`
- **legalNumber**: Supplier's legal identification number `Text`
- **legalAddress**: Supplier's legal address `Text`

### Invoice

Represents a financial document for a booking or a supplier's platform usage.

- **id**: Unique identifier `UUID`
- **bookingId**: Reference to Booking entity `UUID` (nullable)
- **launchId**: Reference to Launch entity `UUID` (nullable)
- **amount**: Total amount of the invoice `Decimal`
- **status**: Current status of the invoice `Enum` [Pending, Paid, Overdue, Cancelled]
- **issueDate**: Date the invoice was issued `DateTime`
- **type**: Type of the invoice `Enum` [CustomerBooking, SupplierFee]

### PaymentRecord

Represents a payment made towards an invoice.

- **id**: Unique identifier `UUID`
- **invoiceId**: Reference to Invoice entity `UUID`
- **amount**: Amount paid `Decimal`
- **paymentDate**: Date of the payment `DateTime`
- **paymentMethod**: Method used for payment `Enum` [CreditCard, BankTransfer, PayPal]

## Notification Subdomain

### User

Represents a user who can receive notifications.

- **id**: Unique identifier `UUID`
- **email**: User's email address `Text`
- **firstName**: User's first name `Text`
- **lastName**: User's last name `Text`
- **role**: User's role in the system `Enum` [Customer, Supplier, Employee]

### Notification

Represents messages sent to users about various events in the system.

- **id**: Unique identifier `UUID`
- **userId**: Reference to User entity `UUID`
- **launchId**: Reference to Launch entity `UUID` (nullable)
- **bookingId**: Reference to Booking entity `UUID` (nullable)
- **invoiceId**: Reference to Invoice entity `UUID` (nullable)
- **message**: Content of the notification `Text`
- **timestamp**: Date and time the notification was created `DateTime`
- **type**: Type of the notification `Enum` [LaunchUpdate, BookingConfirmation, PaymentReminder, SystemAlert]
- **isRead**: Indicates if the notification has been read `Boolean`

## System Management Subdomain

### Employee

Represents an employee who manages system operations.

- **id**: Unique identifier `UUID`
- **firstName**: Employee's first name `Text`
- **lastName**: Employee's last name `Text`
- **email**: Employee's email address `Text`
- **department**: Employee's department `Text`

### SystemLog

Represents records of system events and operations.

- **id**: Unique identifier `UUID`
- **timestamp**: Date and time of the log entry `DateTime`
- **logLevel**: Severity level of the log `Enum` [Info, Warning, Error, Critical]
- **message**: Description of the event or operation `Text`
- **source**: Source of the log entry `Text`

