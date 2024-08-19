# Space Travel Platform: Domains Overview

> Timestamp: [Insert Current Timestamp]

## 1. Authentication and Authorization

Brief description of the authentication and authorization domain

### 1.1 User Management

- Requirement 1: Users should be able to register and create accounts.
- Requirement 2: Users should be able to log in and log out.
- Requirement 3: Users should be able to reset their passwords.
- Requirement 4: Users should have different roles (Customer, Supplier, Employee).
- Requirement 5: Visitors and bots should have anonymous access to view launches with available seats.
- Requirement 6: Suppliers, customers, and employees must be authenticated to access the system.
- Requirement 7: User identification information should be separated from operational data.

### 1.2 Role-Based Access Control

- Requirement 1: Different roles should have different access levels.
- Requirement 2: Administrators should be able to manage user roles and permissions.

## 2. Booking Management

Brief description of the booking management domain

### 2.1 Customer Bookings

- Requirement 1: Customers should be able to book seats on rockets.
- Requirement 2: Customers should be able to view their booking history.
- Requirement 3: Customers should be able to cancel their bookings.
- Requirement 4: Customers must fill in the contact information of the passengers who will be traveling.
- Requirement 5: Only travelers between 18 and 70 years old are accepted.
- Requirement 6: Customers can book up to four seats in any launch.
- Requirement 7: VIP customers can book up to six seats in any launch.

### 2.2 Supplier Launches

- Requirement 1: Suppliers should be able to schedule new rocket launches.
- Requirement 2: Suppliers should be able to manage customer bookings for their launches.
- Requirement 3: Suppliers should be able to view their launch history.
- Requirement 4: Suppliers should be able to showcase their rockets and scheduled launches on a website.
- Requirement 5: Each rocket has a limited capacity of passengers and a destination range (Suborbital, Low Earth Orbit, Interplanetary).
- Requirement 6: Launches may be delayed or aborted due to weather conditions, technical issues, or financial reasons if 30% of the seats are not filled three months before the launch.

## 3. Notifications

Brief description of the notifications domain

### 3.1 Reservation Notifications

- Requirement 1: Customers should be notified of booking confirmations.
- Requirement 2: Customers should be notified of booking cancellations.
- Requirement 3: Suppliers should be notified of new bookings.
- Requirement 4: Suppliers should be notified of booking cancellations.

### 3.2 Launch Notifications

- Requirement 1: Customers should be notified of launch updates.
- Requirement 2: Suppliers should be notified of launch issues.
- Requirement 3: Suppliers should be emailed about booking and cancellation statuses when they occur.
- Requirement 4: VIP customers should be notified by email when a new launch is scheduled.

## 4. Financial Management

Brief description of the financial management domain

### 4.1 Payment Processing

- Requirement 1: Customers should be able to pay for their bookings.
- Requirement 2: Suppliers should be able to view their earnings.
- Requirement 3: The platform should charge suppliers for utilizing the platform.

### 4.2 Refunds

- Requirement 1: Customers should be able to request refunds for cancelled bookings.
- Requirement 2: Suppliers should be able to process refunds.
- Requirement 3: Customers will be refunded 90% of the total cost if the cancellation is made one year before the launch.
- Requirement 4: Customers will be refunded 70% of the total cost if the cancellation is made three months before the launch.
- Requirement 5: Customers will not be refunded if the cancellation is made after three months before the launch.

### 4.3 Invoicing

- Requirement 1: Suppliers will issue invoices for each successful launch, showing the amount of money collected for each seat.
- Requirement 2: The platform will issue invoices to suppliers for using the platform after any successful or aborted launch.
- Requirement 3: Financial employees should be able to see the status of bookings and launches to issue invoices to customers and suppliers.
- Requirement 4: Financial employees should be able to control the payment status of the invoices and refunds, both emitted and received.
- Requirement 5: Customers and suppliers must have a tax identification number and a legal address to comply with tax regulations.
- Requirement 6: The platform will charge suppliers a fee of 1% of the total revenue for each successful launch.
- Requirement 7: The platform will charge suppliers a fee of 0.8% of the total revenue after two successful launches.
- Requirement 8: The platform will charge suppliers a fee of 1000 USD for aborted launches.
- Requirement 9: Customers will be issued an invoice for each booking with the total cost of the seats reserved.
- Requirement 10: Invoices must have a number, a legal date, and an amount.
- Requirement 11: Invoices must have a payment record with a status (pending, completed, failed).
- Requirement 12: Invoices must be related to a booking (when issued to a booking customer) or a launch (when issued to a launch supplier).
- Requirement 13: Invoices must have a recipient (booking customer or launch supplier) and an emitter (Astro Bookings Corp. or launch supplier).
- Requirement 14: Invoices issued by the platform must be sent as notifications by email to the recipient.

