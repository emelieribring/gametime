let hero = document.getElementById("hero");
let game = document.getElementById("game");

let bottom = 0;
let left = 30;


document.addEventListener("keydown", (e) => {
    console.log ("e", e.key);

    switch (e.key) {
        case "d":
        case "ArrowRight":
            console.log("vi går upp");
            left += 10;
            hero.style.left = left + "px"
        break;
        case "a":
        case "ArrowDown":
            console.log("vi går ner");
            left -= 10;
            hero.style.left = left + "px"
        break;
    }
})


let enemy = document.getElementById("enemy");
let y = 1;
let gravity = 50;

let move = setInterval(function(){

        if (y>420) gravity = -gravity;
        gravity += 1;
        y += gravity;
        enemy.style.top = (y) + 'px';
        },30)
