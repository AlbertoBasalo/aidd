
### Astro Bookings: System Architecture and Domain Requirements

> Generated on: Monday, August 12, 2024, 11:30 AM UTC

This document relates the system architecture components to the domain requirements of Astro Bookings.

---

## Domain Requirements to System Components

### 1. User Management

Handles user authentication, authorization, and profile management.

#### 1.1 Authentication
- Auth Web Application
- Auth API Service

#### 1.2 Authorization
- Auth Web Application
- Auth API Service

#### 1.3 User Profiles
- Auth Web Application
- Auth API Service
- Core Documental Database

### 2. Supplier Management

Manages supplier information, rockets, and launch schedules.

#### 2.1 Supplier Profiles
- Supplier Web Application
- Admin API Service
- Operations Relational Database

#### 2.2 Rocket Management
- Supplier Web Application
- Admin API Service
- Operations Relational Database

#### 2.3 Launch Scheduling
- Supplier Web Application
- Admin API Service
- Operations Relational Database

### 3. Booking Management

Handles the creation, modification, and cancellation of bookings.

#### 3.1 Booking Creation
- Customer Web Application
- Customer API Service
- Customer Documental Database

#### 3.2 Booking Modification
- Customer Web Application
- Customer API Service
- Customer Documental Database

#### 3.3 Booking Cancellation
- Customer Web Application
- Customer API Service
- Customer Documental Database

### 4. Launch Management

Handles the execution and reporting of launches.

#### 4.1 Launch Execution
- Core API Service
- Operations Relational Database

#### 4.2 Launch Reporting
- Core API Service
- Operations Relational Database

### 5. Financial Management

Manages invoicing, payments, fee calculation, and financial reporting.

#### 5.1 Invoicing
- Financial Web Application
- Admin API Service
- Operations Relational Database

#### 5.2 Payments
- Financial Web Application
- Admin API Service
- Operations Relational Database

#### 5.3 Fee Calculation
- Financial Web Application
- Admin API Service
- Operations Relational Database

#### 5.4 Financial Reporting
- Financial Web Application
- Admin API Service
- Operations Relational Database

### 6. Notification System

Manages communication with users about important events and updates.

#### 6.1 Email Notifications
- Notification Service
- Core API Service
- Job Scheduler

#### 6.2 Notification Tracking
- Core API Service
- Operations Web Application
- Core Documental Database

### 7. Reconciliation Jobs

Handles data synchronization and consistency across the system.

#### 7.1 Data Synchronization
- Job Scheduler
- Core API Service
- Core Documental Database
- Operations Relational Database
- Customer Documental Database

### 8. System Logs

Manages system-wide logging and monitoring.

#### 8.1 Logging
- Core API Service
- Operations Web Application
- Core Documental Database

---

## System Components to Domain Requirements

### Web Applications

#### Auth Web Application
- 1.1 Authentication
- 1.2 Authorization
- 1.3 User Profiles

#### Customer Web Application
- 3.1 Booking Creation
- 3.2 Booking Modification
- 3.3 Booking Cancellation

#### Supplier Web Application
- 2.1 Supplier Profiles
- 2.2 Rocket Management
- 2.3 Launch Scheduling

#### Financial Web Application
- 5.1 Invoicing
- 5.2 Payments
- 5.3 Fee Calculation
- 5.4 Financial Reporting

#### Operations Web Application
- 6.2 Notification Tracking
- 8.1 Logging

### API Services

#### Auth API Service
- 1.1 Authentication
- 1.2 Authorization
- 1.3 User Profiles

#### Customer API Service
- 3.1 Booking Creation
- 3.2 Booking Modification
- 3.3 Booking Cancellation

#### Admin API Service
- 2.1 Supplier Profiles
- 2.2 Rocket Management
- 2.3 Launch Scheduling
- 5.1 Invoicing
- 5.2 Payments
- 5.3 Fee Calculation
- 5.4 Financial Reporting

#### Core API Service
- 4.1 Launch Execution
- 4.2 Launch Reporting
- 6.1 Email Notifications
- 6.2 Notification Tracking
- 7.1 Data Synchronization
- 8.1 Logging

### Databases

#### Operations Relational Database
- 2.1 Supplier Profiles
- 2.2 Rocket Management
- 2.3 Launch Scheduling
- 4.1 Launch Execution
- 4.2 Launch Reporting
- 5.1 Invoicing
- 5.2 Payments
- 5.3 Fee Calculation
- 5.4 Financial Reporting

#### Customer Documental Database
- 1.3 User Profiles
- 3.1 Booking Creation
- 3.2 Booking Modification
- 3.3 Booking Cancellation
- 7.1 Data Synchronization

#### Core Documental Database
- 1.3 User Profiles
- 6.2 Notification Tracking
- 7.1 Data Synchronization
- 8.1 Logging

### External Services

#### Notification Service
- 6.1 Email Notifications

### Jobs

#### Job Scheduler
- 6.1 Email Notifications
- 7.1 Data Synchronization

---

This document connects each domain requirement with the corresponding system architecture component to ensure a clear understanding of how the requirements are fulfilled within the system.
