const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

const tableRows = studentTable.querySelectorAll("tbody tr");


searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleRows = 0;

    tableRows.forEach(row => {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";
            visibleRows++;

        } else {

            row.style.display = "none";

        }

    });

   
    if (visibleRows === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});