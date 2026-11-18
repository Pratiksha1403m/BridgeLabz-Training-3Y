const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const dropdownContainer = document.getElementById("dropdownContainer");


dropdownButton.addEventListener("click", (event) => {

    event.stopPropagation();

    if (dropdownOptions.style.display === "block") {
        dropdownOptions.style.display = "none";
    } else {
        dropdownOptions.style.display = "block";
    }

});

dropdownOptions.addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {

        dropdownButton.textContent = event.target.textContent;

        dropdownOptions.style.display = "none";

    }

});

document.addEventListener("click", (event) => {

    if (!dropdownContainer.contains(event.target)) {

        dropdownOptions.style.display = "none";

    }

}, true);