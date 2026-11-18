const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxCharacters = 100;


textArea.addEventListener("input", () => {

    const remaining = maxCharacters - textArea.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "yellow";
    }
    else if (remaining === 0) {
        counter.style.color = "red";
    }
    else {
        counter.style.color = "black";
    }

});


textArea.addEventListener("keydown", (event) => {

    if (textArea.value.length >= maxCharacters) {

        const allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Tab"
        ];

        if (!allowedKeys.includes(event.key)) {
            event.preventDefault();
        }
    }

});

resetBtn.addEventListener("click", () => {

    textArea.value = "";
    counter.textContent = "100 characters remaining";
    counter.style.color = "black";

});