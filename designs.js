// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
    var submitForm = document.getElementById('sizePicker');
    submitForm.addEventListener('submit', buildGrid);

    function buildGrid(event) {
        event.preventDefault();
    
        var tableElement = document.getElementById('pixelCanvas');
        while (tableElement.hasChildNodes()) {
            tableElement.removeChild(tableElement.lastChild);
        }
    
        var tableHeightValue = document.getElementById('inputHeight').value;
        var tableWidthValue = document.getElementById('inputWidth').value;
        const fullGridDiv = document.createElement('div');
    
        for (var i = 1; i <= tableHeightValue; i++) {
            const tableRowInstance = document.createElement('tr');
            for (var j = 1; j <= tableWidthValue; j++) {
                const tableCellInstance = document.createElement('td');
                tableCellInstance.style.background = "white";
                tableRowInstance.appendChild(tableCellInstance);
            }
            fullGridDiv.appendChild(tableRowInstance);
        }
    
        tableElement.appendChild(fullGridDiv);
    }

    var colorInputValue = document.getElementById('colorPicker').value;    
}




/**
 * Additional Code Starting Here.
 */

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
makeGrid();