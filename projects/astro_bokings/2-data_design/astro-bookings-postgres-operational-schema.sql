-- Astro Bookings: PostgreSQL Schema (Operational Data)
-- Generated on: 08/08/2024 21:00 UTC

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Space Travel

CREATE TABLE suppliers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name TEXT NOT NULL,
    legal_number TEXT NOT NULL,
    legal_address TEXT NOT NULL
);

CREATE TABLE rockets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    supplier_id UUID NOT NULL REFERENCES suppliers(id),
    name TEXT NOT NULL,
    specifications TEXT
);

CREATE TABLE launches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rocket_id UUID NOT NULL REFERENCES rockets(id),
    supplier_id UUID NOT NULL REFERENCES suppliers(id),
    launch_date TIMESTAMPTZ NOT NULL,
    destination TEXT NOT NULL,
    capacity INTEGER NOT NULL,
    price_per_seat DECIMAL(10, 2) NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Scheduled', 'In Progress', 'Completed', 'Cancelled'))
);

-- Booking

CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID NOT NULL,
    launch_id UUID NOT NULL REFERENCES launches(id),
    number_of_seats INTEGER NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Pending', 'Confirmed', 'Cancelled')),
    total_amount DECIMAL(10, 2) NOT NULL
);

CREATE TABLE passengers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID NOT NULL REFERENCES bookings(id),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    date_of_birth DATE NOT NULL
);

-- Financial

CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID REFERENCES bookings(id),
    launch_id UUID REFERENCES launches(id),
    amount DECIMAL(10, 2) NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Pending', 'Paid', 'Overdue', 'Cancelled')),
    issue_date TIMESTAMPTZ NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('CustomerBooking', 'SupplierFee'))
);

CREATE TABLE payment_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_id UUID NOT NULL REFERENCES invoices(id),
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMPTZ NOT NULL,
    payment_method TEXT NOT NULL CHECK (payment_method IN ('CreditCard', 'BankTransfer', 'PayPal'))
);

-- Indexes

CREATE INDEX idx_launches_supplier_id ON launches(supplier_id);
CREATE INDEX idx_launches_launch_date ON launches(launch_date);
CREATE INDEX idx_bookings_customer_id ON bookings(customer_id);
CREATE INDEX idx_bookings_launch_id ON bookings(launch_id);
CREATE INDEX idx_passengers_booking_id ON passengers(booking_id);
CREATE INDEX idx_invoices_booking_id ON invoices(booking_id);
CREATE INDEX idx_invoices_launch_id ON invoices(launch_id);
CREATE INDEX idx_payment_records_invoice_id ON payment_records(invoice_id);

-- Constraints

ALTER TABLE bookings ADD CONSTRAINT check_booking_seats
    CHECK (number_of_seats > 0 AND number_of_seats <= 6);

ALTER TABLE passengers ADD CONSTRAINT check_passenger_age
    CHECK (date_of_birth <= CURRENT_DATE - INTERVAL '18 years'
           AND date_of_birth >= CURRENT_DATE - INTERVAL '70 years');

-- Comments

COMMENT ON TABLE suppliers IS 'Stores supplier-specific information';
COMMENT ON TABLE rockets IS 'Stores information about rockets owned by suppliers';
COMMENT ON TABLE launches IS 'Stores information about scheduled space launches';
COMMENT ON TABLE bookings IS 'Stores booking information for launches';
COMMENT ON TABLE passengers IS 'Stores information about passengers for each booking';
COMMENT ON TABLE invoices IS 'Stores invoice information for bookings and supplier fees';
COMMENT ON TABLE payment_records IS 'Stores payment records for invoices';
