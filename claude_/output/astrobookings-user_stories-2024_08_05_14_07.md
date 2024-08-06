# User Stories for Astro Bookings

## Roles

- `Supplier`: Companies that offer space trips on passenger rockets.
- `Customer`: Travelers who book seats for passengers on rocket launches.
- `VIP Customer`: Customers who have already booked two trips.
- `Employee`: Astro Bookings staff managing bookings, launches, and financial operations.

## User Stories

### Supplier Stories

1. As a `Supplier`, I want to manage my rocket inventory, so that I can keep my fleet information up to date.

2. As a `Supplier`, I want to schedule new launches, so that I can offer space trips to customers.

3. As a `Supplier`, I want to view the status of my scheduled launches, so that I can track their occupancy and performance.

4. As a `Supplier`, I want to receive notifications about bookings and cancellations, so that I can stay informed about the demand for my launches.

5. As a `Supplier`, I want to see financial reports for my launches, so that I can understand my revenue and plan future trips.

### Customer Stories

6. As a `Customer`, I want to view available launches, so that I can plan my space travel.

7. As a `Customer`, I want to book seats for a launch, so that I can secure spots for my space trip.

8. As a `Customer`, I want to cancel my booking if needed, so that I have flexibility in my travel plans.

9. As a `Customer`, I want to receive confirmations and updates about my bookings, so that I'm informed about my trip status.

10. As a `Customer`, I want to view my booking history, so that I can keep track of my past and upcoming trips.

### VIP Customer Stories

11. As a `VIP Customer`, I want to be notified about new launches before regular customers, so that I have priority in booking.

12. As a `VIP Customer`, I want to book up to 6 seats per launch, so that I can bring more companions on my trip.

### Employee Stories

13. As an `Employee`, I want to view all bookings across different launches, so that I can manage our operations effectively.

14. As an `Employee`, I want to generate financial reports, so that I can analyze our business performance.

15. As an `Employee`, I want to manage customer refunds, so that I can handle cancellations according to our policies.

16. As an `Employee`, I want to view system logs and notification statuses, so that I can monitor the health of our platform.

## Scenarios and Acceptance Criteria

### 1. Supplier Manages Rocket Inventory

As a `Supplier`, I want to manage my rocket inventory, so that I can keep my fleet information up to date.

**Given**: I am logged into the supplier portal
**When**: I access the rocket management section
**Then**: I should be able to add, edit, or remove rockets from my inventory

**Acceptance Criteria**:
- Supplier can add a new rocket with details (name, capacity, range)
- Supplier can edit existing rocket details
- Supplier can remove a rocket if it's not associated with any scheduled launches
- System validates input data (e.g., capacity must be a positive integer)
- Changes are immediately reflected in the supplier's rocket list

### 7. Customer Books Seats

As a `Customer`, I want to book seats for a launch, so that I can secure spots for my space trip.

**Given**: I am logged in and viewing the details of an available launch
**When**: I select the number of seats and provide passenger information
**Then**: The system should process my booking and confirm the reservation

**Acceptance Criteria**:
- Customer can select up to 4 seats (6 for VIP customers)
- System requires and validates passenger information for each seat
- System checks that all passengers are between 18 and 70 years old
- System calculates and displays the total price before confirmation
- Upon confirmation, system processes payment and sends a booking confirmation
- The number of available seats for the launch is updated accordingly

### 14. Employee Generates Financial Reports

As an `Employee`, I want to generate financial reports, so that I can analyze our business performance.

**Given**: I am logged into the employee portal
**When**: I access the financial reporting section and specify report parameters
**Then**: The system should generate and display the requested financial report

**Acceptance Criteria**:
- Employee can select different types of reports (e.g., revenue by launch, by supplier, by time period)
- Employee can specify date ranges for the report
- System generates reports with accurate calculations based on booking and launch data
- Reports include relevant metrics such as total revenue, number of bookings, average booking value
- Reports can be viewed on screen and exported in common formats (e.g., PDF, CSV)

