
import './styles/main.scss';

const field = document.getElementById('game-field');

const context = field.getContext('2d');


let currentX = 10;
let currentY = 10;
const step = 5;
const interval = setInterval(() => {
    context.clearRect(0, 0, field.width, field.height);
    context.beginPath();
    context.arc(currentX, currentY, 2, 0 , 2 * Math.PI);
    context.fillStyle = '#ccc';
    context.fill();
    currentX += step;
    if (currentX >= field.width) {
        clearInterval(interval);
    }
}, 50);


