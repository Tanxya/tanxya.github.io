// Variables
let cel = document.getElementById("celsius");
let fah = document.getElementById("fahrenheit");
let convert = document.querySelector(".btn");


// EventListener to button
convert.addEventListener("click", () => {
    let inFah = (parseFloat(cel.value) * 9) / 5 + 32;
    fah.value = inFah;
});