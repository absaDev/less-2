const div = document.querySelector('.some');
const btn = document.querySelector('.btn-color');
const colors = ['#f00', '#ff0', '#0f0'];

function randomColor() {
    const num = Math.floor(Math.random() * colors.length);
    div.style.color = colors[num];
}

function btnAdd() {
    colors.push('#f90');
}

div.addEventListener('click', randomColor);
btn.addEventListener('click', btnAdd);
