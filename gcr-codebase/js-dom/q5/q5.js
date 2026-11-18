const imageGallery = document.getElementById("imageGallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");


imageGallery.addEventListener("click", (event) => {

    if (event.target.tagName === "IMG") {

        modal.style.display = "flex";

        modalImage.src = event.target.src;
    }

});


modalImage.addEventListener("click", (event) => {

    event.stopPropagation();

});

modal.addEventListener("click", () => {

    modal.style.display = "none";

});