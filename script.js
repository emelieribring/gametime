let hero = document.getElementById("hero");
let game = document.getElementById("game");
let floor = document.getElementById("floor");
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let l = canvas.getContext('2d');
 

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
        case "ArrowLeft":
            console.log("vi går ner");
            left -= 10;
            hero.style.left = left + "px"
        break;
    }
})


//let enemy = document.getElementById("enemy");
//let y = 1;
//let gravity = -10;
//let wit

/*let move = setInterval(function(){

    if (y>620) gravity = -gravity;
    gravity -= 1;
    y -= gravity;
    enemy.style.top = (y) + 'px';
},30)*/


let enemyId = 0;

function createEnemy() {
    enemyId++
    
    let enemy = document.createElement("div");
    enemy.classList = "enemy";
    let enemyTop = Math.round(Math.round(Math.random() * 500)/10)*10;
    let enemyBottom = 0;
    console.log(enemyBottom);
    // Math.round(Math.floor(Math.random() * (500 - 1)/10)*10)
    enemy.style.left = Math.round(Math.round(Math.random() * 1000)/10)*10 + "px";

    enemy.style.top = enemyTop + "px";
    enemy.style.bottom = enemyBottom + "px";
    enemy.id = enemyId;
    let y = 1;
    let gravity =+1;


    let move = setInterval(() => {
        //enemyTop += 5;
        enemy.style.top = (y) + "px";
        if (y>600) gravity =- gravity;
            gravity -= 10;
            y -= gravity;
       

        if (enemyBottom > bottom && enemyBottom < bottom + 150 && enemyTop === top) {
            console.log("HIT");

            let dead = setInterval(() => {
                hero.style.backgroundColor = "red";

                let resurect = setInterval(() => {
                    hero.style.backgroundColor = "purple"
                    clearInterval(dead)
                }, 100)

            }, 100)
            
        
        }

        if (enemyTop <= 0) {
            clearInterval(move);
            enemy.remove();
            createEnemy();
        }

    }, 50)

    game.appendChild(enemy);
}

createEnemy();
if ( enemyId > 600){
    createEnemy();
} 