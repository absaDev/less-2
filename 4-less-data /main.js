const items = document.querySelectorAll('.box .item');

for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', randomColor);
}

function randomColor() {
    this.style.color = this.dataset.color;
}
