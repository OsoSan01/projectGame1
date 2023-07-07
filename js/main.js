// variables
const board=document.querySelector('.board')
const score = createEle(board,'div','Score:','score');
const boardSize = createEle(board,'div', '' , 'boardSize');
const gameSize = {x:5,y:4};

createBoard();

function createBoard(){
 const totalSquares = gameSize.x * gameSize.y;
 for(let i=0; i<totalSquares; i++){
    const temp = createEle(boardSize,'div',`${i+1}`, 'box');
    }
}

// const div = document.createElement('div');
// div.innerHTML = 'Checkers';
// div.classList.add('myClass');
// board.append(div);

// cache elements
function createEle(parent,eleType,html,eleClass){
    const ele = document.createElement(eleType);
    ele.innerHTML = html;
    ele.classList.add(eleClass);
   return parent.appendChild(ele);
}

//this function alouds to create a new element with a class and appended into one of the HTML areas.

// functions
