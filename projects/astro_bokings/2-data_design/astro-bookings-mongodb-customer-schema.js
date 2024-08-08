// Astro Bookings: Revised MongoDB Customer Database Schema
// Generated on: 08/08/2024 23:00 UTC

// Launches Collection
db.createCollection("launches", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["launchId", "rocketId", "supplierId", "launchDate", "destination", "pricePerSeat", "capacity", "availableSeats", "status"],
         properties: {
            launchId: { bsonType: "string" },
            rocketId: { bsonType: "string" },
            supplierId: { bsonType: "string" },
            launchDate: { bsonType: "date" },
            destination: { bsonType: "string" },
            pricePerSeat: { bsonType: "decimal" },
            capacity: { bsonType: "int" },
            availableSeats: { bsonType: "int" },
            status: { 
               enum: ["Scheduled", "In Progress", "Completed", "Cancelled"]
            },
            rocket: {
               bsonType: "object",
               required: ["name", "specifications"],
               properties: {
                  name: { bsonType: "string" },
                  specifications: { bsonType: "string" }
               }
            },
            supplier: {
               bsonType: "object",
               required: ["companyName"],
               properties: {
                  companyName: { bsonType: "string" }
               }
            }
         }
      }
   }
});

// Customers Collection
db.createCollection("customers", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["userId", "email", "firstName", "lastName"],
         properties: {
            userId: { bsonType: "string" },
            email: {
               bsonType: "string",
               pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
            },
            firstName: { bsonType: "string" },
            lastName: { bsonType: "string" },
            phoneNumber: { bsonType: "string" },
            dateOfBirth: { bsonType: "date" },
            isVIP: { bsonType: "bool" }
         }
      }
   }
});

// Bookings Collection
db.createCollection("bookings", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["bookingId", "customerId", "launchId", "numberOfSeats", "totalAmount", "status"],
         properties: {
            bookingId: { bsonType: "string" },
            customerId: { bsonType: "string" },
            launchId: { bsonType: "string" },
            numberOfSeats: { bsonType: "int" },
            totalAmount: { bsonType: "decimal" },
            status: { 
               enum: ["Pending", "Confirmed", "Cancelled"]
            },
            passengers: {
               bsonType: "array",
               items: {
                  bsonType: "object",
                  required: ["firstName", "lastName", "dateOfBirth"],
                  properties: {
                     firstName: { bsonType: "string" },
                     lastName: { bsonType: "string" },
                     dateOfBirth: { bsonType: "date" }
                  }
               }
            },
            launch: {
               bsonType: "object",
               required: ["launchDate", "destination", "rocketName", "supplierName"],
               properties: {
                  launchDate: { bsonType: "date" },
                  destination: { bsonType: "string" },
                  rocketName: { bsonType: "string" },
                  supplierName: { bsonType: "string" }
               }
            }
         }
      }
   }
});

// Indexes
db.launches.createIndex({ "launchDate": 1 });
db.launches.createIndex({ "destination": 1 });
db.launches.createIndex({ "status": 1 });
db.launches.createIndex({ "pricePerSeat": 1 });
db.launches.createIndex({ "availableSeats": 1 });

db.customers.createIndex({ "userId": 1 }, { unique: true });
db.customers.createIndex({ "email": 1 }, { unique: true });

db.bookings.createIndex({ "customerId": 1 });
db.bookings.createIndex({ "launchId": 1 });
db.bookings.createIndex({ "status": 1 });

// Full-text search index for launches
db.launches.createIndex({ 
   "destination": "text", 
   "rocket.name": "text", 
   "supplier.companyName": "text" 
});
