let hero = document.getElementById("hero");
let game = document.getElementById("game");
let enemy1 = document.getElementById("enemy1");
let enemy2 = document.getElementById("enemy2");
let enemy3 = document.getElementById("enemy3");
let enemy4 = document.getElementById("enemy4");
let enemy5 = document.getElementById("enemy5");
let enemy6 = document.getElementById("enemy6");
let enemy7 = document.getElementById("enemy7");




let bottom = 0;
let left = 30;


document.addEventListener("keydown", (e) => {
    console.log ("e", e.key);
    function checkOverlap(lineA, lineB) {
        return lineA.start >= lineB.start && lineA.start <= lineB.end || 
               lineA.end >= lineB.start && lineA.end <= lineB.end ||
               lineB.start >= lineA.start && lineB.start <= lineA.end || 
               lineB.end >= lineA.start && lineB.end <= lineA.end;
    }
    console.log(checkOverlap (hero, enemy1));
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





let y = 1;
let gravity = 1;
let wit


function move () { setInterval(function(){

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
}
move ();




//let allEnemy = {enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7};

/*function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}

if (isCollide(hero, enemy1));*/

function lose () {setTimeout(() => { clearInterval(move); //alert('Game Over!') 
location.reload(); }, 100000);
    
}
lose ();


function winGame (){
    if (hero.style.left > enemy1.style.left) {
        alert('You win!');
      }
}

