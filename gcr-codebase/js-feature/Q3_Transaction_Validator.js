
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class TransactionValidationError extends Error {
    constructor(type, message) {
        super(message);
        this.name = "TransactionValidationError";
        this.type = type;
    }
}

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    // Set a breakpoint here to inspect transaction and index.
    try {
        if (transaction === null || transaction === undefined) {
            throw new TransactionValidationError(
                "NULL_ENTRY", "Transaction is null"
            );
        }

        if (transaction.id === undefined || transaction.id === null) {
            throw new TransactionValidationError(
                "MISSING_ID", "Transaction ID is missing"
            );
        }

        if (transaction.amount === undefined || transaction.amount === null) {
            throw new TransactionValidationError(
                "MISSING_AMOUNT", "Transaction amount is missing"
            );
        }

        if (typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)) {
            throw new TransactionValidationError(
                "INVALID_AMOUNT", "Amount must be a valid number"
            );
        }

        if (transaction.amount < 0) {
            throw new TransactionValidationError(
                "NEGATIVE_AMOUNT", "Amount cannot be negative"
            );
        }

        validTransactions.push(transaction);
        console.log("Valid transaction:", transaction);
    } catch (error) {
        invalidTransactions.push({
            transaction,
            type: error.type || "ERROR",
            message: error.message
        });

        console.log(`Transaction ${index + 1} failed: ${error.message}`);
    }
}

console.log("\n=== Transaction Report ===");
console.log("Valid:", validTransactions);
console.log("Invalid:", invalidTransactions);
console.log("Successful count:", validTransactions.length);
console.log("Failed count:", invalidTransactions.length);


