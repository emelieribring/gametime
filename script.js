let hero = document.getElementById("hero");
let game = document.getElementById("game");
let message = document.getElementById("message");

let bottom = 0;
let left = 30;

const mytimeout = setTimeout(() => { clearInterval(move); message.innerHTML = 'Game Over', button(); }, 10000);

document.addEventListener("keydown", (e) => {
    console.log ("e", e.key);

    switch (e.key) {
        case "d":
        case "ArrowRight":
            console.log("vi går upp");
            left += 30;
            hero.style.left = left + "px"
        break;
        case "a":
        case "ArrowDown":
            console.log("vi går ner");
            left -= 30;
            hero.style.left = left + "px"
        break;
    }
})


let enemy = document.getElementById("enemy");
let enemytvå = document.getElementById("enemy2")
let enemytre = document.getElementById("enemy3")
let enemyfyra = document.getElementById("enemy4")
let enemyfem = document.getElementById("enemy5")

function checkForCollisions() {
    setInterval(() => {
        let enemyPositions = enemy.getBoundingClientRect();
        let heroPositions = hero.getBoundingClientRect();
        let rightOverlap = (heroPositions.right >= enemyPositions.left && heroPositions.right <= enemyPositions.right);
        let bottomOverlap = (heroPositions.right >= enemyPositions.bottom);
        if (rightOverlap && bottomOverlap) {
            alert('YOU LOOSE');
            clearInterval(move); 
            message.innerHTML = 'Game Over';
            button();
        } 
    }, 10)
};

let goal = document.getElementById("goal");
goal.style.left = 1350 + 'px';

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
        
        let btn = document.createElement("BUTTON");
        let btnText = document.createTextNode("PLAY AGAIN?")
        btn.appendChild(btnText)
        btn.id = button;


        function button (){
            game.appendChild(btn);

            btn.addEventListener("click", () => {
                location.reload()
            })
        }
    