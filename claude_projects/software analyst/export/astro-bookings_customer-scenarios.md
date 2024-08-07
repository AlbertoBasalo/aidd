# AstroBookings: Scenarios

> Timestamp: 07/08/2024 15:30

## Customer Web Application

### 1. As an Anonymous Visitor, I want to view available rocket launches, so that I can explore potential space travel options.

```gherkin
Feature: View Available Rocket Launches

Scenario: Anonymous visitor views list of available launches
  Given I am an anonymous visitor on the AstroBookings homepage
  When I navigate to the "Available Launches" section
  Then I should see a list of upcoming rocket launches
  And each launch should display the date, destination, and price per seat

Scenario: Anonymous visitor filters launches by destination
  Given I am an anonymous visitor on the "Available Launches" page
  When I select "Moon" from the destination filter
  Then I should only see launches going to the Moon
  And the list should update without reloading the page

Scenario: No launches available for selected criteria
  Given I am an anonymous visitor on the "Available Launches" page
  When I apply filters that result in no matching launches
  Then I should see a message saying "No launches found for the selected criteria"
  And I should see an option to clear all filters
```

### 2. As an Anonymous Visitor, I want to register for an account, so that I can book space travel experiences.

```gherkin
Feature: Register for an Account

Scenario: Visitor successfully registers for an account
  Given I am an anonymous visitor on the AstroBookings homepage
  When I click on the "Register" button
  And I fill in my personal details including name, email, and password
  And I submit the registration form
  Then I should see a registration confirmation message
  And I should receive a welcome email
  And I should be logged in automatically

Scenario: Visitor attempts to register with an existing email
  Given I am an anonymous visitor on the registration page
  When I fill in the registration form with an email that already exists in the system
  And I submit the registration form
  Then I should see an error message stating the email is already in use
  And I should be prompted to log in or use a different email

Scenario: Visitor registers with invalid age
  Given I am an anonymous visitor on the registration page
  When I fill in the registration form with a birth date that makes me younger than 18
  And I submit the registration form
  Then I should see an error message stating the minimum age requirement
  And my registration should not be processed
```

### 3. As a Customer, I want to book seats on a rocket launch, so that I can secure my space travel experience.

```gherkin
Feature: Book Seats on a Rocket Launch

Scenario: Customer successfully books seats on a launch
  Given I am logged in as a customer
  And I am viewing the details of an available launch to Mars
  When I select 2 seats for the launch
  And I confirm the booking
  Then I should see a booking confirmation message
  And the booking should appear in my "My Bookings" section
  And I should receive a booking confirmation email

Scenario: Customer attempts to book more seats than available
  Given I am logged in as a customer
  And I am viewing a launch with only 1 seat available
  When I try to book 2 seats
  Then I should see an error message
  And I should be prompted to select a different number of seats or choose another launch

Scenario: Customer books the last available seat
  Given I am logged in as a customer
  And I am viewing a launch with only 1 seat available
  When I book the last seat
  Then I should see a booking confirmation message
  And the launch should no longer appear in the available launches list
```

### 4. As a Customer, I want to cancel my booking, so that I can change my travel plans if necessary.

```gherkin
Feature: Cancel Booking

Scenario: Customer cancels a booking more than a year before the launch
  Given I am logged in as a customer
  And I have a booking for a launch more than a year in the future
  When I navigate to my "My Bookings" section
  And I select the option to cancel the booking
  Then I should see a cancellation confirmation message
  And I should be informed that I will receive a 90% refund
  And the booking should be removed from my "My Bookings" section

Scenario: Customer cancels a booking between 3 months and 1 year before the launch
  Given I am logged in as a customer
  And I have a booking for a launch 6 months in the future
  When I cancel the booking
  Then I should see a cancellation confirmation message
  And I should be informed that I will receive a 70% refund

Scenario: Customer attempts to cancel a booking less than 3 months before the launch
  Given I am logged in as a customer
  And I have a booking for a launch 2 months in the future
  When I attempt to cancel the booking
  Then I should see a message stating that cancellation is not possible
  And I should be given options to contact customer support or modify my booking
```

### 5. As a VIP Customer, I want to book up to six seats on a launch, so that I can bring more companions on my trip.

```gherkin
Feature: VIP Customer Books Extra Seats

Scenario: VIP customer books six seats on a launch
  Given I am logged in as a VIP customer
  And I am viewing an available launch to the Moon
  When I select 6 seats for the launch
  And I confirm the booking
  Then I should see a booking confirmation message
  And the booking for 6 seats should appear in my "My Bookings" section

Scenario: Regular customer attempts to book more than four seats
  Given I am logged in as a regular customer
  And I am viewing an available launch to Mars
  When I try to select 5 seats for the launch
  Then I should see a message informing me of the 4-seat limit for regular customers
  And I should be prompted to select 4 or fewer seats

Scenario: VIP customer receives early notification of a new launch
  Given I am a VIP customer
  When a new launch to Jupiter is scheduled
  Then I should receive an email notification about the new launch
  And the email should contain a link to book seats for this launch
```

