const button = document.querySelector("button");
const exibeClick = document.querySelector("span");
let click = 0;

console.log(click);

button.addEventListener("click", () => {
    click = click +1;
    console.log(click);
    exibeClick.textContent = `Robux Earned: ${click}`;

})