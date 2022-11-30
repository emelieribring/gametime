let hero = document.getElementById("hero");
let game = document.getElementById("game");
let floor = document.getElementById("floor");
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let l = canvas.getContext('2d');
 

    // x and y are the coordinates of the circle
    // vx and vy are the respective speeds
    var x = Math.floor(Math.random() * innerWidth);
    var y = Math.floor(Math.random() * innerHeight);
    var vx = Math.floor(Math.random() * 2);
    var vy = Math.floor(Math.random() * 4);
    var radius = 20;
 
    move();
   
    // This function will do the animation
    function move() {
        requestAnimationFrame(move);
 
        // It clears the specified pixels within
        // the given rectangle
        l.clearRect(0, 0, innerWidth, innerHeight);
 
        // Creating a circle
        l.beginPath();
        l.strokeStyle = "black";
        l.arc(x, y, radius, 0, Math.PI * 2, false);
        l.stroke();
 
        // Conditions so that the ball bounces
        // from the edges
        if (radius + x > innerWidth)
            vx = 0 - vx;
 
        if (x - radius < 0)
            vx = 0 - vx;
 
        if (y + radius > innerHeight)
            vy = 0 - vy;
 
        if (y - radius < 0)
            vy = 0 - vy;
 
        x = x + vx;
        y = y + vy;
 
    }
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

let enemyId = 0;

/*function createEnemy() {
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
        if (y>420) gravity =- gravity;
            gravity -= 1;
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
*/

function lose () {setTimeout(() => { clearInterval(move); alert('Game Over!') 
    }, 30000);

}
lose ();
