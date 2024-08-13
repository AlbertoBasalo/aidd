-- Insert data into Users table
INSERT INTO users (username, password_hash, email, role) VALUES
('john_doe', 'hashed_password_1', 'john.doe@example.com', 'customer'),
('jane_smith', 'hashed_password_2', 'jane.smith@example.com', 'supplier'),
('alice_jones', 'hashed_password_3', 'alice.jones@example.com', 'employee');

-- Insert data into Customers table
INSERT INTO customers (user_id, is_vip, total_bookings, tax_id, legal_address) VALUES
(1, true, 3, 'TAX123456', '123 Main St, Springfield, USA');

-- Insert data into Suppliers table
INSERT INTO suppliers (user_id, company_name, tax_id, legal_address) VALUES
(2, 'SpaceX', 'TAX654321', '1 Rocket Rd, Hawthorne, USA');

-- Insert data into Employees table
INSERT INTO employees (user_id, position) VALUES
(3, 'Launch Coordinator');

-- Insert data into Rockets table
INSERT INTO rockets (supplier_id, name, capacity, destination_range) VALUES
(1, 'Falcon 9', 60, 'Low Earth Orbit');

-- Insert data into Launches table
INSERT INTO launches (rocket_id, launch_date, price_per_seat, rocket_type, status, seats_filled) VALUES
(1, '2024-05-15 10:00:00', 500000, 'Low Earth Orbit', 'scheduled', 30);

-- Insert data into Bookings table
INSERT INTO bookings (customer_id, launch_id, seats_booked, status, booking_date, cancellation_date, refund_amount) VALUES
(1, 1, 4, 'booked', '2023-01-10 14:00:00', NULL, NULL);

-- Insert data into Passengers table
INSERT INTO passengers (booking_id, name, age) VALUES
(1, 'John Doe Jr.', 12),
(1, 'Jane Doe', 35),
(1, 'Alice Doe', 30),
(1, 'Bob Doe', 40);

-- Insert data into Invoices table
INSERT INTO invoices (booking_id, launch_id, amount, status, issue_date, due_date, legal_number, issuer, recipient) VALUES
(1, 1, 2000000, 'pending', '2023-01-11 09:00:00', '2023-02-11 09:00:00', 'INV123456', 'SpaceX', 'John Doe');

-- Insert data into PaymentTransactions table
INSERT INTO payment_transactions (invoice_id, transaction_date, amount, status) VALUES
(1, '2023-01-12 10:00:00', 2000000, 'completed');