const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", (event) => {

    coordinates.textContent =
        `Client X: ${event.clientX} | Client Y: ${event.clientY}`;

});


mouseBox.addEventListener("dblclick", (event) => {

    const boxRectangle = mouseBox.getBoundingClientRect();

  
    const xPosition = event.clientX - boxRectangle.left;
    const yPosition = event.clientY - boxRectangle.top;

    const redDot = document.createElement("div");

    redDot.style.width = "10px";
    redDot.style.height = "10px";
    redDot.style.backgroundColor = "red";
    redDot.style.borderRadius = "50%";
    redDot.style.position = "absolute";

    redDot.style.left = `${xPosition}px`;
    redDot.style.top = `${yPosition}px`;

    mouseBox.appendChild(redDot);

});