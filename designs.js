// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}

// Additionnal Code
function bodyEdits() {
    document.body.style.backgroundImage = "url('pattern-background.jpg')";
}

function mainHeadingEdits() {
    window.addEventListener('load', loadRainbowMainHeadingText);
}

function loadRainbowMainHeadingText() {
    var instanceOfHeadingList = document.getElementsByTagName('h1');
    generateRandomRainbowMainHeading(instanceOfHeadingList[0]);
}

function generateRandomRainbowMainHeading(element) {
    var mainHeadingText = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < mainHeadingText.length; i++) {
        let charMainHeadingText = document.createElement("span");
        charMainHeadingText.style.color = randomColorString();
        charMainHeadingText.innerHTML = mainHeadingText[i];
        element.appendChild(charMainHeadingText);
    }

}

function randomColorString() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

function additionnalEdits() {
    bodyEdits();
    mainHeadingEdits();
}

additionnalEdits();