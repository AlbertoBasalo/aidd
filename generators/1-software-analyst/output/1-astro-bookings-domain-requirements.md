# Astro Bookings: Domain Requirements

> Generated on: Wednesday, August 14, 2024, 10:45 AM UTC

## 1. User Management

Handles user authentication, authorization, and profile management.

### 1.1 Authentication

- Implement a user authentication system based on email and password.
- Support different user roles: customers, suppliers, and employees.
- Provide secure login functionality for all user types.
- Store user credentials separately from operational data.

### 1.2 Authorization

- Implement role-based access control for different parts of the system.
- Ensure that only authenticated users can access non-public parts of the system.
- Allow anonymous access to public areas of the customer web app.

### 1.3 User Profiles

- Store basic user information for customers, suppliers, and employees.
- Implement VIP status for customers who have booked two or more trips.
- Maintain tax identification numbers and legal addresses for customers and suppliers.

## 2. Supplier Management

Manages supplier information, rockets, and launch schedules.

### 2.1 Supplier Profiles

- Store and manage supplier information including company details and contact information.
- Track the number of launches for each supplier to apply appropriate fee rates.

### 2.2 Rocket Management

- Allow suppliers to add and manage their rockets.
- Store rocket information including passenger capacity and destination range.
- Categorize rockets by destination range: Suborbital, Low Earth Orbit, or Interplanetary.

### 2.3 Launch Scheduling

- Enable suppliers to schedule new rocket launches.
- Store launch information including date, spaceport, destination, and price per seat.
- Ensure launches are scheduled at least one year in advance.

## 3. Booking Management

Handles the creation, modification, and cancellation of bookings.

### 3.1 Booking Creation

- Allow customers to book seats on scheduled launches.
- Limit regular customers to booking up to 4 seats per launch.
- Allow VIP customers to book up to 6 seats per launch.
- Collect and store passenger information for each booking.
- Validate that all passengers are between 18 and 70 years old.

### 3.2 Booking Modification

- Allow customers to view and modify their existing bookings.
- Implement a first-come, first-served system for seat allocation.

### 3.3 Booking Cancellation

- Allow customers to cancel their bookings.
- Implement a refund system based on the time remaining until the launch date.
- Process 90% refund for cancellations made one year before the launch.
- Process 70% refund for cancellations made three months before the launch.
- No refund for cancellations made less than three months before the launch.

## 4. Launch Management

Handles the execution and status updates of scheduled launches.

### 4.1 Launch Execution

- Track the status of each launch (scheduled, delayed, aborted, completed).
- Allow for launch delays or abortions due to weather, technical issues, or insufficient bookings.
- Automatically abort launches if less than 30% of seats are filled three months before the launch date.

### 4.2 Launch Reporting

- Provide suppliers with a list of passengers for each launch.
- Generate reports on the amount of money collected for each launch.

## 5. Financial Management

Handles invoicing, payments, and financial reporting.

### 5.1 Invoicing

- Generate invoices for customer bookings.
- Generate invoices for supplier platform usage fees.
- Process invoices from suppliers for successful launches.
- Ensure all invoices have a number, legal date, and amount.

### 5.2 Payments

- Process advance payments from customers for seat reservations.
- Track payment status (pending, completed, failed) for all invoices.
- Record payment dates for completed transactions.
- Process refunds for cancelled bookings or aborted launches.

### 5.3 Fee Calculation

- Charge suppliers 1% of total launch revenue for the first two launches.
- Reduce supplier fee to 0.8% of total launch revenue after two launches.
- Charge suppliers a flat fee of 1000 USD for aborted launches.

### 5.4 Financial Reporting

- Provide financial employees with access to booking and launch status information.
- Generate reports on invoice and payment statuses.

## 6. Notification System

Manages communication with users about important events and updates.

### 6.1 Email Notifications

- Send email notifications to VIP customers about newly scheduled launches.
- Notify customers and suppliers about booking and cancellation statuses.
- Send notifications about launch delays or abortions.
- Email invoices to customers and suppliers.

### 6.2 Notification Tracking

- Log all sent notifications and their status.
- Provide a system for IT operators to check notification statuses.

## 7. Reconciliation Jobs

Handles data synchronization and consistency across the system.

### 7.1 Data Synchronization

- Implement a job scheduler to synchronize data between relational and NoSQL databases.
- Ensure data consistency across all system components.

## 8. System Logs

Manages system-wide logging and monitoring.

### 8.1 Logging

- Generate and store system logs for tracing behavior and troubleshooting.
- Provide a web application for IT operators to view and analyze system logs.

---

## Summary of Domains and Contexts

1. User Management

   - Authentication
   - Authorization
   - User Profiles

2. Supplier Management

   - Supplier Profiles
   - Rocket Management
   - Launch Scheduling

3. Booking Management

   - Booking Creation
   - Booking Modification
   - Booking Cancellation

4. Launch Management

   - Launch Execution
   - Launch Reporting

5. Financial Management

   - Invoicing
   - Payments
   - Fee Calculation
   - Financial Reporting

6. Notification System

   - Email Notifications
   - Notification Tracking

7. Reconciliation Jobs

   - Data Synchronization

8. System Logs
   - Logging
