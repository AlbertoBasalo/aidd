Hello, my name is Bill Jobs, and I am the Chief Technology Officer of Astro Bookings.

Here is a not exhaustive list of requirements for our system.

## Development

Our technology stack is based on Node servers and `Postgres` and `Mongo` databases.

We want web applications with the latest `Angular` versions and API services with Nest.js.

We use a managed `git` repository to trace the code's evolution and the history of functional evolutionary changes.

We want to have a model of the domain that represents the entities and their relationships, regardless of whether they are relational or non-relational databases.

We want a system diagram (in ASCII art) showing the different deployable components and how they communicate.

Write clean code with comments and documentation that any developer can understand.

### Testing

The code must be supported by tests.

We want to have unit tests with `Jest` for the business logic at the front and back end.

We want to have integration tests with `Cypress` for the API services.

We want to have end-to-end tests with `Cypress` for the web applications.

## Deployment

The code that passes the tests should be ready for automatic transition to production.

### Scalability

The system should allow different concurrent processes to run on it to scale as much as the level of operations requires.

Customer operations should be separated from supplier or employee operations to allow the system to scale independently. The customer is the king, so it deserves the fastest solution.

We want a simple API for accessing a MongoDB database to read the information and write the changes for the customer's web application.

We want an admin API to manage the relational data in the Postgres database used by suppliers and employee portals.

Use a dedicated API with a MongoDB database to store core system info like user credentials, synchronization jobs, and log entries with a simple web app for IT operators to check them.

Write a job scheduler that calls the main API and uses the above data to send emails to vendors and customers. Reconcile the relational and NoSQL databases with the changes they receive, so that both have the same information as soon as possible

## Security

Visitors and bots of the customer web app should be allowed anonymous access. They should be able to see the launches with available seats.

We need a user authentication system based on email and password.

Any supplier, customer, or department employee must be authenticated to access the system.

We want the user identification information separated from the operational data of employees, suppliers, and customers.

The core service should be responsible for the authentication of the users and the system logs.

### Reliability

The system should generate proper logs to trace its behavior. It should perform a fast startup and shutdown process to increase our uptime percentage.

## Summary

Every software component should use the core service to authenticate the users and log the system events.

Notifications will be sent with an external service, and we must have a log of the notification status.

Operational data should be stored in a relational database.

Informational and operational customer data should be stored in a non-relational database, which customers can quickly access from their web app.

We need a job scheduler that emails suppliers and customers and communicates with relational and NoSQL databases regarding any change.

System logs, user credentials, and job queues should also be stored in a non-relational database.

The IT department should have a web application to check the status of the notifications service and the full system logs.

That is all for now. In case of doubt try to adhere to the _twelve-factor app methodology_, and ask me any other questions that are left behind.

> Bill Jobs, Astro Bookings C.T.O.
