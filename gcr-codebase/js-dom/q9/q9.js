const validationForm = document.getElementById("validationForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

function validateForm() {

    let isValid = true;

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";
        isValid = false;

    } else {

        nameError.textContent = "";

    }

    if (
        emailInput.value.trim() === "" ||
        !emailInput.value.includes("@")
    ) {

        emailError.textContent = "Email must contain @";
        isValid = false;

    } else {

        emailError.textContent = "";

    }

    if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters";

        isValid = false;

    } else {

        passwordError.textContent = "";

    }

    return isValid;
}

validationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (validateForm()) {

        successMessage.textContent =
            "Form Submitted Successfully";

        validationForm.reset();

    } else {

        successMessage.textContent = "";

    }

});

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);