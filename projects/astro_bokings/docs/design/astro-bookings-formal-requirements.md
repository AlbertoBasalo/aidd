# Astro Bookings: Formal Requirements

Timestamp: 2024-08-08 10:00:00 UTC

## Functional Requirements

### Must-Have

1. User Management
   - The system must allow registration and authentication for suppliers, customers, and employees.
   - Users must be at least 18 years old and younger than 70 to register.
   - Implement a VIP status for customers who have booked two or more trips.

2. Supplier Management
   - Suppliers must be able to showcase their rockets and scheduled launches.
   - Suppliers must be able to create launch offers with price per seat, destination, date, and spaceport.
   - Suppliers must be able to view bookings, passenger lists, and collected money for each launch.

3. Customer Management
   - Customers must be able to view available launches and book seats for passengers.
   - Customers must be able to cancel bookings and receive refunds according to cancellation policies.
   - Customers must provide passenger contact information for each booking.

4. Launch Management
   - The system must support scheduling launches with details such as rocket, capacity, destination, date, and price.
   - The system must handle launch delays, abortions, and cancellations.
   - Implement a rule to abort launches 3 months before if 80% of seats are not filled.

5. Booking Management
   - Implement a first-come, first-served booking system.
   - Allow customers to book up to 4 seats per launch (6 for VIP customers).
   - Handle booking cancellations and refunds based on the time before launch.

6. Financial Management
   - Generate and store invoices for bookings and launches.
   - Track payment status of invoices (pending, completed, failed).
   - Calculate and apply fees for suppliers (1% of launch income, reduced to 0.8% after 2 successful launches).
   - Handle refunds for cancelled bookings and aborted launches.

7. Notification System
   - Send email notifications for bookings, cancellations, and launch updates.
   - Notify VIP customers about new launch schedules.

8. Reporting
   - Generate sales reports for managers.
   - Provide financial reports for invoices, payments, and refunds.

### Should-Have

1. SEO Optimization
   - Implement SEO-friendly URLs for launch booking pages.
   - Optimize the landing page for search engines.

2. Admin Dashboard
   - Create a dashboard for employees to monitor bookings, launches, and financial status.

3. Supplier Portal
   - Develop a dedicated portal for suppliers to manage their rockets and launches.

### Could-Have

1. Advanced Analytics
   - Implement data analytics tools for business intelligence.

2. Mobile Application
   - Develop a mobile app for customers to book and manage their trips.

### Won't-Have

1. On-site Check-in System
   - The system will not handle on-site check-ins for launches.

2. Physical Ticket Generation
   - The system will not generate physical tickets for space travels.

## Non-Functional Requirements

### Must-Have

1. Performance
   - The system must be fast and responsive, especially for customer-facing applications.

2. Scalability
   - The system must be able to handle increasing numbers of users, bookings, and launches.
   - Implement separate scalable processes for customer, supplier, and employee operations.

3. Security
   - Implement user authentication and authorization.
   - Separate user identification information from operational data.

4. Reliability
   - Implement proper logging for system behavior tracing.
   - Ensure fast startup and shutdown processes for high uptime.

5. Data Management
   - Use Postgres for relational data (operational data).
   - Use MongoDB for non-relational data (customer data, system logs, user credentials).

### Should-Have

1. Testability
   - Implement unit tests with Jest for business logic.
   - Implement integration tests with Cypress for API services.
   - Implement end-to-end tests with Cypress for web applications.

2. Maintainability
   - Write clean, well-documented code.
   - Use a managed git repository for version control.

### Could-Have

1. Internationalization
   - Support multiple languages for a global customer base.

## Assumptions and Constraints

1. Technology Stack
   - Node.js for server-side development
   - Angular for web applications
   - Nest.js for API services
   - Postgres and MongoDB for databases

2. Timeline
   - Full operating service required by the end of 2024

3. External Services
   - Use of an external service for sending notifications

4. Methodology
   - Adherence to the twelve-factor app methodology

This document outlines the formal requirements for the Astro Bookings platform. It should be used as a guide for system design and development, and may be updated as the project progresses.
