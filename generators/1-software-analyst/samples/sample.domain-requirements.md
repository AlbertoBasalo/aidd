# LibrarySystem: Domain Requirements

> Timestamp: 2024-08-20 10:30:00 UTC

LibrarySystem is a simple digital platform for managing a small local library. It handles book cataloging, member management, and borrowing processes. The system aims to digitize library operations, making it easier for librarians to manage the collection and for members to borrow books.

## Domains

0. `Authentication`: Manages user registration, login, and access control for librarians and members.
1. `Catalog Management`: Handles the addition, editing, and removal of books from the library catalog.
2. `Member Management`: Manages library member profiles and membership status.
3. `Borrowing`: Handles the process of checking out and returning books.

## Roles

- `Visitor`: An unauthenticated user browsing the library catalog.
- `Member`: A registered library member who can borrow books.
- `Librarian`: A staff member responsible for managing the library system.

## User Stories by Domain

### 0. Authentication
* As a `Visitor` I want to **register as a member** so that _I can borrow books_
* As a `Member` I want to **log in to my account** so that _I can access member features_
* As a `Librarian` I want to **log in to the system** so that _I can perform administrative tasks_

### 1. Catalog Management
* As a `Librarian` I want to **add a new book to the catalog** so that _members can see and borrow it_
* As a `Librarian` I want to **update book information** so that _the catalog stays accurate_
* As a `Visitor` I want to **search for books** so that _I can find what I'm looking for_

### 2. Member Management
* As a `Librarian` I want to **view member information** so that _I can assist them better_
* As a `Member` I want to **update my contact information** so that _the library can reach me if needed_

### 3. Borrowing
* As a `Member` I want to **borrow a book** so that _I can read it at home_
* As a `Member` I want to **view my borrowed books** so that _I know when to return them_
* As a `Librarian` I want to **check in a returned book** so that _it becomes available for others_

---

## 0. Authentication

The Authentication domain handles user access to the LibrarySystem. It manages the registration of new members, login processes for both members and librarians, and ensures that users can only access the parts of the system they're authorized to use.

### 0.1 As a Visitor, I want to register as a member, so that I can borrow books.

- Provide a registration form with fields for name, email, and password.
- Validate that the email is unique in the system.
- Encrypt the password before storing it.
- Create a new member account with default borrowing privileges.
- Send a welcome email to the new member.

### 0.2 As a Member, I want to log in to my account, so that I can access member features.

- Provide a login form with fields for email and password.
- Validate the credentials against stored member information.
- Create a session for the authenticated member.
- Redirect to the member dashboard upon successful login.

### 0.3 As a Librarian, I want to log in to the system, so that I can perform administrative tasks.

- Use the same login form as members.
- Validate the credentials against stored librarian information.
- Create a session for the authenticated librarian with elevated privileges.
- Redirect to the librarian dashboard upon successful login.

---

## 1. Catalog Management

The Catalog Management domain is responsible for maintaining the library's collection of books. It allows librarians to add new books, update existing information, and remove books from the catalog. It also provides search functionality for all users to find books in the collection.

### 1.1 As a Librarian, I want to add a new book to the catalog, so that members can see and borrow it.

- Provide a form to enter book details (title, author, ISBN, publication year, genre).
- Validate that the ISBN is unique in the system.
- Add the new book to the catalog database.
- Optionally allow upload of book cover image.

### 1.2 As a Librarian, I want to update book information, so that the catalog stays accurate.

- Allow search for a book by title, author, or ISBN.
- Display current book information in an editable form.
- Update the book record in the database with new information.
- Log the change in the system for auditing purposes.

### 1.3 As a Visitor, I want to search for books, so that I can find what I'm looking for.

- Provide a search bar on the main page.
- Allow searching by title, author, or genre.
- Display search results with basic book information.
- Provide pagination if there are many results.

---

## 2. Member Management

The Member Management domain handles the administration of library member accounts. It allows librarians to view and manage member information, and enables members to update their own details.

### 2.1 As a Librarian, I want to view member information, so that I can assist them better.

- Provide a search function to find members by name or ID.
- Display member details including contact information and borrowing history.
- Show current borrowed books and their due dates.

### 2.2 As a Member, I want to update my contact information, so that the library can reach me if needed.

- Provide a form for members to edit their contact details.
- Validate new email addresses to ensure they are unique.
- Update the member record in the database.
- Confirm the changes via email.

---

## 3. Borrowing

The Borrowing domain manages the process of checking out books to members and returning them to the library. It tracks which books are currently borrowed, their due dates, and handles the check-in process when books are returned.

### 3.1 As a Member, I want to borrow a book, so that I can read it at home.

- Allow members to select a book from the catalog for borrowing.
- Check if the book is available and if the member has not exceeded their borrowing limit.
- Create a new borrowing record with the current date and calculated return date.
- Update the book status to "borrowed" in the catalog.

### 3.2 As a Member, I want to view my borrowed books, so that I know when to return them.

- Display a list of currently borrowed books in the member's dashboard.
- Show the due date for each book.
- Provide an option to request a renewal if available.

### 3.3 As a Librarian, I want to check in a returned book, so that it becomes available for others.

- Provide a function to scan or enter the book's ID.
- Update the borrowing record to mark the book as returned.
- Change the book's status back to "available" in the catalog.
- Calculate and apply any late fees if the book is overdue.

