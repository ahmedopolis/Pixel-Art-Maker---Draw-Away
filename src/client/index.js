import { makeGrid } from "./js/designs";
import { mainHeadingRandomColorEdit } from "./js/designs";

import "./styles/styles.scss";

// Function to append the 'makeGrid' function at after load.
function loadStarter() {
  if (document.readyState === "complete") {
    window.addEventListener("load", makeGrid);
    mainHeadingRandomColorEdit();
  } else {
    window.addEventListener("load", makeGrid);
    mainHeadingRandomColorEdit();
    return () => window.removeEventListener("load", makeGrid);
  }
}

loadStarter();
