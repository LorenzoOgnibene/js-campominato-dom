
function createSquareElement(content, classes, size){
    const square = document.createElement('div');
    square.innerText = content;
    square.classList.add(classes,  "d-flex", "justify-content-center", "align-items-center", "fs-5", "p-3")
    square.style.width = `calc(100% / ${size})`
    square.style.height = `calc(100% / ${size})`
   
    return square;
}

function getRandomNumber (numMin, numMax){
    const randomNumber = Math.floor(Math.random() * (numMax - numMin  + 1) + numMin);
    return randomNumber;
}

//legal note it's olny a virtual game
function randomBombGenerator(array, min, max){
    let isValid = false;
    let randomBomb;
    
    while (isValid === false){
        randomBomb = getRandomNumber(min, max);
        
        if(!array.includes(randomBomb)){
         isValid = true;
        }
    }

     return randomBomb;
}

const containerElement = document.querySelector('div.big-square');
const newSquare = createSquareElement();
const playButton = document.querySelector('button.btn');
const userPoint = document.getElementById('point');

playButton.addEventListener('click', function(){
    let point = 0;
    let size = 10;
    let gameOver = false;
    const gridSelection = document.getElementById('grid-value').value;
    const bombNum =[];
    containerElement.innerHTML = ' ';
    console.log(bombNum)
    if(gridSelection == 65){
        size = 8;
    }else if(gridSelection == 50){
        size = 7;
    }
    //bomb generetor
    for(let i = 0; i < 16; i++){
        bombNum.push(randomBombGenerator(bombNum, 0, gridSelection))
    }
    console.log(bombNum)
    //square generator
    for(let i = 1; i <= gridSelection; i++){
        const newSquareElement = createSquareElement(i, 'square', size, size);
        newSquareElement.addEventListener('click', function(){
            if(!gameOver){
                newSquareElement.classList.add("click");
                console.log(i);
                //check if user selection is a bomb
                if(bombNum.includes(i)){
                    alert('fermate');
                    newSquareElement.classList.add("loser")
                    point = 0;
                    gameOver = true;
                }else{
                    //count user point
                    point++;
                }
                userPoint.innerHTML =  `<h1> ${point} </h1>`
            }
        }, {once : true})
        containerElement.appendChild(newSquareElement);
    }
})

