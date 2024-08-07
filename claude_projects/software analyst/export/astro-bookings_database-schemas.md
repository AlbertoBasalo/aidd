# AstroBookings: Database Schemas

> Timestamp: 07/08/2024 16:30

## PostgreSQL Schema (Operational Database)

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('Customer', 'Supplier', 'Employee')),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Customers table
CREATE TABLE customers (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES users(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  contact_number VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Suppliers table
CREATE TABLE suppliers (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES users(id),
  company_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(100) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(20),
  tax_id VARCHAR(50) NOT NULL,
  legal_address TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Employees table
CREATE TABLE employees (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES users(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  position VARCHAR(50) NOT NULL,
  department VARCHAR(50) NOT NULL,
  contact_email VARCHAR(255),
  contact_phone VARCHAR(20),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Rockets table
CREATE TABLE rockets (
  id UUID PRIMARY KEY,
  supplier_id UUID NOT NULL REFERENCES suppliers(id),
  name VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  capacity INTEGER NOT NULL,
  range VARCHAR(20) NOT NULL CHECK (range IN ('LowEarthOrbit', 'ISS', 'Moon', 'Mars')),
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Spaceports table
CREATE TABLE spaceports (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(255) NOT NULL,
  coordinates VARCHAR(50),
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Launches table
CREATE TABLE launches (
  id UUID PRIMARY KEY,
  rocket_id UUID NOT NULL REFERENCES rockets(id),
  supplier_id UUID NOT NULL REFERENCES suppliers(id),
  spaceport_id UUID NOT NULL REFERENCES spaceports(id),
  destination VARCHAR(20) NOT NULL CHECK (destination IN ('LowEarthOrbit', 'ISS', 'Moon', 'Mars')),
  launch_date TIMESTAMP NOT NULL,
  price DECIMAL(12, 2) NOT NULL,
  total_seats INTEGER NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('Scheduled', 'Delayed', 'Completed', 'Aborted')),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY,
  customer_id UUID NOT NULL REFERENCES customers(id),
  launch_id UUID NOT NULL REFERENCES launches(id),
  number_of_seats INTEGER NOT NULL CHECK (number_of_seats BETWEEN 1 AND 6),
  total_price DECIMAL(12, 2) NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('Confirmed', 'Cancelled', 'Completed')),
  booking_date TIMESTAMP NOT NULL,
  cancellation_date TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Invoices table
CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  related_id UUID NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('CustomerBooking', 'SupplierLaunch', 'SupplierFee')),
  recipient_id UUID NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('Pending', 'Paid', 'Refunded', 'Failed')),
  due_date DATE NOT NULL,
  payment_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_launches_launch_date ON launches(launch_date);
CREATE INDEX idx_bookings_customer_id ON bookings(customer_id);
CREATE INDEX idx_bookings_launch_id ON bookings(launch_id);
CREATE INDEX idx_invoices_related_id ON invoices(related_id);
CREATE INDEX idx_invoices_recipient_id ON invoices(recipient_id);
```

## MongoDB Schemas

### Customer Database Schema

```javascript
// Users collection
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "passwordHash", "role", "createdAt", "updatedAt"],
      properties: {
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        },
        passwordHash: { bsonType: "string" },
        role: { enum: ["Customer", "Supplier", "Employee"] },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Customers collection
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "firstName", "lastName", "dateOfBirth", "createdAt", "updatedAt"],
      properties: {
        userId: { bsonType: "objectId" },
        firstName: { bsonType: "string" },
        lastName: { bsonType: "string" },
        dateOfBirth: { bsonType: "date" },
        contactNumber: { bsonType: "string" },
        address: { bsonType: "string" },
        isVIP: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Launches collection
db.createCollection("launches", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["rocketId", "supplierId", "destination", "launchDate", "price", "totalSeats", "availableSeats", "status", "createdAt", "updatedAt"],
      properties: {
        rocketId: { bsonType: "objectId" },
        supplierId: { bsonType: "objectId" },
        destination: { enum: ["LowEarthOrbit", "ISS", "Moon", "Mars"] },
        launchDate: { bsonType: "date" },
        price: { bsonType: "decimal" },
        totalSeats: { bsonType: "int" },
        availableSeats: { bsonType: "int" },
        status: { enum: ["Scheduled", "Delayed", "Completed", "Aborted"] },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Bookings collection
db.createCollection("bookings", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customerId", "launchId", "numberOfSeats", "totalPrice", "status", "bookingDate", "createdAt", "updatedAt"],
      properties: {
        customerId: { bsonType: "objectId" },
        launchId: { bsonType: "objectId" },
        numberOfSeats: { bsonType: "int", minimum: 1, maximum: 6 },
        totalPrice: { bsonType: "decimal" },
        status: { enum: ["Confirmed", "Cancelled", "Completed"] },
        bookingDate: { bsonType: "date" },
        cancellationDate: { bsonType: "date" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// CustomerNotifications collection
db.createCollection("customerNotifications", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customerId", "type", "content", "sentAt"],
      properties: {
        customerId: { bsonType: "objectId" },
        type: { enum: ["BookingConfirmation", "LaunchUpdate", "NewLaunchAlert"] },
        content: { bsonType: "string" },
        sentAt: { bsonType: "date" },
        isRead: { bsonType: "bool" }
      }
    }
  }
});

// Create indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.customers.createIndex({ userId: 1 }, { unique: true });
db.launches.createIndex({ launchDate: 1 });
db.bookings.createIndex({ customerId: 1 });
db.bookings.createIndex({ launchId: 1 });
db.customerNotifications.createIndex({ customerId: 1 });
```

### System Database Schema

```javascript
// SystemLogs collection
db.createCollection("systemLogs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["timestamp", "level", "component", "message"],
      properties: {
        timestamp: { bsonType: "date" },
        level: { enum: ["Info", "Warning", "Error", "Critical"] },
        component: { bsonType: "string" },
        message: { bsonType: "string" },
        stackTrace: { bsonType: "string" }
      }
    }
  }
});

// NotificationStatuses collection
db.createCollection("notificationStatuses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["notificationId", "status", "timestamp"],
      properties: {
        notificationId: { bsonType: "objectId" },
        status: { enum: ["Sent", "Delivered", "Failed"] },
        timestamp: { bsonType: "date" },
        failureReason: { bsonType: "string" }
      }
    }
  }
});

