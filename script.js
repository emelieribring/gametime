let hero = document.getElementById("hero");
let game = document.getElementById("game");
let message = document.getElementById("message");

let bottom = 0;
let left = 30;


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

let y = 1;
let gravity = 1;

let goal = document.getElementById("goal");
goal.style.left = 1350 + 'px';

let move = setInterval(function(){

    if (hero.style.left === 1350 + 'px') {
        message.innerHTML = 'YOU WIN';
        clearInterval(move)
      }

        if (y>410) gravity = -gravity;
        gravity += 1;
        y += gravity;
        enemy.style.top = (y) + 'px';

        
        enemytvå.style.top = (y) + 'px';
        enemytvå.style.left = 300 + 'px';

       
        enemytre.style.top = (y) + 'px';
        enemytre.style.left = 500 + 'px';

       
        enemyfyra.style.top = (y) + 'px';
        enemyfyra.style.left = 900 + 'px';

    
        enemyfem.style.top = (y) + 'px';
        enemyfem.style.left = 1200 + 'px';

        if (y > 500){
            clearInterval(move)
        }
    
        },30) 
    

        setTimeout(() => { clearInterval(move); alert('Game Over'); }, 30000);

        

        
