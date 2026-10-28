
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        if (
            !employee ||
            !("name" in employee) ||
            !("salary" in employee) ||
            !("years" in employee)
        ) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Invalid salary or years");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalPay = salary + bonus;

        console.log(
            `${employee.name}: Salary = ₹${salary}, ` +
            `Experience = ${years} years, ` +
            `Bonus = ₹${bonus.toFixed(2)}, ` +
            `Total = ₹${totalPay.toFixed(2)}`
        );
    } catch (error) {
        console.log("Employee error:", error.message);
    }
}

