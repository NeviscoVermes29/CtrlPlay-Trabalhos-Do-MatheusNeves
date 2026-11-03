const buttonColor = document.querySelector(".buttonColor");
const body = document.querySelector("body");
let changeColor = false;



buttonColor.addEventListener("click", () => {
    changeColor = !changeColor;

    if (changeColor) {
        body.style.backgroundColor = "#320b61"
    } else {
        body.style.backgroundColor = "#cf0bab"
    }
})