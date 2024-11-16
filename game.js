function playGame(playerMove){
            const computerMove=ComputerMove();
            let result='';
            if(playerMove === 'rock'){
            if (computerMove === 'rock') {
                result='tied';
            } else if(computerMove === 'paper'){
                result='lost';
            } else if(computerMove === 'scissor'){
                result='won';
            }
        }else if(playerMove === 'paper'){
            if (computerMove === 'paper') {
                result='tied';
            } else if(computerMove === 'scissor'){
                result='lost';
            } else if(computerMove === 'rock'){
                result='won';
            }
        }
        else if(playerMove === 'scissor'){
            if (computerMove === 'paper') {
                result='won';
            } else if(computerMove === 'scissor'){
                result='tied';
            } else if(computerMove === 'rock'){
                result='lost';
            }
        }
            alert(`you picked ${playerMove} and computer pick is ${computerMove}, you ${result}`);
        }

        function ComputerMove() {
           let randomNumber=Math.random();
           let ComputerMove='';
           if (randomNumber>0 && randomNumber<1/3) {
            ComputerMove='rock';
            
           } else if(randomNumber > 1/3 && randomNumber<2/3) {
            ComputerMove='paper';
           } else if(randomNumber>2/3 && randomNumber <1){
            ComputerMove='scissor';
           }
           return ComputerMove;
        }
