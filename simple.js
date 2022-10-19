
"use strict"

const colors =['Red', 'Green' ,'Blue' , 'Pink'];

const btn1 =  document.getElementById('btn1');
const color = document.querySelector(".RHC")

btn1.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

const hamburger = document.querySelector('#rrr');
const navLink = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});