// SystemMetrics collection
db.createCollection("systemMetrics", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["timestamp", "metricName", "metricValue", "unit"],
      properties: {
        timestamp: { bsonType: "date" },
        metricName: { bsonType: "string" },
        metricValue: { bsonType: "decimal" },
        unit: { bsonType: "string" }
      }
    }
  }
});

// AuthenticationTokens collection
db.createCollection("authenticationTokens", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "token", "expiresAt", "createdAt"],
      properties: {
        userId: { bsonType: "objectId" },
        token: { bsonType: "string" },
        expiresAt: { bsonType: "date" },
        isRevoked: { bsonType: "bool" },
        createdAt: { bsonType: "date" }
      }
    }
  }
});

// SyncLogs collection
db.createCollection("syncLogs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["timestamp", "operation", "status", "affectedRecords"],
      properties: {
        timestamp: { bsonType: "date" },
        operation: { enum: ["CustomerSync", "BookingSync", "LaunchSync"] },
        status: { enum: ["Success", "Partial", "Failed"] },
        affectedRecords: { bsonType: "int" },
        errorDetails: { bsonType: "string" }
      }
    }
  }
});

// NotificationQueue collection
db.createCollection("notificationQueue", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["notificationId", "priority", "scheduledTime", "status"],
      properties: {
        notificationId: { bsonType: "objectId" },
        priority: { bsonType: "int", minimum: 1, maximum: 5 },
        scheduledTime: { bsonType: "date" },
        status: { enum: ["Pending", "Processing", "Sent", "Failed"] },
        retryCount: { bsonType: "int" },
        lastAttempt: { bsonType: "date" }
      }
    }
  }
});

// Create indexes
db.systemLogs.createIndex({ timestamp: 1 });
db.systemLogs.createIndex({ level: 1 });
db.notificationStatuses.createIndex({ notificationId: 1 });
db.systemMetrics.createIndex({ timestamp: 1 });
db.systemMetrics.createIndex({ metricName: 1 });
db.authenticationTokens.createIndex({ userId: 1 });
db.authenticationTokens.createIndex({ token: 1 });
db.syncLogs.createIndex({ timestamp: 1 });
db.notificationQueue.createIndex({ scheduledTime: 1 });
db.notificationQueue.createIndex({ status: 1 });
```

