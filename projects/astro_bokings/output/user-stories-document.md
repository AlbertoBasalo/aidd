# User Stories Document for Astro Bookings

## Roles

- `Supplier`: Companies that offer space trips on passenger rockets.
- `Customer`: Travelers who book seats for passengers on rocket launches.
- `VIP Customer`: Customers who have already booked two trips.
- `Employee`: Astro Bookings staff managing bookings, launches, and financial operations.

## User Stories

### Supplier Stories

1. As a `Supplier`, I want to showcase my rockets and scheduled launches on a website, so that potential customers can see what I offer.

2. As a `Supplier`, I want to create launch offers with specific details (date, spaceport, price per seat), so that I can make my services available for booking.

3. As a `Supplier`, I want to be informed by email of the status of bookings and cancellations, so that I can stay updated on my launch occupancy.

4. As a `Supplier`, I want to see a list of passengers and the amount of money collected for each launch, so that I can manage my operations effectively.

5. As a `Supplier`, I want to issue invoices for successful launches, so that I can receive payment for my services.

### Customer Stories

6. As a `Customer`, I want to view available launches and book seats for passengers, so that I can plan my space travel.

7. As a `Customer`, I want to cancel my bookings and receive refunds according to the platform's conditions, so that I have flexibility in my travel plans.

8. As a `Customer`, I want to fill in passenger contact information during booking, so that all necessary details are provided for the trip.

9. As a `Customer`, I want to be informed of launch incidents, so that I can adjust my plans if necessary.

10. As a `Customer`, I want to receive invoices and refunds according to the conditions of contracting services, so that I have clear records of my transactions.

### VIP Customer Stories

11. As a `VIP Customer`, I want to be notified by email when new launches are scheduled, so that I can have priority in booking.

12. As a `VIP Customer`, I want to be able to book up to six seats in a launch, so that I can enjoy the benefits of my VIP status.

### Employee Stories

13. As an `Employee`, I want to see the status of bookings and launches, so that I can manage our operations effectively.

14. As an `Employee`, I want to issue invoices to customers and suppliers, so that we can process payments correctly.

15. As an `Employee`, I want to control the payment status of invoices and refunds, so that I can ensure our financial operations are in order.

16. As an `Employee`, I want to generate reports on our operations and finances, so that I can provide insights to management.

## Scenarios and Acceptance Criteria

### 1. Supplier Creates Launch Offer

As a `Supplier`, I want to create launch offers with specific details (date, spaceport, price per seat), so that I can make my services available for booking.

- **Given**: I am logged into the supplier portal
- **When**: I enter the details for a new launch (rocket, date, spaceport, price per seat)
- **Then**: The system creates a new launch offer and makes it available for booking

**Acceptance Criteria**:
- The launch offer form includes fields for rocket selection, date, spaceport, and price per seat
- The system validates that the launch date is at least one year in the future
- The system confirms the creation of the launch offer
- The new launch appears in the list of available launches for customers

### 6. Customer Books Seats

As a `Customer`, I want to view available launches and book seats for passengers, so that I can plan my space travel.

- **Given**: I am browsing the available launches
- **When**: I select a launch and specify the number of seats I want to book
- **Then**: The system processes my booking and confirms the reservation

**Acceptance Criteria**:
- The system allows booking up to 4 seats for regular customers and 6 for VIP customers
- The booking process includes fields for passenger information
- The system verifies that all passengers are between 18 and 70 years old
- The system confirms the booking and provides a booking reference number
- The available seats for the selected launch are updated accordingly

### 11. VIP Customer Receives Launch Notification

As a `VIP Customer`, I want to be notified by email when new launches are scheduled, so that I can have priority in booking.

- **Given**: I am a VIP customer (have booked at least two trips)
- **When**: A supplier schedules a new launch
- **Then**: I receive an email notification with details of the new launch and a link to book

**Acceptance Criteria**:
- The system identifies VIP customers based on their booking history
- The email notification includes the rocket name, spaceport, destination, and launch date
- The booking link in the email is human-readable and SEO-friendly
- VIP customers receive the notification before regular customers can see the new launch

### 14. Employee Issues Invoice

As an `Employee`, I want to issue invoices to customers and suppliers, so that we can process payments correctly.

- **Given**: I am logged into the employee portal
- **When**: I select a completed launch or booking to invoice
- **Then**: The system generates an appropriate invoice

**Acceptance Criteria**:
- The invoice includes a unique number, legal date, and amount
- For supplier invoices, the fee is calculated as 1% of the total launch income (0.8% after 2 successful launches)
- For customer invoices, the total cost of booked seats is included
- The system sends the invoice by email to the recipient
- The invoice is recorded in the system with a "pending" payment status
