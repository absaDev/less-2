const items = document.querySelectorAll('.box .item');

for(let i = 0; i < items.length; i++){
    items[i].addEventListener('mouseenter', randomColor);
}

function randomColor() {
    const colors = ['#f00', '#ff0', '#0f0'];
    const num = Math.floor(Math.random() * colors.length);
    this.style.color = colors[num];
}
