# Project: Astro Bookings Admin API Domain Model

> Timestamp: 07/08/2024 16:15

## Entities and Attributes

### Supplier

Represents a company that provides rocket launches.

- **id**: Unique identifier `UUID`
- **name**: Company name `Text`
- **email**: Contact email address `Text`
- **phone**: Contact phone number `Text`
- **taxId**: Tax identification number `Text`
- **legalAddress**: Legal address of the company `Text`
- _feeRate_: Current fee rate for the supplier `Decimal`

### Rocket

Represents a spacecraft capable of carrying passengers.

- **id**: Unique identifier `UUID`
- **supplierId**: ID of the supplier who owns the rocket `UUID`
- **name**: Name of the rocket `Text`
- **capacity**: Passenger capacity `Integer`
- **range**: Maximum travel range `Text` ["Low Earth Orbit", "Moon", "Mars"]

### Launch

Represents a scheduled space trip using a specific rocket.

- **id**: Unique identifier `UUID`
- **supplierId**: ID of the supplier scheduling the launch `UUID`
- **rocketId**: ID of the rocket used for the launch `UUID`
- **destination**: Destination of the launch `Text`
- **launchDate**: Scheduled date and time of the launch `DateTime`
- **price**: Price per seat `Decimal`
- **status**: Current status of the launch `Text` ["Scheduled", "Delayed", "Cancelled", "Completed"]
- **spaceport**: Location from which the rocket is launched `Text`
- _availableSeats_: Number of seats still available `Integer`

### Customer

Represents a person who can book seats on rocket launches.

- **id**: Unique identifier `UUID`
- **firstName**: First name of the customer `Text`
- **lastName**: Last name of the customer `Text`
- **email**: Email address `Text`
- **phone**: Phone number `Text`
- **dateOfBirth**: Date of birth `Date`
- _isVip_: Whether the customer has VIP status `Boolean`
- _fullName_: Full name of the customer `Text`

### Booking

Represents a reservation of seats on a specific launch.

- **id**: Unique identifier `UUID`
- **customerId**: ID of the customer making the booking `UUID`
- **launchId**: ID of the launch being booked `UUID`
- **status**: Current status of the booking `Text` ["Confirmed", "Cancelled", "Refunded"]
- **seatCount**: Number of seats booked `Integer`
- _totalPrice_: Total price of the booking `Decimal`

### Passenger

Represents a person traveling on a specific launch.

- **id**: Unique identifier `UUID`
- **bookingId**: ID of the booking this passenger is part of `UUID`
- **firstName**: First name of the passenger `Text`
- **lastName**: Last name of the passenger `Text`
- **dateOfBirth**: Date of birth `Date`
- **passportNumber**: Passport number `Text`
- specialNeeds: Any special requirements or needs `Text`
- _fullName_: Full name of the passenger `Text`

### Invoice

Represents a financial document for a booking or launch.

- **id**: Unique identifier `UUID`
- **recipientId**: ID of the customer or supplier being invoiced `UUID`
- **bookingId**: ID of the related booking (for customer invoices) `UUID`
- **launchId**: ID of the related launch (for supplier fee invoices) `UUID`
- **amount**: Total amount of the invoice `Decimal`
- **status**: Current status of the invoice `Text` ["Pending", "Paid", "Overdue", "Cancelled"]
- **dueDate**: Date by which the payment is due `Date`

### Employee

Represents an Astro Bookings staff member.

- **id**: Unique identifier `UUID`
- **firstName**: First name of the employee `Text`
- **lastName**: Last name of the employee `Text`
- **email**: Email address `Text`
- **role**: Role of the employee `Text` ["Admin", "CustomerSupport", "FinanceManager"]
- _fullName_: Full name of the employee `Text`
