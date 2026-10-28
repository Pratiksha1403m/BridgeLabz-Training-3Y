
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidNumericData = [];

for (let index = 0; index < apiData.length; index++) {
    const value = apiData[index];

    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);
.
    const whitespaceOnly =
        typeof value === "string" && value.trim() === "";

    const isValidNumber =
        !Number.isNaN(numberValue) && !whitespaceOnly;

    console.log(`\nItem ${index + 1}`);
    console.log("Original:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    if (isValidNumber) {
        validNumericData.push(numberValue);
        console.log("Status: VALID");
    } else {
        invalidNumericData.push(value);
        console.log("Status: INVALID");
    }
}

console.log("\n=== Final Report ===");
console.log("Valid numeric data:", validNumericData);
console.log("Invalid data:", invalidNumericData);
console.log("Valid count:", validNumericData.length);
console.log("Invalid count:", invalidNumericData.length);

