const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const summary = document.getElementById("summary");

const steps = [step1, step2, step3];

let currentStep = 0;


function showStep(index) {

    steps.forEach((step, i) => {
        step.style.display = i === index ? "block" : "none";
    });

    backBtn.style.display = index === 0 ? "none" : "inline";

    nextBtn.textContent =
        index === 2 ? "Submit" : "Next";
}


function validateStep() {

    if (currentStep === 0) {
        return nameInput.value.trim() !== "";
    }

    if (currentStep === 1) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    }

    if (currentStep === 2) {
        return passwordInput.value.length >= 6;
    }

    return false;
}


nextBtn.addEventListener("click", () => {

    if (!validateStep()) {
        alert("Please enter valid information");
        return;
    }

    if (currentStep < 2) {

        currentStep++;
        showStep(currentStep);

    } else {


        steps.forEach(step => step.style.display = "none");

        nextBtn.style.display = "none";
        backBtn.style.display = "none";

        summary.style.display = "block";

        summary.innerHTML = `
            <h2>Form Completed!</h2>
            <p>Name: ${nameInput.value}</p>
            <p>Email: ${emailInput.value}</p>
            <p>Password: ${"*".repeat(passwordInput.value.length)}</p>
        `;
    }

});


backBtn.addEventListener("click", () => {

    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }

});

showStep(currentStep);