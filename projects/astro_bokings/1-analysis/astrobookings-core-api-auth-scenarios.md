# AstroBookings: Core API Authentication and Authorization Scenarios

> Generated on: Monday, August 12, 2024, 15:15 PM UTC

## User Story 1
As a `System`, I want to **securely store and manage user credentials** *so that I can maintain the integrity of user accounts*.

```gherkin
Feature: Secure Credential Storage and Management

Scenario: Store new user credentials with role
  Given a new user registration request with email "newuser@example.com", password "SecurePass123!", and role "customer"
  When the system processes the registration request
  Then the password should be hashed using a secure algorithm
  And the hashed password should be stored in the database
  And the user's role should be stored as "customer"
  And the original password should not be stored anywhere in plain text

Scenario: Update existing user password
  Given an existing user with email "existinguser@example.com" and role "supplier"
  When the user requests a password change from "OldPass456!" to "NewSecurePass789!"
  Then the system should verify the old password
  And the new password should be hashed using a secure algorithm
  And the new hashed password should replace the old one in the database
  And the user's role should remain unchanged as "supplier"

Scenario: Prevent duplicate email registration
  Given an existing user with email "existing@example.com"
  When a new user attempts to register with email "existing@example.com"
  Then the system should reject the registration
  And return an "email already in use" error

Scenario: Enforce password complexity requirements
  Given a user is setting a new password "WeakPass"
  When the user submits the password
  Then the system should reject the password
  And provide feedback that the password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters
```

## User Story 2
As an `APIConsumer`, I want to **authenticate users** *so that I can ensure only authorized access to the system*.

```gherkin
Feature: User Authentication

Scenario: Successful user authentication
  Given a registered user with email "john@example.com", password "SecurePass123!", and role "customer"
  When the APIConsumer sends an authentication request with these credentials
  Then the system should return a valid JWT token
  And the response should include the user's ID, email, and role "customer"

Scenario: Failed authentication due to incorrect password
  Given a registered user with email "jane@example.com", password "CorrectPass456!", and role "supplier"
  When the APIConsumer sends an authentication request with email "jane@example.com" and password "WrongPass789!"
  Then the system should return a 401 Unauthorized error
  And the response should include a message "Invalid email or password"

Scenario: Failed authentication due to non-existent user
  Given no user exists with email "nonexistent@example.com"
  When the APIConsumer sends an authentication request with email "nonexistent@example.com" and any password
  Then the system should return a 401 Unauthorized error
  And the response should include a message "Invalid email or password"

Scenario: Successful authentication with different user roles
  Given the following registered users:
    | Email               | Password      | Role       |
    | customer@example.com| CustomerPass1 | customer   |
    | supplier@example.com| SupplierPass1 | supplier   |
    | employee@example.com| EmployeePass1 | employee   |
  When the APIConsumer sends authentication requests for each user
  Then the system should return a valid JWT token for each user
  And each response should include the user's ID, email, and correct role
```

