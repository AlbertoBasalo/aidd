// MongoDB Schema for Core API

// MongoDB Shell Instructions for Core API Schema Setup

// Connect to the database (run this in the mongo shell)
use AstroBookingsCore

// Drop existing collections if they exist
db.users.drop();
db.jobs.drop();
db.systemLogs.drop();

// Create collections with schema validation

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "hashedPassword", "role"],
      properties: {
        _id: { bsonType: "objectId" },
        email: { bsonType: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        hashedPassword: { bsonType: "string" },
        role: { enum: ["customer", "supplier", "employee"] },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" },
      },
    },
  },
});

db.createCollection("jobs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["type", "status", "createdAt", "updatedAt"],
      properties: {
        _id: { bsonType: "objectId" },
        type: { enum: ["NOTIFICATION", "RECONCILIATION"] },
        status: { enum: ["queued", "processing", "completed", "failed"] },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" },
        startedAt: { bsonType: "date" },
        completedAt: { bsonType: "date" },
        retryCount: { bsonType: "int" },
        errorMessage: { bsonType: "string" },
        notification: {
          bsonType: "object",
          required: ["recipientEmail", "subject", "message"],
          properties: {
            recipientEmail: { bsonType: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
            subject: { bsonType: "string" },
            message: { bsonType: "string" },
          },
        },
        reconciliation: {
          bsonType: "object",
          required: ["entityType", "entityId", "changesLog"],
          properties: {
            entityType: { enum: ["launch", "booking"] },
            entityId: { bsonType: "string" },
            changesLog: { bsonType: "string" },
          },
        },
      },
    },
  },
});

db.createCollection("systemLogs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["timestamp", "eventType", "severity", "message"],
      properties: {
        _id: { bsonType: "objectId" },
        timestamp: { bsonType: "date" },
        eventType: { enum: ["AUTH", "ERROR", "RECONCILE", "NOTIFY"] },
        severity: { enum: ["info", "warning", "error", "critical"] },
        message: { bsonType: "string" },
        userId: { bsonType: "string" },
        ipAddress: { bsonType: "string" },
        additionalData: { bsonType: "object" },
      },
    },
  },
});

// Create indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.jobs.createIndex({ type: 1, status: 1 });
db.jobs.createIndex({ createdAt: 1 });
db.systemLogs.createIndex({ timestamp: 1 });
db.systemLogs.createIndex({ eventType: 1 });
db.systemLogs.createIndex({ userId: 1 });

print("AstroBookingsCore database schema created successfully.");
