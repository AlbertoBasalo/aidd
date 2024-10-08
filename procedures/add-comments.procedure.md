# Add comments to the code

## Role

You are tasked with adding comments to a piece of code to make it more understandable for AI systems or human developers.
The code will be provided to you, and you should analyze it and add appropriate comments.

## Goal

- Make the code more understandable without changing its functionality.
- Your comments should provide insight into the code's purpose, logic, and any important considerations for future developers or AI systems working with this code.

## Process

To add comments to this code, follow these steps:

1. Analyze the code to understand its structure and functionality.
2. Identify public exported clases and functions.
3. Identify public methods in the classes.
4. Check any complex logic to understand it and add comments to explain it.
5. Follow the guidelines to add comments to the code.

### General guidelines:

- Focus on the "why" and "how" rather than just the "what"
- Use clear and concise language
- Explain any assumptions or limitations in the code

### Classes

- Use **JSDoc** comments for the class
- Explain the purpose of the class
- Use `@requires` for dependencies taken from constructor
- Use `@extends` or `@implements` for parent classes or interfaces

### Public methods or functions

- Use **JSDoc** comments for the method or function
- Explain the purpose of the method or function
- Use `@param` for params
- Use `@returns` for return values
- Use `@throws` for exceptions

### Private methods or functions

- Do not add external **JSDoc** comments to private functions or methods

### DTOs, types, interfaces

- Explain the purpose of the DTO, type or interface
- Use `@example` to add examples to the properties

> Examples:

```typescript
/**
 * Transaction type
 */
type Transaction = {
  /**
   * The amount of the transaction
   * @example 100
   */
  amount: number;
  /**
   * The type of the transaction
   * @example 'payment'
   */
  type: "payment" | "refund";
};

/**
 * Transactions class
 */
class Transactions {
  #transactions: Transaction[] = [];
  #balance: number = 0;

  /**
   * The balance of the transactions
   */
  get balance(): number {
    return this.#balance;
  }

  /**
   * Payment transaction
   * @param payment - The payment to pay
   * @returns The payment paid
   */
  pay(payment: Transaction): Transaction {
    this.#transactions.push(payment);
    this.#setBalance(payment);
    return payment;
  }

  /**
   * Refund transaction
   * @param refund - The refund to refund
   * @returns The refund refunded
   */
  refund(refund: Transaction): Transaction {
    this.#transactions.push(refund);
    this.#setBalance(refund);
    return refund;
  }

  #setBalance(transaction: Transaction): void {
    if (transaction.type === "payment") {
      this.balance += transaction.amount;
    } else {
      this.balance -= transaction.amount;
    }
  }
}
```

### Simple comments for complex logic

- Use simple lines comments to explain the purpose of the complex logic
- Explain how complex algorithms or logic work
- The meaning of important variables or data structures
- Any potential edge cases or error handling
- Encourage refactoring to improve readability

> Examples:

```typescript
/**
 * Calculates the factorial of a number
 * @param n - The number to calculate the factorial of
 * @returns The factorial of the number
 * @throws Will throw an error if the number is negative
 */
function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  if (n === 0) return 1;
  // recursive call to calculate the factorial
  return n * factorial(n - 1);
}
```

## Remarks:

- Your output should be the original code with your added comments.
- Make sure to preserve the original code's formatting and structure.
