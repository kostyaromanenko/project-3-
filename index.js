"use strict"

let box1 = document.querySelector('.box1');

box1.addEventListener('click', (e) =>{
    e.target.audio = new Audio(e.target.getAttribute('path')).play()

})

let box2 = document.querySelector('.box2');
box2.addEventListener('click', (e) => {
    e.target.audio = new Audio(e.target.getAttribute('path')).play()
})
const Ob = new Object();

let key_white_container = document.querySelectorAll('.key_white_container');

for(let i = 0; i < key_white_container.length; i++){
    Ob [key_white_container[i].getAttribute('data-note')] = key_white_container[i]; 
}


window.addEventListener('keydown', (e) => {
    console.log(e.code);
    const Butt = Ob [e.code]; if(!Butt) return;
    if (Butt.isPlaying) return;
    Butt.isPlaying = true;
    e.audio = new Audio(Butt.getAttribute('path')).play();
    Butt.classList.add('key_white_container_on');

})
window.addEventListener('keyup', (e) =>{
    const Butt = Ob [e.code]; if(!Butt) return;
    Butt.classList.remove('key_white_container_on');
    Butt.isPlaying = false;
})

box1.addEventListener('click', (e) =>{
    console.log(1)
    e.target.audio = new Audio(e.target.getAttribute('path')).play()
   
})
const Ab = new Object();

let btn_black = document.querySelectorAll('.btn_black');
for(let i = 0; i < btn_black.length; i++){
    Ab  [btn_black[i].getAttribute('data-note')] = btn_black[i]; 
}


window.addEventListener('keydown', (e) => {
    console.log(e.code);
    const Batt = Ab [e.code]; if(!Batt) return;
    if (Batt.isPlaying) return;
     Batt.isPlaying = true;
    e.audio = new Audio(Batt.getAttribute('path')).play();
    Batt.classList.add('btn_black_down');
})

window.addEventListener('keyup', (e) => {
    const Batt = Ab [e.code]; if(!Batt) return;
    Batt.classList.remove('btn_black_down');
    Batt.isPlaying = false;
})

box2.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn_black_down')){
        console.log(e.target)
        e.audio = new Audio(e.target.getAttribute('path'));
        e.audio.play();
    }

})





