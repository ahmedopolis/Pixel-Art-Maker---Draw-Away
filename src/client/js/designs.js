/**
 * @description This function builds the grid. The 'color' button is stored in a variable.
 * An event listener is added store and keep track of every color selected after every
 * click. A copy of the form from 'index.html' is copied and an event listener is added
 * to build the grid only upon user clicking the 'submit' button.
 */
function makeGrid() {
  const colorPickerElement = document.getElementById("colorPicker");
  let colorPickerElementValue = colorPickerElement.value;
  colorPickerElement.addEventListener("input", function () {
    colorPickerElementValue = colorPickerElement.value;
  });
  const submitForm = document.getElementById("sizePicker");
  submitForm.addEventListener("submit", buildGrid);
  function buildGrid(event) {
    event.preventDefault();
    const tableElement = document.getElementById("pixelCanvas");
    while (tableElement.hasChildNodes()) {
      tableElement.removeChild(tableElement.lastChild);
    }
    const tableHeightValue = document.getElementById("inputHeight").value;
    const tableWidthValue = document.getElementById("inputWidth").value;
    const fullGridDiv = document.createElement("div");
    for (let i = 1; i <= tableHeightValue; i++) {
      const tableRowInstance = document.createElement("tr");
      for (let j = 1; j <= tableWidthValue; j++) {
        const tableCellInstance = document.createElement("td");
        tableCellInstance.style.backgroundColor = "white";
        tableCellInstance.onclick = function () {
          tableCellInstance.style.backgroundColor = colorPickerElementValue;
        };
        tableRowInstance.appendChild(tableCellInstance);
      }
      fullGridDiv.appendChild(tableRowInstance);
    }
    tableElement.appendChild(fullGridDiv);
  }
}

/**
 * @description This function contains three other functions. The 'loadRainbowMainHeadingText'
 * function is run once the whole page is loaded. Only the first 'h1' is modified. There's also
 * one heading of 'h1' in 'index/html'. In the 'generateRandomRainbowMainHeading' function, the
 * inner html code of 'h1' is cleared. At every character of the first heading, each character's
 * color is changed at random using the 'randomColorString' function.
 */
function mainHeadingRandomColorEdit() {
  window.addEventListener("load", loadRainbowMainHeadingText);
  function loadRainbowMainHeadingText() {
    const instanceOfHeadingList = document.getElementsByTagName("h1");
    generateRandomRainbowMainHeading(instanceOfHeadingList[0]);
  }
  function generateRandomRainbowMainHeading(element) {
    let mainHeadingText = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < mainHeadingText.length; i++) {
      let charMainHeadingText = document.createElement("span");
      charMainHeadingText.style.color = randomColorString();
      charMainHeadingText.innerHTML = mainHeadingText[i];
      element.appendChild(charMainHeadingText);
    }
  }
  function randomColorString() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }
}

export { makeGrid, mainHeadingRandomColorEdit };
