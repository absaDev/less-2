const items = document.querySelectorAll('.box .item');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', randomColorState);
}

function randomColorState() {
    this.classList.toggle('item-active');
    const color = this.classList.contains('item-active')
        ? this.dataset.color
        : 'inherit';
        this.style.color = color;
}

/*
    HTMLElement
        classList
            .add(classname)
            .remove(classname)
            .contains(classname)
            .taggle(classname)
*/
