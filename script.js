let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green
// 1 = red
// 2 = yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red  = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


// Create random order for colors
let randomOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightUpColor(elementColor, Number(i) + 1);
    }
}


// Light up next color
let lightUpColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}


// Check the clicked buttons
let checkColorOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Score: ${score}\n Great! Next Level!`);
        nextLevel();
    }
}


// User click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkColorOrder();
    }, 250);
}


// Returning color
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}


// Next Level
let nextLevel = () => {
    score++;
    randomOrder();
}


//Game over
let lose = () => {
    alert(`Score: ${score}!\nYou lost! Click OK to restart the game!`);
    order = [];
    clickedOrder = [];

    play();
}


// Play game
let play = () => {
    alert('Welcome to Genius!');
    score = 0;

    nextLevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


play();
