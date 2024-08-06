# AstroBookings User Stories

## Roles

- `Customer`: A person who books space travel
- `VIP Customer`: A customer who has already booked two trips
- `Supplier`: A company that provides rocket launches
- `Financial Employee`: An AstroBookings staff member responsible for financial operations
- `IT Employee`: An AstroBookings staff member responsible for IT operations

## User Stories

### Customer stories

1. As a `Customer`, I want to **view available launches**, so that _I can plan my space travel_.

2. As a `Customer`, I want to **book seats on a launch**, so that _I can secure my space travel_.

3. As a `Customer`, I want to **cancel my booking**, so that _I can change my travel plans if needed_.

4. As a `Customer`, I want to **view the status of my bookings**, so that _I can stay informed about my travel plans_.

5. As a `Customer`, I want to **receive notifications about launch incidents**, so that _I can be aware of any changes to my travel plans_.

6. As a `Customer`, I want to **provide my personal information**, so that _I can complete my booking process_.

7. As a `Customer`, I want to **provide a payment method**, so that _I can pay for my bookings_.

8. As a `Customer`, I want to **receive invoices for my bookings**, so that _I can keep track of my expenses_.

9. As a `Customer`, I want to **receive refunds for cancelled bookings**, so that _I can get my money back when appropriate_.

### VIP Customer stories

10. As a `VIP Customer`, I want to **book up to six seats**, so that _I can bring more companions on my space travel_.

11. As a `VIP Customer`, I want to **receive notifications about new launches**, so that _I can have priority in booking_.

### Supplier stories

12. As a `Supplier`, I want to **showcase my rockets**, so that _customers can see what I offer_.

13. As a `Supplier`, I want to **schedule new launches**, so that _I can offer seats for booking_.

14. As a `Supplier`, I want to **set the price per seat for a launch**, so that _I can manage my revenue_.

15. As a `Supplier`, I want to **view the list of passengers for each launch**, so that _I can prepare for the flight_.

16. As a `Supplier`, I want to **view the amount of money collected for each launch**, so that _I can track my earnings_.

17. As a `Supplier`, I want to **receive notifications about booking status**, so that _I can stay informed about the popularity of my launches_.

18. As a `Supplier`, I want to **receive pro-forma invoices for successful launches**, so that _I can issue invoices to AstroBookings_.

### Financial Employee stories

19. As a `Financial Employee`, I want to **view the status of bookings and launches**, so that _I can manage financial operations_.

20. As a `Financial Employee`, I want to **issue invoices to customers**, so that _we can collect payment for bookings_.

21. As a `Financial Employee`, I want to **process refunds to customers**, so that _we can handle cancellations appropriately_.

22. As a `Financial Employee`, I want to **update payment status for invoices**, so that _we can track our revenue accurately_.

23. As a `Financial Employee`, I want to **view the amount of money collected for each launch**, so that _I can reconcile our accounts_.

### IT Employee stories

24. As an `IT Employee`, I want to **manage the notification system**, so that _we can ensure proper communication with users_.

25. As an `IT Employee`, I want to **check for pending emails**, so that _we can ensure all notifications are sent_.

26. As an `IT Employee`, I want to **monitor system logs**, so that _I can troubleshoot any issues_.

## Scenarios and Acceptance Criteria

### 1. View available launches

As a `Customer`, I want to **view available launches**, so that _I can plan my space travel_.

- **Given**: I am on the AstroBookings landing page
- **When**: I browse the list of upcoming launches
- **Then**: I should see a list of launches with available seats

**Acceptance Criteria**:
- The list should show launch date, destination, rocket name, spaceport, and price per seat
- The list should only show launches with available seats
- The list should be sorted by launch date

### 2. Book seats on a launch

As a `Customer`, I want to **book seats on a launch**, so that _I can secure my space travel_.

- **Given**: I am viewing the details of a launch with available seats
- **When**: I select the number of seats and confirm the booking
- **Then**: The seats should be reserved for me and I should receive a confirmation

**Acceptance Criteria**:
- I can select between 1 and 4 seats (6 if I'm a VIP customer)
- My personal information (name, email, phone number, age) is required
- I receive an email confirmation of my booking
- The number of available seats for the launch is updated

### 3. Cancel booking

As a `Customer`, I want to **cancel my booking**, so that _I can change my travel plans if needed_.

- **Given**: I have an existing booking
- **When**: I cancel my booking
- **Then**: My booking should be cancelled and I should receive a refund based on the cancellation policy

**Acceptance Criteria**:
- I can cancel my booking up to 3 months before the launch
- I receive 90% refund if cancelling 1 year before the launch
- I receive 70% refund if cancelling between 1 year and 3 months before the launch
- I receive an email confirmation of the cancellation and refund

### 12. Showcase rockets

As a `Supplier`, I want to **showcase my rockets**, so that _customers can see what I offer_.

- **Given**: I am logged in as a supplier
- **When**: I add or update information about my rockets
- **Then**: The information should be visible to customers

**Acceptance Criteria**:
- I can add new rockets with details like name, capacity, and destination range
- I can update existing rocket information
- Customers can view the rocket information when browsing launches

### 19. View booking and launch status

As a `Financial Employee`, I want to **view the status of bookings and launches**, so that _I can manage financial operations_.

- **Given**: I am logged in as a financial employee
- **When**: I access the financial dashboard
- **Then**: I should see an overview of all bookings and launches

**Acceptance Criteria**:
- The dashboard shows the number of bookings for each launch
- The dashboard shows the total amount collected for each launch
- I can see the payment status of each booking
- I can see which launches are upcoming, completed, or cancelled

### 24. Manage notification system

As an `IT Employee`, I want to **manage the notification system**, so that _we can ensure proper communication with users_.

- **Given**: I am logged in as an IT employee
- **When**: I access the notification management system
- **Then**: I should be able to view and manage all system notifications

**Acceptance Criteria**:
- I can see a list of all pending notifications
- I can see the status of each notification (pending, sent, failed)
- I can manually trigger resend for failed notifications
- I can view logs of sent notifications
