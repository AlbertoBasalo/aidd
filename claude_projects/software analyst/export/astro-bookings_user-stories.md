# AstroBookings: User Stories

> Timestamp: 07/08/2024 12:45

## 🧑‍💻 Customer Web Application

> A web application for customers to view launches, book seats, and manage their reservations.

### Roles

- `Anonymous Visitor`: A user who is browsing the site without being logged in.
- `Customer`: A registered user who wants to book space travel experiences.
- `VIP Customer`: A customer who has already booked two trips with AstroBookings.

### User Stories

1. As an `Anonymous Visitor`, I want to **view available rocket launches**, so that _I can explore potential space travel options_.
2. As an `Anonymous Visitor`, I want to **see general information about the space travel services**, so that _I can understand what AstroBookings offers_.
3. As an `Anonymous Visitor`, I want to **register for an account**, so that _I can book space travel experiences_.
4. As an `Anonymous Visitor`, I want to **view testimonials from past travelers**, so that _I can gain confidence in the service_.
5. As a `Customer`, I want to **log in to my account**, so that _I can access personalized features_.
6. As a `Customer`, I want to **view available rocket launches with detailed information**, so that _I can plan my space travel_.
7. As a `Customer`, I want to **book seats on a rocket launch**, so that _I can secure my space travel experience_.
8. As a `Customer`, I want to **cancel my booking**, so that _I can change my travel plans if necessary_.
9. As a `Customer`, I want to **view my booking history**, so that _I can keep track of my past and upcoming trips_.
10. As a `Customer`, I want to **receive notifications about my bookings**, so that _I stay informed about any changes or updates_.
11. As a `VIP Customer`, I want to **book up to six seats on a launch**, so that _I can bring more companions on my trip_.
12. As a `VIP Customer`, I want to **receive early notifications about new launches**, so that _I can book my preferred seats before others_.

## 🧑‍💻 Supplier Web Application

> A web application for suppliers to manage their rockets, launches, and view bookings.

### Roles

- `Supplier`: A company that provides rocket launches for space travel.

### User Stories

1. As a `Supplier`, I want to **add new rockets to the system**, so that _I can offer them for space travel_.
2. As a `Supplier`, I want to **schedule new rocket launches**, so that _customers can book seats on these launches_.
3. As a `Supplier`, I want to **view bookings for my launches**, so that _I can prepare for each trip_.
4. As a `Supplier`, I want to **update the status of a launch**, so that _customers are informed about any changes or delays_.
5. As a `Supplier`, I want to **view financial reports for my launches**, so that _I can track my revenue through the platform_.
6. As a `Supplier`, I want to **receive notifications about new bookings and cancellations**, so that _I can manage my launch capacity effectively_.

## 🧑‍💻 Employee Web Application

> A web application for employees to manage bookings, launches, and financial operations.

### Roles

- `Customer Service Representative`: An employee who handles customer inquiries and manages bookings.
- `Financial Operator`: An employee who manages invoices, payments, and refunds.
- `Operations Manager`: An employee who oversees the overall booking and launch operations.

### User Stories

1. As a `Customer Service Representative`, I want to **view customer bookings**, so that _I can assist customers with their inquiries_.
2. As a `Customer Service Representative`, I want to **modify or cancel bookings on behalf of customers**, so that _I can help resolve customer issues_.
3. As a `Financial Operator`, I want to **view all invoices**, so that _I can track payments and refunds_.
4. As a `Financial Operator`, I want to **update the payment status of invoices**, so that _I can maintain accurate financial records_.
5. As a `Financial Operator`, I want to **process refunds for cancelled bookings**, so that _customers receive appropriate compensation_.
6. As an `Operations Manager`, I want to **view reports on bookings and launches**, so that _I can monitor the overall performance of our business_.
7. As an `Operations Manager`, I want to **manage supplier accounts**, so that _I can ensure we're working with reliable partners_.

## 🧑‍💻 IT Operations Web Application

> A web application for IT operators to monitor system logs and notification statuses.

### Roles

- `IT Operator`: An employee responsible for maintaining and monitoring the technical infrastructure.

### User Stories

1. As an `IT Operator`, I want to **view system logs**, so that _I can identify and troubleshoot any issues_.
2. As an `IT Operator`, I want to **monitor the status of email notifications**, so that _I can ensure customers and suppliers are receiving important communications_.
3. As an `IT Operator`, I want to **view system performance metrics**, so that _I can optimize the platform's efficiency_.
4. As an `IT Operator`, I want to **receive alerts for system anomalies**, so that _I can proactively address potential problems_.

