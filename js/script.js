const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("super-mario");
    
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);    
};

const loopGame = setInterval(() => {
    pipe.getElementsByClassName.animation = "none";
    pipe.getElementsByClassName.left = `${pipePosition}px`;

    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`;

    
})

document.addEventListener("keydown", jump);
