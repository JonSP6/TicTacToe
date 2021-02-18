const boxes = Array.from(document.getElementsByClassName("box"));

//draw's style border for our gameBoard
const drawBoard = () => {
  boxes.forEach((val, ind, arr) => {
    let styleString = "";
    if (ind < 3) {
      styleString += "border-bottom: 3px solid var(--purple);";
    }
    if (ind % 3 === 0) {
      styleString += "border-right: 3px solid var(--purple);";
    }
    if (ind % 3 === 2) {
      styleString += "border-left: 3px solid var(--purple);";
    }
    if (ind > 5) {
      styleString += "border-top: 3px solid var(--purple);";
    }
    val.style = styleString;
    val.addEventListener("click", boxClicked, "");
  });
};

const boxClicked = (e) => {
  console.log("clicked");
};

drawBoard();

//TODO: LAST LEFT OFF 15:11
