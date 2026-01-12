// elements variables
let headingEl = document.getElementById("heading");
let inputEl = document.querySelector("#fullName");
let buttonEl = document.getElementById("btn");
let errorEl = document.getElementById("errorMessage");
let bodyEl = document.body;

buttonEl.addEventListener('click', () => {

    // name validation by regular expression,
    let regEx = /^[a-zA-Z]+$/;

    if (regEx.test(inputEl.value)) {
        errorEl.style.display = "none";

        // input value,
        let value = inputEl.value;

        // setting color values to the elements,
        headingEl.innerHTML = `Hello ${value}, Welcome to CyberDude Networks!`;
        inputEl.value = "";
    } else {
        errorEl.style.display = "block";
    }
});