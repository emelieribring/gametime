let hero = document.getElementById("hero");
let game = document.getElementById("game");
let message = document.getElementById("message");
let h = document.getElementById("ballrun");

let bottom = 0;
let left = 30;

let startBtn = document.createElement("BUTTON");
let startBtnText = document.createTextNode("START");
startBtn.appendChild(startBtnText);
startBtn.setAttribute("id", "startbutton")
game.appendChild(startBtn);

let enemy = document.getElementById("enemy");
let enemytvå = document.getElementById("enemy2")
let enemytre = document.getElementById("enemy3")
let enemyfyra = document.getElementById("enemy4")
let enemyfem = document.getElementById("enemy5")

enemy.style.display = "none";
enemytvå.style.display = "none";
enemytre.style.display = "none";
enemyfyra.style.display = "none";
enemyfem.style.display = "none";

let btn = document.createElement("BUTTON");
        let btnText = document.createTextNode("PLAY AGAIN?")
        btn.appendChild(btnText)
        btn.setAttribute("id", "playagain")

        function button (){
            game.appendChild(btn);

            btn.addEventListener("click", () => {
                location.reload()
            })
        }

startBtn.addEventListener("click", () => {
    console.log("klick på knapp")
    game.removeChild(startBtn);
    move()
})


const mytimeout = setTimeout(() => { clearInterval(move); message.innerHTML = 'Game Over', button(); }, 30000);

document.addEventListener("keydown", (e) => {
    console.log ("e", e.key);

    switch (e.key) {
        case "d":
        case "ArrowRight":
            console.log("vi går höger");
            left += 40;
            hero.style.left = left + "px"
        break;
        case "a":
        case "ArrowLeft":
            console.log("vi går vänster");
            left -= 40;
            hero.style.left = left + "px"
        break;
    }
})


function checkForCollisions() {
    setInterval(() => {
        let enemyPositions = enemy.getBoundingClientRect();
        let enemytvåPositions = enemytvå.getBoundingClientRect();
        let enemytrePositions = enemytre.getBoundingClientRect();
        let enemyfyraPositions = enemyfyra.getBoundingClientRect();
        let enemyfemPositions = enemyfem.getBoundingClientRect();
        let heroPositions = hero.getBoundingClientRect();
        let rightOverlap = (heroPositions.right >= enemyPositions.left && heroPositions.right <= enemyPositions.right || heroPositions.right >= enemytvåPositions.left && heroPositions.right <= enemytvåPositions.right || heroPositions.right >= enemytrePositions.left && heroPositions.right <= enemytrePositions.right || heroPositions.right >= enemyfyraPositions.left && heroPositions.right <= enemyfyraPositions.right || heroPositions.right >= enemyfemPositions.left && heroPositions.right <= enemyfemPositions.right);

        let bottomOverlap = (heroPositions.top <= enemyPositions.bottom || heroPositions.top <= enemytvåPositions.bottom || heroPositions.top <= enemytrePositions.bottom || heroPositions.top <= enemyfyraPositions.bottom || heroPositions.top <= enemyfemPositions.bottom);

        if (rightOverlap && bottomOverlap) {
            message.innerHTML = "YOU LOOSE";
            button();
            h.style.display = "none";
            clearInterval(move); 
        } 
    }, 10)

};

let goal = document.getElementById("goal");
goal.style.left = 1350 + 'px';

function move(){

    enemy.style.display = "block";
    enemytvå.style.display = "block";
    enemytre.style.display = "block";
    enemyfyra.style.display = "block";
    enemyfem.style.display = "block";

let move = setInterval(function(){

    if (hero.style.left === 1350 + 'px') {
        message.innerHTML = 'YOU WIN';
        button();
        clearInterval(move);
        clearTimeout(mytimeout);
        return
      }
    } )
      
    
      checkForCollisions();

}        