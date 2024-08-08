// Astro Bookings: MongoDB Schema (User Data, Notifications, System Logs, Job Scheduler)
// Generated on: 08/08/2024 21:00 UTC

// User Data
db.createCollection("users", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["email", "password", "firstName", "lastName", "role"],
         properties: {
            email: {
               bsonType: "string",
               pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
            },
            password: { bsonType: "string" },
            firstName: { bsonType: "string" },
            lastName: { bsonType: "string" },
            phoneNumber: { bsonType: "string" },
            role: {
               enum: ["Customer", "Supplier", "Employee"]
            },
            customerDetails: {
               bsonType: "object",
               properties: {
                  legalNumber: { bsonType: "string" },
                  legalAddress: { bsonType: "string" },
                  isVIP: { bsonType: "bool" }
               }
            },
            supplierDetails: {
               bsonType: "object",
               properties: {
                  companyName: { bsonType: "string" },
                  legalNumber: { bsonType: "string" },
                  legalAddress: { bsonType: "string" }
               }
            },
            employeeDetails: {
               bsonType: "object",
               properties: {
                  department: { bsonType: "string" }
               }
            }
         }
      }
   }
});

// Notifications
db.createCollection("notifications", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["userId", "message", "timestamp", "type"],
         properties: {
            userId: { bsonType: "string" },
            launchId: { bsonType: "string" },
            bookingId: { bsonType: "string" },
            invoiceId: { bsonType: "string" },
            message: { bsonType: "string" },
            timestamp: { bsonType: "date" },
            type: {
               enum: ["LaunchUpdate", "BookingConfirmation", "PaymentReminder", "SystemAlert"]
            },
            isRead: { bsonType: "bool" }
         }
      }
   }
});

// System Logs
db.createCollection("systemLogs", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["timestamp", "logLevel", "message", "source"],
         properties: {
            timestamp: { bsonType: "date" },
            logLevel: {
               enum: ["Info", "Warning", "Error", "Critical"]
            },
            message: { bsonType: "string" },
            source: { bsonType: "string" }
         }
      }
   }
});

// Job Scheduler Collections
db.createCollection("jobs", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["name", "type", "data", "status"],
         properties: {
            name: { bsonType: "string" },
            type: { bsonType: "string" },
            data: { bsonType: "object" },
            status: { 
               enum: ["pending", "processing", "completed", "failed"]
            },
            scheduledFor: { bsonType: "date" },
            lastRunAt: { bsonType: "date" },
            nextRunAt: { bsonType: "date" },
            failReason: { bsonType: "string" }
         }
      }
   }
});

db.createCollection("jobLogs", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["jobId", "status", "timestamp"],
         properties: {
            jobId: { bsonType: "string" },
            status: { 
               enum: ["started", "completed", "failed"]
            },
            timestamp: { bsonType: "date" },
            result: { bsonType: "string" },
            error: { bsonType: "string" }
         }
      }
   }
});

// Indexes
db.users.createIndex({ "email": 1 }, { unique: true });
db.notifications.createIndex({ "userId": 1 });
db.notifications.createIndex({ "timestamp": 1 });
db.systemLogs.createIndex({ "timestamp": 1 });
db.systemLogs.createIndex({ "logLevel": 1 });
db.jobs.createIndex({ "status": 1, "scheduledFor": 1 });
db.jobs.createIndex({ "type": 1 });
db.jobLogs.createIndex({ "jobId": 1 });
db.jobLogs.createIndex({ "timestamp": 1 });
