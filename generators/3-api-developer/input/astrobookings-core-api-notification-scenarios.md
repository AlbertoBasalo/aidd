# AstroBookings: Core API Notification Handling Scenarios

> Generated on: Monday, August 12, 2024, 17:45 PM UTC

## User Story 5

As an `APIConsumer`, I want to **trigger email notifications** _so that I can inform customers and suppliers about important events_.

```gherkin
Feature: Trigger Email Notifications

Scenario: Notify supplier of new booking
  Given a new booking is made for a supplier's launch
  When the APIConsumer triggers a new booking notification
  Then the system should create a notification job with the following details:
    | Notification Type | Recipient     | Template    | Data                             |
    | NEW_BOOKING       | [SUPPLIER_EMAIL] | new_booking | {booking_id, launch_id, seats} |
  And the job should be queued for processing by the JobScheduler
    | JobType | EntityType | EntityID | TimeQueued | Status |

Scenario: Notify supplier of booking cancellation
  Given a booking for a supplier's launch has been cancelled
  When the APIConsumer triggers a booking cancellation notification
  Then the system should create a notification job with the following details:
    | Notification Type | Recipient     | Template           | Data                             |
    | BOOKING_CANCEL    | [SUPPLIER_EMAIL] | supplier_cancellation | {booking_id, launch_id, seats} |
  And the job should be queued for processing by the JobScheduler
    | JobType | EntityType | EntityID | TimeQueued | Status |

Scenario: Send launch abort notification to customer
  Given a launch for a customer's booking has been aborted
  When the APIConsumer triggers a launch abort notification
  Then the system should create a notification job with the following details:
    | Notification Type | Recipient     | Template    | Data                                        |
    | LAUNCH_ABORT      | [CUSTOMER_EMAIL] | launch_abort | {launch_id, abort_reason, refund_info} |
  And the job should be queued for processing by the JobScheduler
    | JobType | EntityType | EntityID | TimeQueued | Status |
```

## User Story 6

As a `JobScheduler`, I want to **interact with the External Notification Service** _so that I can send scheduled emails to customers and suppliers_.

```gherkin
Feature: Process Notification Jobs

Scenario: Successfully send a notification
  Given a queued notification job
  When the JobScheduler processes the job
  Then it should send the notification details to the External Notification Service
  And the External Notification Service should respond with a success status
  And the system should mark the notification job as completed
  And log the successful notification sending

Scenario: Handle failed notification attempt
  Given a queued notification job
  When the JobScheduler processes the job
  And the External Notification Service responds with a failure status
  Then the system should mark the notification job for retry
  And log the failed notification attempt
  And schedule a retry after a defined interval

Scenario: Retry failed notification
  Given a failed notification job scheduled for retry
  When the JobScheduler processes the retry job
  Then it should attempt to send the notification to the External Notification Service again
  And if successful, mark the notification job as completed
  And if failed again, increment the retry count and reschedule if below max retries
  And log the retry attempt result
```
