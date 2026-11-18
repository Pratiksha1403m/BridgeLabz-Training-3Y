const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

addProductBtn.addEventListener("click", () => {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Enter product name");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "productName";
    span.textContent = productName;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    li.append(span, editBtn, deleteBtn);
    productList.appendChild(li);

    productInput.value = "";
});


productList.addEventListener("click", (event) => {

    const li = event.target.closest("li");

    if (!li) return;

    
    if (event.target.classList.contains("deleteBtn")) {
        li.remove();
    }

  
    if (event.target.classList.contains("editBtn")) {

        const span = li.querySelector(".productName");

        if (li.querySelector("input")) return;

        const input = document.createElement("input");
        input.value = span.textContent;

        span.replaceWith(input);
        input.focus();

        function saveEdit() {

            if (!input.parentNode) return;

            const newSpan = document.createElement("span");
            newSpan.className = "productName";
            newSpan.textContent = input.value.trim() || "Unnamed Product";

            input.replaceWith(newSpan);
        }

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                saveEdit();
            }
        });

        document.addEventListener("click", function outsideClick(e) {

            if (!li.contains(e.target)) {
                saveEdit();
                document.removeEventListener("click", outsideClick);
            }

        });
    }
});