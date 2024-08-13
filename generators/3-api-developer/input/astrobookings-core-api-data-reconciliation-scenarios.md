# AstroBookings: Core API Data Reconciliation Scenarios

> Generated on: Monday, August 12, 2024, 18:45 PM UTC

## User Story 7

As a `JobScheduler`, I want to **initiate the reconciliation process between the customer document DB and admin relational DB** _so that I can ensure data consistency across the system_.

```gherkin
Feature: Initiate Reconciliation Process

Scenario: Schedule regular reconciliation job
  Given the system is configured to run reconciliation daily at 2:00 AM
  When the scheduled time arrives
  Then the JobScheduler should trigger the reconciliation process
  And log the initiation of the reconciliation process

Scenario: Manually start reconciliation job
  Given an IT operator needs to run an immediate reconciliation
  When they send a request to start the reconciliation process
  Then the JobScheduler should immediately initiate the reconciliation process
  And log the manual initiation of the reconciliation process
```

## User Story 8

As an `APIConsumer`, I want to **trigger a reconciliation event** _so that I can inform the job scheduler about changes on my side_.

```gherkin
Feature: Trigger Reconciliation Event

Scenario: Trigger reconciliation after update
  Given an APIConsumer has performed an  update operation
  When they send a reconciliation event to the Core API
  Then the system should acknowledge the event
    | JobType | EntityType | EntityID | TimeQueued | Status |
  And queue a targeted reconciliation job for the affected data

```

## User Story 9

As a `System`, I want to **execute predefined reconciliation jobs** _so that I can resolve any discrepancies between customer facing data and operational data_.

```gherkin
Feature: Execute Reconciliation Jobs

Scenario: Reconcile launch data
  Given a reconciliation job for launch data is queued
  When the system executes the job
  Then it should read from relational DB
  And call customer API to save the data
  And mark the job as completed

Scenario: Reconcile booking data
  Given a reconciliation job for booking data is queued
  When the system executes the job
  Then it should read booking in the document DB
  And call the admin API to save the data
  And mark the job as completed

```

## User Story 10

As an `ITOperator`, I want to **monitor the reconciliation process and view detailed logs of changes made between the document DB and relational DB** _so that I can ensure data consistency and quickly address any synchronization issues_.

```gherkin
Feature: Monitor Reconciliation Process

Scenario: View active reconciliation jobs
  Given reconciliation jobs are in progress
  When the IT operator accesses the monitoring dashboard
  Then they should see a list of all active reconciliation jobs
  And the current status and progress of each job

Scenario: Access reconciliation logs
  Given a reconciliation job has completed
  When the IT operator requests the logs for that job
  Then the system should provide a detailed log containing:
    | Timestamp | Job ID | ChangedType | ChangedEntity | ChangedId | Status |
  And the log should be filterable by data type and action

```
