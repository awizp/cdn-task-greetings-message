// elements variables
let headingEl = document.getElementById("heading");
let inputEl = document.querySelector("#fullName");
let buttonEl = document.getElementById("btn");
let errorEl = document.getElementById("errorMessage");
let bodyEl = document.body;

const randomColorGenerator = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        // color value by multiplying random number with letters length,
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

buttonEl.addEventListener('click', () => {

    // name validation by regular expression,
    let regEx = /^[a-zA-Z]+$/;

    if (regEx.test(inputEl.value)) {
        errorEl.style.display = "none";

        // getting color value,
        const colorValue = randomColorGenerator();

        // setting uppercase to value,
        let value = inputEl.value.toLocaleUpperCase();

        // setting color values to the elements,
        headingEl.innerHTML = `Hello ${value}, Welcome to CyberDude Networks!`;
        headingEl.style.color = colorValue;
        bodyEl.style.background = colorValue;
        inputEl.value = "";
    } else {
        errorEl.style.display = "block";
    }
});