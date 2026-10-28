
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
    
        const parsed = JSON.parse(rawData[index]);

        const missingKeys = [];

        if (!parsed.user) {
            missingKeys.push("user");
        }

        if (parsed.age === undefined || parsed.age === null ||
            parsed.age === "") {
            missingKeys.push("age");
        }

        if (missingKeys.length > 0) {
            const message = `Missing keys: ${missingKeys.join(", ")}`;

            errors.push({
                line: lineNumber,
                type: "MISSING_KEYS",
                message
            });

            console.log(`Line ${lineNumber}: ${message}`);
            continue;
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age) || age < 0) {
            errors.push({
                line: lineNumber,
                type: "INVALID_AGE",
                message: "Age must be a valid non-negative number"
            });

            console.log(`Line ${lineNumber}: Invalid age`);
            continue;
        }

        const user = { ...parsed, age };
        cleanData.push(user);

        if (age < 18) {
            under18Users.push(user);
        }

        console.log(`Line ${lineNumber}: Valid JSON for ${user.user}`);
    } catch (error) {
        errors.push({
            line: lineNumber,
            type: "INVALID_JSON",
            message: error.message
        });

        console.log(`Line ${lineNumber}: Invalid JSON`);
    }
}

console.log("\n=== JSON Audit Report ===");
console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Under-18 users:", under18Users);
console.log("Valid count:", cleanData.length);
console.log("Error count:", errors.length);

