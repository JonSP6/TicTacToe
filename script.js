// //Selects the boxes of the gameBoard and lists them in an Array
const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("playText");
const restartBtn = document.querySelectorAll("#restartBtn")[0];

const spaces = [];
const O_TEXT = "0";
const X_TEXT = "X";
let currentPlayer = O_TEXT;
console.log(boxes);

//draw's style border for our gameBoard.
//My css using id's is simpler.
//Add's an click eventListener for each box
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
    //When a div/box is clicked then callback method boxClicked is executed
    val.addEventListener("click", boxClicked, "");
  });
};

// e is the event passed into callback method boxClicked
const boxClicked = (e) => {
  //id = the id of the element clicked
  const id = e.target.id;
  //   console.log(id);
  //if spaces[id] is null then this condition returns false so we use the NOT ! operator to inverse it.
  //Therefore if spaces[id] is null then we make it return true so that we can set our currentPlayer to that space.
  //FIXME: my way with nullish coalescing
  // if (spaces[id] ?? true) {
  //   spaces[id] = currentPlayer;
  //   console.log('test nullish coalescing')
  // }
  //if spaces[id] is null then this condition returns false so we use the NOT ! operator to inverse it.
  //Therefore if spaces[id] is null then we make it return true so that we can set our currentPlayer to that space.
  if (!spaces[id]) {
    //We'll update the item in the spaces Array to currentPlayer
    spaces[id] = currentPlayer;
    console.log(spaces[id]);
    //Then we'll set the actual box (e.target) innerText to the currentPlayer (which is O or X)
    e.target.innerText = currentPlayer;

    //if a player has won then set the h1#playText to 'currentPlayer has won!'
    if (playerHasWon()) {
      playText.innerText = `${currentPlayer} has won!`;
      return;
    }

    //If currentPlayer is O_TEXT then we set currentPlayer to be X_TEXT. So basically just flipping it.
    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
  }
};


const playerHasWon = () => {
  console.log(spaces[0]);

  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top.`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the left.`);
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonally.`);
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the right.`);
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom.`);
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins vertically in the middle.`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins horizontally in the middle.`);
      return true;
    }
  }
};


const restart = () => {
  spaces.forEach((val, ind, arr) => {
    arr[ind] = null;
  })

  boxes.forEach((val, ind, arr) => {
    val.innerText = '';
  })

  playText.innerText = `Let's Play!`

  currentPlayer = O_TEXT;
}


restartBtn.addEventListener('click', restart, '');


restart();
drawBoard();

// //TODO: LAST LEFT OFF 19:20

