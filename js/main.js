// // ----- constants ----- //
// const board = document.querySelector('.board');
// const score = createEle(board, 'div', 'Score:', 'score');
// const boardSize = createEle(board, 'div', '', 'boardSize');
// const startGameBtn = document.getElementById('startGameBtn');
// const gameSizeXInput = document.getElementById('gameSizeX');
// const gameSizeYInput = document.getElementById('gameSizeY');
// const restartGame = document.getElementById('gameRestartBtn')

// // ----- cache elements -----//

// let originalGameSize = { x: 0, y: 0 };
// originalGameSize = { ...gameSize };

// function createEle(parent, eleType, html, eleClass) {
//     const ele = document.createElement(eleType);
//     ele.innerHTML = html;
//     ele.classList.add(eleClass);
//     return parent.appendChild(ele);
//   }

// // ----- functions ----- //
// function startGame() {
//     // Retrieve the gameSize from input fields
//     const gameSizeX = parseInt(gameSizeXInput.value);
//     const gameSizeY = parseInt(gameSizeYInput.value);
//     const gameSize = { x: gameSizeX, y: gameSizeY };
  
//     // Store the original game size for restart
//     originalGameSize = { ...gameSize };
  
//     // Disable the input fields and the button
//     gameSizeXInput.disabled = true;
//     gameSizeYInput.disabled = true;
//     startGameBtn.disabled = true;
  
//     // Clear the boardSize container
//     boardSize.innerHTML = '';
  
//     // Call createBoard() with the updated gameSize
//     createBoard(gameSize);
//   }
// function createBoard(gameSize) {
//   const totalSquares = gameSize.x * gameSize.y;
//   for (let i = 0; i < totalSquares; i++) {
//     const temp = createEle(boardSize, 'div', '', 'box');
//     if (i % 2) {
//       temp.style.backgroundColor = '#5c5757';
//     } else {
//       temp.style.backgroundColor = '#62929a';
//       temp.style.color = 'black';

//       const piece = createEle(temp, 'div', '', 'piece');
//       if (i < totalSquares / 2 - gameSize.x) {
//         piece.classList.add('white');
//       } else if (i >= totalSquares / 2 + gameSize.x) {
//         piece.classList.add('black');
//       }
//     }
//   }
//   boardSize.style.setProperty(`grid-template-columns`, `repeat(${gameSize.x},1fr)`);
// }



//   function gameRestartBtn(){
//         // Enable the input fields and the button
//         gameSizeXInput.disabled = false;
//         gameSizeYInput.disabled = false;
//         startGameBtn.disabled = false;
      
//         // Reset the input field values
//         gameSizeXInput.value = originalGameSize.x;
//         gameSizeYInput.value = originalGameSize.y;
      
//         // Clear the boardSize container
//         boardSize.innerHTML = '';
//       }


// // ----- event listeners ----- //
// startGameBtn.addEventListener('click', startGame);
// startGameBtn.addEventListener('click', restartGame);

// variables
const board = document.querySelector('.board');
const score = createEle(board, 'div', 'Score:', 'score');
const boardSize = createEle(board, 'div', '', 'boardSize');
const startGameBtn = document.getElementById('startGameBtn');
const gameSizeX = document.getElementById('gameSizeSelectX');
const gameSizeY = document.getElementById('gameSizeSelectY');
const restartBtn = document.getElementById("gameRestartBtn");

// const board = document.querySelector('.board');
// const score = createEle(board, 'div', 'Score:', 'score');
// const boardSize = createEle(board, 'div', '', 'boardSize');
// const startGameBtn = document.getElementById('startGameBtn');
// const gameSizeSelectX = document.getElementById('gameSizeSelectX');
// const gameSizeSelectY = document.getElementById('gameSizeSelectY');
// const restartBtn = document.getElementById('gameRestartBtn');


// Add event listeners to the buttons
startGameBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

// Global variables to store the original game size
let originalGameSize = { x: 0, y: 0 };

// Function to start the game and create the board
function startGame() {
  // Retrieve the gameSize from input fields
  const gameSizeX = parseInt(gameSizeSelectX.value);
  const gameSizeY = parseInt(gameSizeSelectY.value);
  const gameSize = { x: gameSizeX, y: gameSizeY };

  // Store the original game size for restart
  originalGameSize = { ...gameSize };

  // Disable the input fields and the button
  gameSizeSelectX.disabled = true;
  gameSizeSelectY.disabled = true;
  startGameBtn.disabled = true;

  // Clear the boardSize container
  boardSize.innerHTML = '';

  // Call createBoard() with the updated gameSize
  createBoard(gameSize);
}

// Function to restart the game
function restartGame() {
  // Enable the input fields and the button
  gameSizeSelectX.disabled = false;
  gameSizeSelectY.disabled = false;
  startGameBtn.disabled = false;

  // Reset the input field values
  gameSizeSelectX.value = originalGameSize.x;
  gameSizeSelectY.value = originalGameSize.y;

  // Clear the boardSize container
  boardSize.innerHTML = '';
}

// Function to create the board
function createBoard(gameSize) {
  const totalSquares = gameSize.x * gameSize.y;
  for (let i = 0; i < totalSquares; i++) {
    const temp = createEle(boardSize, 'div', '', 'box');
    if (i % 2) {
      temp.style.backgroundColor = '#5c5757';
    } else {
      temp.style.backgroundColor = '#62929a';
      temp.style.color = 'black';

      const piece = createEle(temp, 'div', '', 'piece');
      if (i < totalSquares / 2 - gameSize.x) {
        piece.classList.add('white');
      } else if (i >= totalSquares / 2 + gameSize.x) {
        piece.classList.add('black');
      }
    }
  }
  boardSize.style.setProperty(`grid-template-columns`, `repeat(${gameSize.x},1fr)`);
}

// cache elements
function createEle(parent, eleType, html, eleClass) {
  const ele = document.createElement(eleType);
  ele.innerHTML = html;
  ele.classList.add(eleClass);
  return parent.appendChild(ele);
}