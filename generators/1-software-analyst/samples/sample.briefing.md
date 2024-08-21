# LibrarySystem: Domain Requirements

> Timestamp: 2024-08-20 10:30:00 UTC

LibrarySystem is a simple digital platform for managing a small local library. It handles book cataloging, member management, and borrowing processes. The system aims to digitize library operations, making it easier for librarians to manage the collection and for members to borrow books.

The project is divided into four main domains: `Authentication`, `Catalog Management`, `Member Management`, and `Borrowing`. Each domain has specific requirements that cater to different user roles and system functionalities.

The solution will be developed using a microservices architecture, with separate components for web applications, API services, databases, and external services. This modular approach combined with modern tecnologies lik `Angular`, `NestJs`, `Postgres`, and `MongoDB`, will allow for better scalability, maintainability, and flexibility in the system.

The common vocabulary and understanding of the system's requirements is based on the following domain entities: `User`, `Member`, `Librarian`, `Book`, `BookCopy`, `Borrowing`, and `Hold`. These entities represent the core concepts of the library system and define the interactions between users, books, and borrowing processes.

## Requirements by Domain

### 0. Authentication

Manages user registration, login, and access control for librarians and members.

1. Register as a member
2. Log in to member account
3. Log in as Librarian

### 1. Catalog Management

Handles the addition, editing, and removal of books from the library catalog.

1. Add a new book to the catalog
2. Update book information
3. Search for books

### 2. Member Management

Manages library member profiles and membership status.

1. View member information
2. Update contact information
3. Update membership status

### 3. Borrowing

Handles the process of checking out and returning books.

1. Borrow a book
2. View borrowed books
3. Check in a returned book

## System components

### 🌐 Web Applications (Angular)

1. `🌐 PublicWeb`: Public-facing website for catalog browsing and member registration.
2. `🌐 MemberPortal`: Member interface for account management and book borrowing
3. `🌐 LibrarianDashboard`: Administrative interface for librarians

### 🧑‍💼 API Services (NestJs)

1. `🧑‍💼 AuthAPI`: Handles authentication and authorization
2. `🧑‍💼 CatalogAPI`: Manages book catalog operations
3. `🧑‍💼 MemberAPI`: Handles member profile and borrowing operations
4. `🧑‍💼 AdminAPI`: Provides administrative functions for librarians

### 📇 Databases (Postgres and MongoDB)

1. `📇 LibraryDB`: Main database storing books, members, and borrowing records
2. `📇 AuthDB`: Stores user authentication and authorization data

### 👽 External Services

1. `👽 EmailService`: For sending notifications and alerts

## Domain Entities

1. `User`: Base entity for all system users. Contains common information such as login credentials and contact details.

2. `Member`: Specialization of User. Represents registered library members who can borrow books.

3. `Librarian`: Specialization of User. Represents library staff with administrative privileges.

4. `Book`: Represents a book in the library catalog.

5. `BookCopy`: Represents a physical copy of a book that can be borrowed.

6. `Borrowing`: Represents the act of a member borrowing a book copy.

7. `Hold`: Represents a member's request to borrow a book that is currently unavailable.
