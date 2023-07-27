
    const some = document.querySelector('.some');
    const other = document.querySelector('.other');
    const colors = ['#f00', '#ff0', '#0f0'];

    function randomColor() {
        const num = Math.floor(Math.random() * colors.length);
        this.style.color = colors[num];
    }

    some.addEventListener('click', randomColor);
    other.addEventListener('click', randomColor);
  