

// console.log("object"); 

var ball = document.querySelector('.ball');
var cont = document.querySelector('.container')


ball.addEventListener('mouseover', function () {
    console.log("mouse over")
    let width = Math.floor(Math.random() * (cont.offsetWidth) - ball.offsetWidth);
    let height = Math.floor(Math.random() * (cont.offsetHeight) - ball.offsetHeight);
    // console.log(cont.offsetWidth);
    // console.log(cont.offsetHeight);

    if (width < 0) {
        width = 0;
    }
    if (height < 0) {
        height = 0;
    }
    ball.style.top = height + "px";
    ball.style.left = width + "px";

    console.log(width, "widht");
    console.log(height, "height")

})