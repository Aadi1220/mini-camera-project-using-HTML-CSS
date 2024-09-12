let gameSeq=[];
let userSeq =[];
let btns = ['yellow','red','purple','green'];
let score = 0;

let started = false;
let level = 0;
let h3 = document.querySelector('h3');


document.addEventListener('keypress',function () {
    if (started==false) {
        started = true;
        levelUp();
    }
});


let btn = document.querySelector('.btn')
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx= Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    btnFlash(randBtn);
}


function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },300)
}

function checkAns(idx) {
    
    if (userSeq[idx]==gameSeq[idx]) {
        if (userSeq.length==gameSeq.length) {
            
           setTimeout(levelUp,1000);
        }
        
    }
    else{
        if (level>score) {
            score = level;
        }
        document.querySelector('body').style.backgroundColor='red';
            setTimeout(function(){document.querySelector('body').style.backgroundColor='white'},250);
        h3.innerHTML =`Game Over! Your Score is<b>${level-1}<b>, <br>High Score = ${score-1} <br>Press any key start again.`;
        reset();
    }
    
}

function btnPress() {
    let btndiv = this;
    btnFlash(btndiv);
    userSeq.push(btndiv.getAttribute("id"));

    checkAns(userSeq.length-1);   
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
   btn.addEventListener("click",btnPress);
}
function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}