## 5. Monitoring and Reporting

Brief description of the monitoring and reporting domain

### 5.1 System Monitoring

- Requirement 1: The platform should monitor system performance.
- Requirement 2: Administrators should be able to view system logs.

### 5.2 Reporting

- Requirement 1: Administrators should be able to generate sales reports.
- Requirement 2: Suppliers should be able to generate booking reports.

## 6. Marketing

Brief description of the marketing domain

### 6.1 Landing Page

- Requirement 1: A landing page should showcase the next rocket launches with seats available.
- Requirement 2: Customers should be able to book reservations in a first-come, first-served way.
- Requirement 3: The landing page should be SEO-friendly and user-friendly.

### 6.2 VIP Customer Management

- Requirement 1: The system should identify VIP customers who have booked two trips.
- Requirement 2: VIP customers should be able to book up to six seats in any launch.

### 6.3 Email Notifications

- Requirement 1: VIP customers should be notified by email when a new launch is scheduled.
- Requirement 2: The email should include a link to the launch booking web page.
- Requirement 3: The link should be human-readable and SEO-friendly, including the rocket, spaceport, destination, and the date of the launch.

## 7. Development

Brief description of the development domain

### 7.1 Technology Stack

- Requirement 1: The technology stack should be based on Node servers and Postgres and Mongo databases.
- Requirement 2: Web applications should use the latest Angular versions.
- Requirement 3: API services should use Nest.js.
- Requirement 4: The system should have a model of the domain representing the entities and their relationships.
- Requirement 5: The system should have a system diagram (in ASCII art) showing the different deployable components and how they communicate.
- Requirement 6: The code should be clean with comments and documentation that any developer can understand.

### 7.2 Testing

- Requirement 1: The code must be supported by tests.
- Requirement 2: Unit tests should be written with Jest for the business logic at the front and back end.
- Requirement 3: Integration tests should be written with Cypress for the API services.
- Requirement 4: End-to-end tests should be written with Cypress for the web applications.

## 8. Deployment

Brief description of the deployment domain

### 8.1 Continuous Integration/Continuous Deployment (CI/CD)

- Requirement 1: The code that passes the tests should be ready for automatic transition to production.

### 8.2 Scalability

- Requirement 1: The system should allow different concurrent processes to run on it to scale as much as the level of operations requires.
- Requirement 2: Customer operations should be separated from supplier or employee operations to allow the system to scale independently.
- Requirement 3: The customer web application should have a simple API for accessing a MongoDB database to read the information and write the changes.
- Requirement 4: An admin API should be used to manage the relational data in the Postgres database used by suppliers and financial employee portals.
- Requirement 5: A dedicated API with a MongoDB database should be used to store core system info like user credentials, synchronization jobs, and log entries with a simple web app for IT operators to check them.
- Requirement 6: A job scheduler should call the main API and use the above data to send emails to vendors and customers and reconcile the relational and NoSQL databases with the changes they receive.

## 9. Security

Brief description of the security domain

### 9.1 User Authentication

- Requirement 1: A user authentication system based on email and password should be used by suppliers, customers, and employees apps and services.
- Requirement 2: The Auth app should be responsible for registering and validating the users' credentials.
- Requirement 3: The auth service should be responsible for the validation and persistence of the user credentials.
- Requirement 4: For new users, the auth service should also be responsible for storing a copy of the user basic information on operational and informational databases.

## 10. Reliability

Brief description of the reliability domain

### 10.1 System Logs

- Requirement 1: The system should generate proper logs to trace its behavior.
- Requirement 2: The system should perform a fast startup and shutdown process to increase uptime percentage.

## External Sources

- [Insert any external sources or references used]
