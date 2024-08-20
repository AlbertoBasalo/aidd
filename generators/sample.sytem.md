# Project: System Architecture

> Timestamp: 2024-08-19 16:30:00 UTC

## System Components

### 🌐 Web Applications

1. `🌐 PublicWeb`: Showcase of available launches and public information
2. `🌐 AgencyWeb`: Management interface for space agencies

### 🧑‍💼 API Services

### 📇 Databases

### 👽 External Services

---

## Detailed Component Descriptions

### 0. 🌐 AuthWeb

Centralized authentication and user management interface for all user types in the AstroBookings platform. It provides secure login, registration, and profile management functionalities for visitors, travelers, agencies, and employees. This component ensures a unified and secure entry point for all users accessing various parts of the system.

Built with **Angular** for a secure and user-friendly authentication experience.

#### ⬇️ Consumes:

- `🧑‍💼 SystemAPI`: For user authentication, registration, and profile management

#### ⬆️ Provides for:

- `🌐 PublicWeb`: Register new accounts, return with token
- `🌐 TravelerWeb`: Log in, return with token

## System Architecture Diagram

```mermaid
graph TD
    subgraph WebApplications[ ]
        AuthWeb(0 - AuthWeb)
        PublicWeb(1 - PublicWeb)
        TravelerWeb(3 - TravelerWeb)
    end

    subgraph APIServices[ ]
      SystemAPI[0 - SystemAPI]
    end

    subgraph Databases[ ]
        SystemDB[(0 - SystemDB)]
    end

    subgraph External[ ]
        EmailSvc[1 - EmailSvc]
    end

    %% Web to Web connections
    PublicWeb <-.->  AuthWeb
    TravelerWeb <-.->  AuthWeb

    %% Web to API connections
    AuthWeb --> SystemAPI

    %% API to API connections

    %% API to Database connections
    AuthWeb --> SystemDB

    %% API to External Service connections

    %% Style
    style WebApplications stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    style APIServices stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    style Databases stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    style External stroke:#ccc,fill:#FFFFFF,stroke-width:1px;
    classDef web fill:#FF9999,stroke:#333,stroke-width:2px;
    classDef api fill:#C1E1C1,stroke:#333,stroke-width:2px;
    classDef db fill:#FFFFE0,stroke:#333,stroke-width:2px;
    classDef ext fill:#ADD8E6,stroke:#333,stroke-width:2px;
    linkStyle 0,1,2 stroke:#FF9999
    linkStyle 3 stroke:#C1E1C1
```
