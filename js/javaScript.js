
function createSquareElement(content, classes, w, h){
    const square = document.createElement('div');
    square.innerText = content;
    square.classList.add(classes,  "d-flex", "justify-content-center", "align-items-center", "fs-5", "p-3")
    square.style.width = `calc(100% / ${w})`
    square.style.height = `calc(100% / ${h})`
    square.addEventListener('click', function(){
        square.classList.toggle("click")
    })
    return square;
}

function getRandomNumber (numMin, numMax){
    const randomNumber = Math.floor(Math.random() * (numMin - numMax + 1) + numMin);
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

playButton.addEventListener('click', function(){
    let width = 10;
    let height = 10;
    const gridSelection = document.getElementById('grid-value').value;
    const bombNum =[];
    const gridNum =[];
    containerElement.innerHTML = ' ';
    console.log(bombNum)
    if(gridSelection == 65){
        width = 8;
        height = 8;
    }else if(gridSelection == 50){
        width = 7;
        height = 7;
    }
    for(let i = 1; i < gridSelection; i++){
        containerElement.appendChild(createSquareElement(i, 'square', width, height));
        gridNum.push(i);
    }
    console.log(gridNum);
    
    for(let i = 0; i < 16; i++){
        bombNum.push(randomBombGenerator(bombNum, 0, gridNum.length))
    }
    console.log(bombNum)
})

