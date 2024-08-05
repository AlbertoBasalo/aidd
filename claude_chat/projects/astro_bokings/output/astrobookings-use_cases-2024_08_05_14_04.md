# Use Cases for Astro Bookings

## Actors

- `Supplier`: Companies that offer space trips on passenger rockets.
- `Customer`: Travelers who book seats for passengers on rocket launches.
- `VIP Customer`: Customers who have already booked two trips.
- `Employee`: Astro Bookings staff managing bookings, launches, and financial operations.
- `System`: The Astro Bookings platform.

## Use Cases

- **Manage Rocket**: Supplier manages their rocket inventory.
- **Schedule Launch**: Supplier schedules a new rocket launch.
- **View Available Launches**: Customer views upcoming launches with available seats.
- **Book Seats**: Customer books seats for a launch.
- **Cancel Booking**: Customer cancels a booking.
- **Process Payment**: System processes payment for bookings.
- **Issue Refund**: System issues refund for cancelled bookings.
- **Manage Bookings**: Employee views and manages booking status.
- **Generate Financial Reports**: Employee generates financial reports.
- **Send Notifications**: System sends notifications about bookings, cancellations, and launches.
- **Identify VIP Customers**: System identifies and manages VIP customer status.

## Use Cases Details

### Manage Rocket

- **Actors**: `Supplier`, `System`
- **Description**: Supplier manages their rocket inventory.
- **Preconditions**: Supplier is authenticated and authorized.
- **Normal flow**:
  1. `Supplier` accesses the rocket management interface.
  2. `Supplier` chooses to add a new rocket, update an existing one, or remove a rocket.
  3. For adding/updating:
     a. `Supplier` enters/updates rocket details (name, capacity, destination range).
     b. `System` validates the information.
     c. `System` saves the rocket information.
  4. For removing:
     a. `Supplier` selects a rocket to remove.
     b. `System` checks if the rocket is associated with any scheduled launches.
     c. If not associated, `System` removes the rocket from the inventory.
- **Alternative flows**:
  3b. If information is invalid, `System` displays error messages and returns to step 3a.
  4b. If rocket is associated with scheduled launches, `System` informs `Supplier` and cancellation is prevented.
- **Postconditions**: Rocket inventory is updated, `System` confirms the action to `Supplier`.

### Schedule Launch

- **Actors**: `Supplier`, `System`, `VIP Customer`
- **Description**: Supplier schedules a new rocket launch.
- **Preconditions**: Supplier is authenticated and authorized, and has at least one rocket in their inventory.
- **Normal flow**:
  1. `Supplier` accesses the launch scheduling interface.
  2. `Supplier` selects a rocket for the launch.
  3. `Supplier` enters launch details (date, spaceport, price per seat).
  4. `System` validates the information.
  5. `System` creates the launch offer.
  6. `System` notifies `VIP Customer` about the new launch.
- **Alternative flows**:
  4a. If information is invalid, `System` displays error messages and returns to step 3.
- **Postconditions**: New launch is scheduled and available for booking, VIP customers are notified.

### View Available Launches

- **Actors**: `Customer`, `System`
- **Description**: Customer views upcoming launches with available seats.
- **Preconditions**: None (accessible to both authenticated and anonymous users).
- **Normal flow**:
  1. `Customer` accesses the launch listing page.
  2. `System` displays a list of upcoming launches with available seats.
  3. `Customer` can view details of each launch.
- **Alternative flows**:
  2a. If no launches are available, `System` displays a message indicating no available launches.
- **Postconditions**: Customer is informed about available launches.

### Book Seats

- **Actors**: `Customer`, `System`
- **Description**: Customer books seats for a launch.
- **Preconditions**: Customer is authenticated, launch has available seats.
- **Normal flow**:
  1. `Customer` selects a launch to book.
  2. `Customer` specifies number of seats (up to 4, or 6 for VIP).
  3. `Customer` enters passenger information for each seat.
  4. `System` validates passenger information (age between 18-70).
  5. `System` calculates total price.
  6. `Customer` confirms booking.
  7. `System` processes payment.
  8. `System` confirms booking and sends confirmation.
- **Alternative flows**:
  4a. If passenger information is invalid, `System` asks for correction.
  7a. If payment fails, `System` informs `Customer` and cancels booking process.
- **Postconditions**: Seats are booked, payment is processed, launch availability is updated.

### Cancel Booking

- **Actors**: `Customer`, `System`
- **Description**: Customer cancels a booking.
- **Preconditions**: Customer has an active booking.
- **Normal flow**:
  1. `Customer` selects a booking to cancel.
  2. `System` calculates refund amount based on cancellation time.
  3. `Customer` confirms cancellation.
  4. `System` processes the cancellation and initiates refund.
  5. `System` updates launch availability.
- **Alternative flows**:
  2a. If cancellation is too close to launch date, `System` informs no refund is possible.
- **Postconditions**: Booking is cancelled, refund is processed if applicable, launch availability is updated.

### Generate Financial Reports

- **Actors**: `Employee`, `System`
- **Description**: Employee generates financial reports.
- **Preconditions**: Employee is authenticated and authorized.
- **Normal flow**:
  1. `Employee` accesses the reporting interface.
  2. `Employee` selects report type and parameters (date range, supplier, etc.).
  3. `System` generates the requested report.
  4. `System` displays the report to the `Employee`.
- **Alternative flows**:
  3a. If no data is available for the selected parameters, `System` informs `Employee`.
- **Postconditions**: Financial report is generated and displayed.

### Send Notifications

- **Actors**: `System`, `Customer`, `VIP Customer`, `Supplier`
- **Description**: System sends notifications about bookings, cancellations, and launches.
- **Preconditions**: Notifiable event occurs (new booking, cancellation, launch update, etc.)
- **Normal flow**:
  1. `System` detects a notifiable event.
  2. `System` prepares the appropriate notification.
  3. `System` sends the notification to relevant stakeholders.
  4. `System` logs the notification status.
- **Alternative flows**:
  3a. If notification delivery fails, `System` retries sending after a set interval.
- **Postconditions**: Stakeholders are informed of relevant events, notification status is logged.

