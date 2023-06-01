// alert('Hi')

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const resText = document.querySelector('.result')
const _yourScore = document.querySelector('.yourScore')
const _compScore = document.querySelector('.compScore')
const btn = document.querySelector('.btn')
const _yourChoice = document.querySelector('.yourChoice')
const _cpuChoice = document.querySelector('.cpuChoice')
const _status = document.querySelector('.status')



const choices = ['rock', 'paper', 'scissors']


let yourScore = 0;
let compScore = 0; 

init();



rock.addEventListener('click', () => {
    // alert('Clicked Rock')
    getCpuChoice();
    gamePlay('rock');

})


paper.addEventListener('click', () => {
    // alert('Clicked Paper');
    getCpuChoice();
    gamePlay('paper');
})

scissors.addEventListener('click', () => {
    // alert('Clicked Scissors');
    getCpuChoice();
    gamePlay('scissors');
})



// const playerChoice = prompt('Rock, Paper or Scissors')
btn.addEventListener('click', init)


function init(){
    yourScore = 0;
    compScore = 0; 
    _yourScore.textContent = '0'; 
    _compScore.textContent = '0'; 
}


function getCpuChoice (){
    const s = ['rock', 'paper', 'scissors']
    const randNo =Math.floor(Math.random() * 3)
    return s[randNo]

}

function gamePlay(choice){
    const cpuChoice = getCpuChoice();
    switch(choice + cpuChoice){
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            losing();
            break;

        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            winning();
            break; 
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            tie();
            break;


        default: resText.textContent == 'Tie'
    }
    _yourChoice.textContent = choice
    _cpuChoice.textContent = cpuChoice
    // if((choice == 'rock' & cpuChoice == 'paper') | (choice == 'paper' & cpuChoice == 'scissors') | (choice == 'scissors' & cpuChoice == 'rock')){
    //     losing()
    // } if ((choice == 'rock' & cpuChoice == 'scissors') | (choice == 'paper' & cpuChoice == 'rock') | (choice == 'scissors' & cpuChoice == 'paper')){
    //     winning
    // }
}

function losing(){

    resText.textContent = 'You Lose!'; 
    compScore ++;
    _compScore.textContent = compScore; 
    _status.textContent = 'You Lose'
}

function winning(){
    resText.textContent = 'You win!'; 
    yourScore++;
    _yourScore.textContent = yourScore; 
    _status.textContent = 'You Win'

}

function tie(){
    resText.textContent = 'It is a tie'; 
    _status.textContent = 'Tie'

}