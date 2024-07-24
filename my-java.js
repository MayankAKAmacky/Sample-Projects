/*
let chance = "";
let computerMove = "";
let result = "";
function random() {
  chance = Math.random();

  if (chance >= 0 && chance < 1 / 3) {
    computerMove = "Rock";
  } else if (chance >= 1 / 3 && chance < 2 / 3) {
    computerMove = "Paper";
  } else if (chance >= 2 / 3 && chance < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  }

  console.log(playerMove);
  console.log(computerMove);
  console.log(result);
}


console.log('Hello World!!')

let myArray = ['array item 1', 'array item 2']

if (myArray == '') {
 console.log('this array is empty')
}

else {
  console.log('this array is not empty')
}


*/


let myArray = [];

let input = [{
  name: 'mayank',
  date: '23-07-2024',
  age: 17
},
{
  name: 'jester',
  date: '23-07-2024',
  age: 20
},
{
  name: 'harry',
  date: '23-07-2024',
  age: 18
}
];

function addItem() {
  myArray.push(input);
  console.log(myArray);
  return input;
}

addItem();
console.log(myArray[0][0].name); // Access the name property of the first object in the nested array




