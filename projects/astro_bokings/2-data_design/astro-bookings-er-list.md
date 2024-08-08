# Astro Bookings: Entity-Relationships List

> Timestamp: 08/08/2024 15:00 UTC

## Entities

1. `User`: Represents all users of the system.
2. `Customer`: A user who can book space trips.
3. `Supplier`: A user who provides rockets and schedules launches.
4. `Employee`: A user who manages bookings and system operations.
5. `Rocket`: Represents a spacecraft owned by a supplier.
6. `Launch`: A scheduled space trip using a specific rocket.
7. `Booking`: A reservation made by a customer for a specific launch.
8. `Passenger`: Represents an individual traveling on a booked launch.
9. `Invoice`: A financial document for a booking or a supplier's platform usage.
10. `PaymentRecord`: Represents a payment made towards an invoice.
11. `SystemLog`: Records of system events and operations.
12. `Notification`: Represents messages sent to users about various events in the system.

## Relationships

1. User _(1 to 0 or 1)_ Customer/Supplier/Employee
   - `User` _is a_ `Customer`/`Supplier`/`Employee`
   - `Customer`/`Supplier`/`Employee` _is a type of_ `User`

2. User _(1 to 0 or many)_ Booking
   - `User` _makes_ `Booking`
   - `Booking` _belongs to_ `User`

3. Customer _(1 to 0 or many)_ Booking
   - `Customer` _has_ `Booking`
   - `Booking` _belongs to_ `Customer`

4. Supplier _(1 to 0 or many)_ Rocket
   - `Supplier` _owns_ `Rocket`
   - `Rocket` _belongs to_ `Supplier`

5. Supplier _(1 to 0 or many)_ Launch
   - `Supplier` _schedules_ `Launch`
   - `Launch` _is scheduled by_ `Supplier`

6. Employee _(1 to 0 or many)_ Booking
   - `Employee` _manages_ `Booking`
   - `Booking` _is managed by_ `Employee`

7. Rocket _(1 to 0 or many)_ Launch
   - `Rocket` _is used in_ `Launch`
   - `Launch` _uses_ `Rocket`

8. Launch _(1 to 0 or many)_ Booking
   - `Launch` _has_ `Booking`
   - `Booking` _is for_ `Launch`

9. Booking _(1 to 1 or many)_ Passenger
   - `Booking` _includes_ `Passenger`
   - `Passenger` _is part of_ `Booking`

10. Invoice _(1 to 1)_ Booking
    - `Invoice` _is for_ `Booking`
    - `Booking` _has_ `Invoice`

11. Invoice _(1 to 1)_ Launch
    - `Invoice` _is related to_ `Launch`
    - `Launch` _has_ `Invoice`

12. Invoice _(1 to 0 or many)_ PaymentRecord
    - `Invoice` _has_ `PaymentRecord`
    - `PaymentRecord` _belongs to_ `Invoice`

13. User _(1 to 0 or many)_ Notification
    - `User` _receives_ `Notification`
    - `Notification` _is sent to_ `User`

14. Launch _(1 to 0 or many)_ Notification
    - `Launch` _triggers_ `Notification`
    - `Notification` _is about_ `Launch`

15. Booking _(1 to 0 or many)_ Notification
    - `Booking` _triggers_ `Notification`
    - `Notification` _is about_ `Booking`

16. Invoice _(1 to 0 or many)_ Notification
    - `Invoice` _triggers_ `Notification`
    - `Notification` _is about_ `Invoice`

Note: The `SystemLog` entity is not directly related to other entities as it records system-wide events.

