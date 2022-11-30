let hero = document.getElementById("hero");
let game = document.getElementById("game");

let bottom = 0;
let left = 30;



document.addEventListener("keydown", (e) => {
    console.log ("e", e.key);

    switch (e.key) {
        case "d":
        case "ArrowRight":
            console.log("vi går uppåt");
            left += 10;
            hero.style.left = left + "px"
        break;
        case "a":
        case "ArrowLeft":
            console.log("vi går vänster");
            left -= 10;
            hero.style.left = left + "px"
        break;
    }
})


let enemy1 = document.getElementById("enemy1");
let enemy2 = document.getElementById("enemy2");
let enemy3 = document.getElementById("enemy3");
let enemy4 = document.getElementById("enemy4");
let enemy5 = document.getElementById("enemy5");
let enemy6 = document.getElementById("enemy6");
let enemy7 = document.getElementById("enemy7");

let y = 1;
let gravity = 1;
let wit


let move = setInterval(function(){

    if (y>420) gravity = -gravity;
    gravity += 0.55;
    y += gravity;
    
    enemy1.style.top = (y) + 'px';
    enemy2.style.top = (y) + 'px';
    enemy3.style.top = (y) + 'px';
    enemy4.style.top = (y) + 'px';
    enemy5.style.top = (y) + 'px';
    enemy6.style.top = (y) + 'px';
    enemy7.style.top = (y) + 'px';

    
},30)


setTimeout(() => { clearInterval(move); alert('Game Over!'); }, 30000);

function winGame (){
    if (hero.style.left > enemy1.style.left) {
        alert('You win!');
      }
}


