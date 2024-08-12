# AstroBookings: Formal Requirements

> Generated on: Monday, August 12, 2024, 10:15 AM UTC

## Functional Requirements

### Booking Management

1. The system must allow customers to book seats on rockets for space trips.
2. Customers can book up to 4 seats in any launch.
3. VIP customers (who have booked 2+ trips) can book 2 additional seats.
4. The system must allow customers to cancel their bookings.
5. The system must handle refunds based on cancellation timing:
   - 90% refund if cancelled 1 year before launch
   - 70% refund if cancelled 3 months before launch
   - No refund if cancelled less than 3 months before launch

### Supplier Management

1. Suppliers must be able to showcase their rockets and scheduled launches.
2. Suppliers can create launch offers with a price per seat.
3. The system must track rocket capacity and destination range.
4. Suppliers should be able to manage customer bookings.

### Launch Management

1. The system must handle launch scheduling, with dates beyond one year from booking.
2. The system must support different rocket types: Suborbital, Low Earth Orbit, and Interplanetary.
3. The system must handle launch delays or abortions due to various factors.
4. Launches with less than 30% seats filled 3 months before launch date can be aborted.

### Notification System

1. The system must notify clients and providers of reservation cancellations or launch issues.
2. The system should notify VIP customers by email when new launches are scheduled.

### Financial Management

1. The system must generate invoices for customers for each booking.
2. The system must generate invoices for suppliers for platform usage of each lunch.
3. The system must track payment status of invoices (pending, completed, failed).
4. The system must handle supplier fees:
   - 1% of total revenue for first two launches
   - 0.8% of total revenue for subsequent launches
   - $1000 fee for aborted launches
5. The system must handle refunds to customers for aborted launches.

### User Management

1. The system must support user authentication for suppliers, customers, and employees.
2. The system must store and validate user credentials securely.
3. The system should identify and track VIP customers.

### Reporting and Analytics

1. The system should provide reports on bookings and launches for financial employees.
2. Suppliers should be able to view passenger lists and revenue for each launch.

## Non-Functional Requirements

### Performance

1. The website should be fast and responsive to ensure a seamless customer experience.
2. The system must be scalable to handle increasing levels of operations.

### Security

1. The system must securely store and handle user data.
2. The system must implement secure authentication mechanisms.
3. The system should separate operational data from user identification information.

### Reliability

1. The system must implement proper logging mechanisms to trace behavior.
2. The system should perform fast startup and shutdown processes to increase uptime.

### Usability

1. The website should be user-friendly and intuitive.
2. The website should be SEO-friendly with human-readable URLs.

### Compatibility

1. The system must be compatible with the specified technology stack (Node.js, Angular, Nest.js, Postgres, MongoDB).

### Maintainability

1. The code should be clean, well-commented, and well-documented.
2. The system must use version control (git) for code and functional changes.

### Testability

1. The system must have comprehensive test coverage (unit, integration, and end-to-end tests).

## Constraints

1. The system must be fully operational by the end of 2024.
2. The system must comply with tax regulations and handle tax identification numbers and legal addresses.
3. The system must adhere to the twelve-factor app methodology.

## Assumptions

1. The project has a flexible budget ("Money is not a problem").
2. External services will be available for sending notifications.
3. The system will have access to reliable internet connectivity for real-time operations.
4. Suppliers and customers will have devices capable of accessing web applications.
