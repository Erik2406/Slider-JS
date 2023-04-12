let mainimg = document.querySelector('img');
let images = ['images/1.webp', 'images/2.jpg', 'images/3.webp'];
let num = 0;

function next() {
    num++;
    if (num >= images.length) {
        num = 0;
        mainimg.src = images[num];
    } else {
        mainimg.src = images[num];
    }
}

function back() {
    num--;
    if (num < 0) {
        num = images.length - 1;
        mainimg.src = images[num];
    } else {
        mainimg.src = images[num];
    }
}