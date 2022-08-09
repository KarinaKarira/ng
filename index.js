const submitGuess = document.querySelector('.guessSubmit')
const txtBox = document.querySelector('#guessField')
let randomNo //this is because we want to define the variables at the top otherwise we could have defined it at the end of funtion randomNumber
const lastGuesses=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')
const resultparas=document.querySelectorAll('.resultParas p')

function randomnNumber(){
    return Math.floor((Math.random())*100)+1;
}
//number to be checked
randomNo=randomnNumber();
console.log(randomNo)
let guessCount=1;
txtBox.focus()

submitGuess.addEventListener('click',()=>{
    if (guessCount===1){
            lastGuesses.textContent='Your last guesses:'
    }
    lastGuesses.textContent+=' '+txtBox.value
    checkGuess(txtBox.value)
    guessCount+=1 //phle guess ko process karo phir increase the count by 1
    txtBox.value=''
    txtBox.focus()
    }
)
function checkGuess(value){
    if (guessCount<=10){
        if (value==randomNo){
            // lastResult.textContent=''
            lastResult.textContent='Congratulations!!'
            lastResult.style.backgroundColor='green'
            lowOrHigh.textContent=''
            breakGame()
        }
        else if(value>randomNo){
            lowOrHigh.textContent='Too high'
            lastResult.style.backgroundColor='red'
            lastResult.textContent='wrongg'
        }
        else{
            lowOrHigh.textContent='too low'
            lastResult.style.backgroundColor='yellow'
            lastResult.textContent='wrongg'
        }
    }
    else{
        breakGame()
    }
}
function breakGame(){
    const resetButton=document.createElement('button')
    resetButton.textContent='start new game'
    document.body.append(resetButton)
    resetButton.classList.add('reset-button')
    resetButton.addEventListener('click',resetGame)
    txtBox.disabled=true;
    submitGuess.disabled=true;
}

function resetGame(){
console.log(resultparas)
for (para of resultparas){
    para.textContent=''
    para.style.backgroundColor='white'
}
    const rstBtn=document.querySelector('.reset-button')
    document.body.removeChild(rstBtn)
    txtBox.disabled=false;
    submitGuess.disabled=false;
    guessCount=1
    randomNo=randomnNumber();
    console.log(randomNo)
    txtBox.focus()
}

