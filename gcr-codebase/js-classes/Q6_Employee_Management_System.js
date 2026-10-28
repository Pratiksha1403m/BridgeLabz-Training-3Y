"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus cannot be negative.");
        }

        const annualSalary = this.getAnnualSalary();

        return annualSalary + annualSalary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 45000),
    new Employee(2, "Sara", "HR", 38000),
    new Employee(3, "Kiran", "Finance", 52000),
    new Employee(4, "Neha", "IT", 48000),
    new Employee(5, "Ravi", "Sales", 40000)
];

console.log("Employee Annual Salaries:");

employees.forEach(employee => {
    console.log(
        `${employee.name} | ${employee.department} | ` +
        `Annual Salary: ₹${employee.getAnnualSalary()}`
    );

    console.log(
        `Salary with 10% bonus: ₹${employee.applyBonus(10)}`
    );
});

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("\nTotal Annual Company Payout:");
console.log(`₹${totalAnnualPayout}`);