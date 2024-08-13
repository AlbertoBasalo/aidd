-- https://postgres.new/db/te2ppgzg398sp73j

-- Create Users table
CREATE TABLE users (
    id bigint primary key generated always as identity,
    username text,
    password_hash text,
    email text,
    role text
);

-- Create Customers table
CREATE TABLE customers (
    id bigint primary key generated always as identity,
    user_id bigint references users(id),
    is_vip boolean,
    total_bookings integer,
    tax_id text,
    legal_address text
);

-- Create Suppliers table
CREATE TABLE suppliers (
    id bigint primary key generated always as identity,
    user_id bigint references users(id),
    company_name text,
    tax_id text,
    legal_address text
);

-- Create Employees table
CREATE TABLE employees (
    id bigint primary key generated always as identity,
    user_id bigint references users(id),
    position text
);

-- Create Bookings table
CREATE TABLE bookings (
    id bigint primary key generated always as identity,
    customer_id bigint references customers(id),
    launch_id bigint references launches(id),
    seats_booked integer,
    status text,
    booking_date timestamp,
    cancellation_date timestamp,
    refund_amount numeric
);

-- Create Rockets table
CREATE TABLE rockets (
    id bigint primary key generated always as identity,
    supplier_id bigint references suppliers(id),
    name text,
    capacity integer,
    destination_range text
);

-- Create Launches table
CREATE TABLE launches (
    id bigint primary key generated always as identity,
    rocket_id bigint references rockets(id),
    launch_date timestamp,
    price_per_seat numeric,
    rocket_type text,
    status text,
    seats_filled integer
);

-- Create Passengers table
CREATE TABLE passengers (
    id bigint primary key generated always as identity,
    booking_id bigint references bookings(id),
    name text,
    age integer
);

-- Create Invoices table
CREATE TABLE invoices (
    id bigint primary key generated always as identity,
    booking_id bigint references bookings(id),
    launch_id bigint references launches(id),
    amount numeric not null,
    status text not null,
    issue_date timestamp not null,
    due_date timestamp not null,
    legal_number text not null,
    issuer text not null,
    recipient text not null
);

-- Create PaymentTransactions table
CREATE TABLE payment_transactions (
    id bigint primary key generated always as identity,
    invoice_id bigint references invoices(id),
    transaction_date timestamp,
    amount numeric,
    status text
);
