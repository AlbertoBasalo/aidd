# AstroBookings: System Architecture

> Timestamp: 2024-08-19 16:30:00 UTC

## System Components

### 🌐 Web Applications

1. `🌐 PublicWeb`: Showcase of available launches and public information
2. `🌐 AgencyWeb`: Management interface for space agencies
3. `🌐 TravelerWeb`: Booking and management interface for travelers
4. `🌐 AdminWeb`: Administrative interface for AstroBookings employees

### 🧑‍💼 API Services

1. `🧑‍💼 AuthAPI`: Handles authentication and authorization
2. `🧑‍💼 AgencyAPI`: Manages agency profiles and launches
3. `🧑‍💼 BookingAPI`: Handles seat reservations and cancellations
4. `🧑‍💼 FinanceAPI`: Manages invoicing and payments
5. `🧑‍💼 NotifyAPI`: Handles email notifications
6. `🧑‍💼 SyncAPI`: Manages data synchronization between databases

### 📇 Databases

1. `📇 OperationsDB`: Stores structured data for bookings, launches, and financial transactions
2. `📇 SystemDB`: Stores user profiles, authentication data, system logs, notification queue, and sync operations queue
3. `📇 CacheDB`: Provides quick data access for public website and traveler portal

### 👽 External Services

1. `👽 EmailSvc`: For sending notifications
2. `👽 PaymentGW`: For processing payments

---

## Detailed Component Descriptions

### 🌐 PublicWeb

Public-facing website showcasing available space launches and company information made with **Angular**.

#### ⬇️ Consumes:

- `🧑‍💼 AuthAPI`: For user registration
- `🧑‍💼 BookingAPI`: To display available launches

#### ⬆️ Provides for:

- `👤 Visitor`: Browse launches, view company information
- `🧑 Traveler`: Register for an account

### 🌐 AgencyWeb

- 📋 Management interface for space agencies to manage their profiles, rockets, and launches
- **Angular**

⬇️ Consumes:

- `🧑‍💼 AuthAPI`: For agency authentication
- `🧑‍💼 AgencyAPI`: To manage agency profile and launches
- `🧑‍💼 BookingAPI`: To view bookings for their launches
- `🧑‍💼 FinanceAPI`: To access financial reports and invoices

⬆️ Provides for:

- `👨‍💼 Agency Staff`: Manage agency profile, rockets, launches, and view financial information

### 🌐 TravelerWeb

- 📋 Interface for travelers to book launches, manage reservations, and view trip details
- **Angular**

⬇️ Consumes:

- `🧑‍💼 AuthAPI`: For traveler authentication
- `🧑‍💼 BookingAPI`: To make and manage bookings
- `🧑‍💼 NotifyAPI`: To manage notification preferences

⬆️ Provides for:

- `🧑 Traveler`: Book launches, manage reservations, view trip details

### 🌐 AdminWeb

- 📋 Administrative interface for AstroBookings employees to manage the platform
- **Angular**

⬇️ Consumes:

- `🧑‍💼 AuthAPI`: For admin authentication
- `🧑‍💼 AgencyAPI`: To manage agencies
- `🧑‍💼 BookingAPI`: To oversee all bookings
- `🧑‍💼 FinanceAPI`: To manage financial operations
- `🧑‍💼 NotifyAPI`: To manage system notifications
- `🧑‍💼 SyncAPI`: To monitor and manage data synchronization

⬆️ Provides for:

- `👨‍💼 Admin`: Manage all aspects of the AstroBookings platform

```mermaid
graph TD
    subgraph WebApplications[ ]
        AuthWeb(0 - AuthWeb)
        PublicWeb(1 - PublicWeb)
        AgencyWeb(2 - AgencyWeb)
        TravelerWeb(3 - TravelerWeb)
        SystemWeb(4 - SystemWeb)
    end

    subgraph APIServices[ ]
        SystemAPI[0 - SystemAPI]
        AgencyAPI[1 - AgencyAPI]
        BookingAPI[2 - BookingAPI]
        FinanceAPI[3 - FinanceAPI]
        NotifyAPI[4 - NotifyAPI]
    end

    subgraph Databases[ ]
        SystemDB[(0 - SystemDB)]
        OperationsDB[(1 - OperationsDB)]
        CacheDB[(2 - CacheDB)]
    end

    subgraph External[ ]
        EmailSvc[1 - EmailSvc]
        PaymentGW[2 - PaymentGW]
    end

    %% Web to Web connections
    PublicWeb <-.->  AuthWeb
    TravelerWeb <-.-> AuthWeb
    AgencyWeb <-.-> AuthWeb
    SystemWeb <-.-> AuthWeb

    %% Web to API connections
    AuthWeb --> SystemAPI
    PublicWeb -->  BookingAPI
    TravelerWeb --> BookingAPI
    AgencyWeb --> AgencyAPI & BookingAPI & FinanceAPI
    SystemWeb --> AgencyAPI & BookingAPI & SystemAPI

    %% API to API connections
    AgencyAPI -->  SystemAPI & NotifyAPI
    BookingAPI -->  SystemAPI & NotifyAPI
    FinanceAPI -->  SystemAPI & NotifyAPI
    NotifyAPI -->  SystemAPI

    %% API to Database connections
    SystemAPI -->  OperationsDB & SystemDB & CacheDB
    AgencyAPI -->  OperationsDB
    BookingAPI -->  OperationsDB & CacheDB
    FinanceAPI -->  OperationsDB
    NotifyAPI -->  SystemDB

    %% API to External Service connections
    NotifyAPI --> EmailSvc
    FinanceAPI --> PaymentGW

    %% Style
    style WebApplications stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    style APIServices stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    style Databases stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    style External stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    classDef web fill:#FF9999,stroke:#333,stroke-width:2px;
    classDef api fill:#C1E1C1,stroke:#333,stroke-width:2px;
    classDef db fill:#FFFFE0,stroke:#333,stroke-width:2px;
    classDef ext fill:#ADD8E6,stroke:#333,stroke-width:2px;
    class AuthWeb,PublicWeb,AgencyWeb,TravelerWeb,SystemWeb web;
    class AgencyAPI,BookingAPI,FinanceAPI,NotifyAPI,SystemAPI api;
    class OperationsDB,SystemDB,CacheDB db;
    class EmailSvc,PaymentGW ext;
    linkStyle 0,1,2,3,4,5,6,7,8,9,10,11,12 stroke:#FF9999
    linkStyle 13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29 stroke:#C1E1C1
```
