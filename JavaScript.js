// function for random output is this
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

// this is the function for the result of the match between the coputer and me 

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  console.log(computerMove);

  let result = "";

  if (playerMove === "Scissors") {

    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }

  } else if(playerMove === "Paper") {

    if (computerMove === 'Rock') {
        result = 'You win.';
    }else if ( computerMove === 'Paper') {
        result ='Tie.';
    }else if ( computerMove === 'Scissors') {
        result = 'You lose.';
    }
  } else if(playerMove === "Rock") {
    
    if (computerMove === 'Rock') {
        result = 'Tie.';
    }else if ( computerMove === 'Paper') {
        result ='You lose.';
    }else if ( computerMove === 'Scissors') {
        result = 'You win.';
    }
  }

  console.log(result);
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);

}