## 🧑‍💼 Customer API Service

> API service handling customer-related operations and data access.

### Roles

- `Customer Web Application`: The front-end application that consumes this API.
- `Anonymous User`: A user who is not authenticated.
- `Authenticated User`: A user who has logged in to the system.

### User Stories

1. As the `Customer Web Application`, I want to **retrieve a list of available launches**, so that _I can display them to users_.
2. As the `Customer Web Application`, I want to **submit a booking request**, so that _customers can reserve seats on a launch_.
3. As the `Customer Web Application`, I want to **retrieve a user's booking history**, so that _I can display it to the authenticated user_.
4. As an `Anonymous User`, I want to **register a new account**, so that _I can become a customer and book launches_.
5. As an `Authenticated User`, I want to **update my profile information**, so that _my details are up to date_.
6. As an `Authenticated User`, I want to **cancel my booking**, so that _I can change my travel plans if necessary_.

## 🧑‍💼 Admin API Service

> API service handling supplier and employee operations, and core business logic.

### Roles

- `Supplier Web Application`: The front-end application for suppliers.
- `Employee Web Application`: The front-end application for employees.

### User Stories

1. As the `Supplier Web Application`, I want to **submit new rocket information**, so that _suppliers can offer new space travel options_.
2. As the `Supplier Web Application`, I want to **create new launch schedules**, so that _customers can book seats on these launches_.
3. As the `Employee Web Application`, I want to **retrieve booking information**, so that _customer service representatives can assist customers_.
4. As the `Employee Web Application`, I want to **update booking statuses**, so that _financial operators can process payments and refunds_.
5. As the `Employee Web Application`, I want to **generate financial reports**, so that _operations managers can monitor business performance_.

## 🧑‍💼 System Monitoring API Service

> API service for accessing system logs and monitoring data.

### Roles

- `IT Operations Web Application`: The front-end application for IT operators.

### User Stories

1. As the `IT Operations Web Application`, I want to **retrieve system logs**, so that _IT operators can troubleshoot issues_.
2. As the `IT Operations Web Application`, I want to **fetch notification statuses**, so that _IT operators can ensure proper communication with users_.
3. As the `IT Operations Web Application`, I want to **get system performance metrics**, so that _IT operators can monitor and optimize the platform_.

## 🧑‍💼 Authentication Service

> Centralized authentication service for all user types.

### Roles

- `All Web Applications`: Customer, Supplier, Employee, and IT Operations web applications.
- `All API Services`: Customer, Admin, and System Monitoring API services.

### User Stories

1. As `All Web Applications`, I want to **authenticate user credentials**, so that _I can provide secure access to authorized users_.
2. As `All Web Applications`, I want to **refresh authentication tokens**, so that _users can maintain their session securely_.
3. As `All API Services`, I want to **validate authentication tokens**, so that _I can ensure requests are coming from authenticated sources_.
4. As `All Web Applications`, I want to **log out users**, so that _users can securely end their sessions_.

## 🧑‍🏭 Data Synchronization Job

> Background job for synchronizing data between PostgreSQL and MongoDB databases.

### Roles

- `System`: The automated process that runs the synchronization job.

### User Stories

1. As the `System`, I want to **periodically sync customer data from PostgreSQL to MongoDB**, so that _the Customer API can quickly access up-to-date information_.
2. As the `System`, I want to **sync booking updates from MongoDB to PostgreSQL**, so that _the operational database reflects the latest customer actions_.
3. As the `System`, I want to **log synchronization activities**, so that _IT operators can monitor the process and troubleshoot if necessary_.

## 🧑‍🏭 Notification Job

> Background job for sending email notifications to customers and suppliers.

### Roles

- `System`: The automated process that runs the notification job.

### User Stories

1. As the `System`, I want to **send booking confirmation emails to customers**, so that _customers receive immediate confirmation of their reservations_.
2. As the `System`, I want to **send launch update notifications to affected customers**, so that _customers are informed of any changes to their booked launches_.
3. As the `System`, I want to **send new launch notifications to VIP customers**, so that _VIP customers can take advantage of early booking opportunities_.
4. As the `System`, I want to **notify suppliers of new bookings and cancellations**, so that _suppliers can manage their launch capacities effectively_.
5. As the `System`, I want to **log all sent notifications**, so that _IT operators can verify the delivery of important communications_.
