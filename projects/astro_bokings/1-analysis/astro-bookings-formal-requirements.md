# Astro Bookings: Formal Requirements

Generated on: Thursday, August 08, 2024

## 1. Functional Requirements

### Must-Have

1. User Registration and Authentication
   - The system must allow users (customers, suppliers, employees) to register for an account.
   - Users must be able to authenticate using email and password.
   - The system must support different user roles: Visitor, Customer, Supplier, Employee.

2. Rocket and Launch Management (Suppliers)
   - Suppliers must be able to showcase their rockets and their specifications.
   - Suppliers must be able to schedule new rocket launches with specific details (date, spaceport, destination, capacity, price per seat).
   - Suppliers must be able to view the status of bookings and cancellations for their launches.
   - Suppliers must be able to delay or abort launches due to various reasons.

3. Booking Management (Customers)
   - Customers must be able to view available launches and book seats.
   - Customers must be able to book up to 4 seats per launch (6 for VIP customers).
   - Customers must be able to cancel their bookings and receive refunds according to the platform's conditions.
   - The system must enforce age restrictions (18-70 years old) for bookings.

4. VIP Customer Management
   - The system must identify VIP customers (those who have booked two or more trips).
   - VIP customers must be notified by email when new launches are scheduled.

5. Financial Operations
   - The system must generate invoices for customer bookings.
   - The system must generate invoices for supplier platform usage fees.
   - The system must handle refunds for cancelled bookings or aborted launches.
   - The system must track payment status of invoices (pending, completed, failed).

6. Notification System
   - The system must send email notifications for booking confirmations, cancellations, and launch updates.
   - The system must send invoices via email.

7. Reporting and Analytics
   - Employees must be able to view the status of bookings and launches.
   - Suppliers must be able to view passenger lists and collected amounts for each launch.

### Nice-to-Have

1. SEO-friendly landing page showcasing upcoming launches.
2. Human-readable and SEO-friendly URLs for launch booking pages.

## 2. Non-Functional Requirements

### Must-Have

1. Performance
   - The system must be fast and responsive, particularly for customer-facing components.

2. Scalability
   - The system must be able to run on different concurrent processes to handle increasing levels of operations.
   - Customer operations should be separated from supplier/employee operations for independent scaling.

3. Security
   - The system must securely store and manage user authentication data.
   - The system must implement proper access controls based on user roles.

4. Reliability
   - The system must generate proper logs to trace its behavior.
   - The system must perform fast startup and shutdown processes to maximize uptime.

5. Data Management
   - The system must use a relational database (Postgres) for operational data.
   - The system must use a non-relational database (MongoDB) for customer-facing data and system logs.

6. Technology Stack
   - Backend: Node.js with Nest.js for API services
   - Frontend: Latest Angular versions for web applications
   - Databases: Postgres and MongoDB

7. Testing
   - The system must have unit tests (Jest) for business logic.
   - The system must have integration tests (Cypress) for API services.
   - The system must have end-to-end tests (Cypress) for web applications.

8. Deployment
   - The system must support automatic deployment of code that passes all tests.

### Nice-to-Have

1. Adherence to the twelve-factor app methodology.

## 3. Constraints

1. The full operating service must be ready by the end of 2024.
2. The system must use the specified technology stack (Node.js, Angular, Postgres, MongoDB).

## 4. Assumptions

1. Suppliers will provide accurate information about their rockets and launches.
2. Customers will provide accurate personal information for bookings.
3. External services (e.g., email notification service) will be available and reliable.

