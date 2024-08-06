# Use Cases Document for Astro Bookings

## Actors

- `Supplier`: Companies that offer space trips on passenger rockets.
- `Customer`: Travelers who book seats for passengers on rocket launches.
- `VIP Customer`: Customers who have already booked two trips.
- `Employee`: Astro Bookings staff managing bookings, launches, and financial operations.
- `System`: The Astro Bookings platform.

## Use Cases

- **Schedule Launch**: Supplier schedules a new rocket launch.
- **Book Seats**: Customer books seats for a launch.
- **Cancel Booking**: Customer cancels a booking.
- **Manage Bookings**: Employee views and manages booking status.
- **Process Payments**: Employee handles invoices and refunds.
- **Notify Stakeholders**: System sends notifications about bookings, cancellations, and launches.
- **View Available Launches**: Customer views upcoming launches with available seats.
- **Manage Supplier Profile**: Supplier manages their rockets and launch information.
- **Generate Reports**: Employee generates financial and operational reports.
- **Identify VIP Customers**: System identifies and manages VIP customer status.

## Use Cases Details

### Schedule Launch

- **Actors**: `Supplier`, `System`, `VIP Customer`
- **Description**: Supplier schedules a new rocket launch.
- **Preconditions**: Supplier is authenticated and authorized.
- **Normal flow**:
  1. `Supplier` enters rocket details if needed (capacity, destination range)
  2. `Supplier` enters launch details (date, spaceport, price per seat)
  3. `System` validates the information
  4. `System` creates the launch offer
  5. `System` notifies `VIP Customer` about the new launch
- **Postconditions**: New launch is scheduled and available for booking

### Book Seats

- **Actors**: `Customer`, `System`
- **Description**: Customer books seats for a launch.
- **Preconditions**: Customer is authenticated, launch has available seats.
- **Normal flow**:
  1. `Customer` selects a launch
  2. `Customer` specifies number of seats (up to 4, or 6 for VIP)
  3. `Customer` enters passenger information
  4. `System` validates passenger age (18-70 years old)
  5. `System` confirms booking and processes payment
  6. `System` updates launch availability
- **Postconditions**: Seats are booked, payment is processed, launch availability is updated

### Cancel Booking

- **Actors**: `Customer`, `System`
- **Description**: Customer cancels a booking.
- **Preconditions**: Customer has an active booking.
- **Normal flow**:
  1. `Customer` selects a booking to cancel
  2. `System` calculates refund amount based on cancellation time
  3. `System` processes the cancellation and refund
  4. `System` updates launch availability
- **Postconditions**: Booking is cancelled, refund is processed if applicable

### Manage Bookings

- **Actors**: `Employee`, `System`
- **Description**: Employee views and manages booking status.
- **Preconditions**: Employee is authenticated and authorized.
- **Normal flow**:
  1. `Employee` accesses booking management interface
  2. `System` displays list of bookings
  3. `Employee` can view details, update status, or process changes for bookings
- **Postconditions**: Booking information is updated as needed

### Process Payments

- **Actors**: `Employee`, `System`
- **Description**: Employee handles invoices and refunds.
- **Preconditions**: Employee is authenticated and authorized.
- **Normal flow**:
  1. `Employee` accesses financial management interface
  2. `System` displays list of invoices and refunds
  3. `Employee` can view details, update payment status, or process payments/refunds
  4. `System` updates financial records accordingly
- **Postconditions**: Financial records are updated, payments/refunds are processed

### Notify Stakeholders

- **Actors**: `System`, `Supplier`, `Customer`, `VIP Customer`
- **Description**: System sends notifications about bookings, cancellations, and launches.
- **Preconditions**: Notifiable event occurs (new booking, cancellation, launch update, etc.)
- **Normal flow**:
  1. `System` detects notifiable event
  2. `System` prepares appropriate notification
  3. `System` sends notification to relevant stakeholders
- **Postconditions**: Stakeholders are informed of relevant events

### View Available Launches

- **Actors**: `Customer`, `System`
- **Description**: Customer views upcoming launches with available seats.
- **Preconditions**: None
- **Normal flow**:
  1. `Customer` accesses launch listing page
  2. `System` displays list of upcoming launches with available seats
  3. `Customer` can view launch details and proceed to booking
- **Postconditions**: Customer is informed about available launches

### Manage Supplier Profile

- **Actors**: `Supplier`, `System`
- **Description**: Supplier manages their rockets and launch information.
- **Preconditions**: Supplier is authenticated and authorized.
- **Normal flow**:
  1. `Supplier` accesses their profile management interface
  2. `Supplier` can add/edit rocket information
  3. `Supplier` can view and manage scheduled launches
  4. `System` updates and stores the information
- **Postconditions**: Supplier's profile and launch information are updated

### Generate Reports

- **Actors**: `Employee`, `System`
- **Description**: Employee generates financial and operational reports.
- **Preconditions**: Employee is authenticated and authorized.
- **Normal flow**:
  1. `Employee` accesses reporting interface
  2. `Employee` selects report type and parameters
  3. `System` generates and displays the requested report
- **Postconditions**: Employee has access to requested report data

### Identify VIP Customers

- **Actors**: `System`, `Customer`
- **Description**: System identifies and manages VIP customer status.
- **Preconditions**: Customer has completed bookings.
- **Normal flow**:
  1. `System` tracks customer booking history
  2. `System` identifies customers with two or more completed trips
  3. `System` updates customer status to VIP
  4. `System` applies VIP benefits (e.g., additional seat allowance, priority notifications)
- **Postconditions**: Customer status is updated, VIP benefits are applied
