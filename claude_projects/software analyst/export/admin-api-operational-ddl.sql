-- Astro Bookings: Admin API Operational Database DDL
-- Timestamp: 07/08/2024 17:00

-- drop schema if exists
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

-- Astro Bookings: Admin API Operational Database DDL
-- Timestamp: 07/08/2024 17:30

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Supplier table
CREATE TABLE suppliers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    tax_id TEXT NOT NULL UNIQUE,
    legal_address TEXT NOT NULL
);

-- Rocket table
CREATE TABLE rockets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    supplier_id UUID NOT NULL REFERENCES suppliers(id),
    name TEXT NOT NULL,
    capacity INT NOT NULL,
    range VARCHAR(15) NOT NULL CHECK (range IN ('Low Earth Orbit', 'Moon', 'Mars'))
);

-- Launch table
CREATE TABLE launches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    supplier_id UUID NOT NULL REFERENCES suppliers(id),
    rocket_id UUID NOT NULL REFERENCES rockets(id),
    destination TEXT NOT NULL,
    launch_date TIMESTAMPTZ NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(15) NOT NULL CHECK (status IN ('Scheduled', 'Delayed', 'Cancelled', 'Completed')),
    spaceport TEXT NOT NULL
);

-- Customer table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    date_of_birth DATE NOT NULL
);

-- Booking table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID NOT NULL REFERENCES customers(id),
    launch_id UUID NOT NULL REFERENCES launches(id),
    status VARCHAR(15) NOT NULL CHECK (status IN ('Confirmed', 'Cancelled', 'Refunded')),
    seat_count INT NOT NULL
);

-- Passenger table
CREATE TABLE passengers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID NOT NULL REFERENCES bookings(id),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    passport_number TEXT NOT NULL,
    special_needs TEXT
);

-- Invoice table
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    recipient_id UUID NOT NULL,
    booking_id UUID REFERENCES bookings(id),
    launch_id UUID REFERENCES launches(id),
    amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(15) NOT NULL CHECK (status IN ('Pending', 'Paid', 'Overdue', 'Cancelled')),
    due_date DATE NOT NULL,
    CONSTRAINT chk_invoice_type CHECK (
        (booking_id IS NOT NULL AND launch_id IS NULL) OR
        (booking_id IS NULL AND launch_id IS NOT NULL)
    )
);

-- Employee table
CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role VARCHAR(15) NOT NULL CHECK (role IN ('Admin', 'CustomerSupport', 'FinanceManager'))
);

-- Indexes for foreign keys and frequently queried fields
CREATE INDEX idx_rockets_supplier ON rockets(supplier_id);
CREATE INDEX idx_launches_supplier ON launches(supplier_id);
CREATE INDEX idx_launches_rocket ON launches(rocket_id);
CREATE INDEX idx_bookings_customer ON bookings(customer_id);
CREATE INDEX idx_bookings_launch ON bookings(launch_id);
CREATE INDEX idx_passengers_booking ON passengers(booking_id);
CREATE INDEX idx_invoices_recipient ON invoices(recipient_id);
CREATE INDEX idx_invoices_booking ON invoices(booking_id);
CREATE INDEX idx_invoices_launch ON invoices(launch_id);