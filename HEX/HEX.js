 "use strict"

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A', 'B', 'C', 'D', 'E','F'];
 const btn1 = document.getElementById('btn1');
 const color = document.querySelector('.Txt');
//const cooo = document.getElementById("Clip");
const checkk = document.getElementById('tick');
//  const colorInput = document.querySelector(''.Txt');

 btn1.addEventListener('click', function () {
   
let hexColor = '#';
for(let i =0 ; i<6; i++){
    hexColor += hex[getRandomNumber()]
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
color.value = hexColor;





 });
 btn1.addEventListener('click', function() {
 
 
    setTimeout(() =>{
        button.style.display = "block";
       checkk.style.display = "none";
   }, );
       
 

 })

 const button = document.getElementById('Clip');
button.addEventListener('click', ()=>{
     navigator.clipboard.writeText(color.value)
//    button.innerHTML = "checkk";
    
//  alert('Copy')
    button.style.display = "none";
    
    checkk.style.display = "block";
        
 
 
})

 function getRandomNumber(){
    return Math.floor(Math.random() *hex.length);
 }
//  const clipS =document.getElementById('clip')
//  const clip = ()=>{
//   navigator.clipboard.writeText.(color.value)
//  }


//  const inputHex = document.getElementById('Txt');
 
 
// let faButton =document.getElementById('CB');
// let text = document.getElementById('CT');
//  faButton.onClick  = function(){
//    console.log(HII)
//    // text.select();
//    // Document.execCommand('copy');
//    // faButton.style.backgroundColor = 'white';

//  }

// let hexCode = document.getElementById('Txt');
// let clipBtn = document.getElementById('Clip');

// clipBtn.addEventListener('click', ()=>{
//   hexCode.select();
//   Document.execCommand('copy'); 
// }

// )
// const copyToClipboard = ()=>{
// const copy  = document.getElementById('Txt');
// navigator.clipboard.writeText(copy.innerText);



// };
// const hem = document.getElementById('rrr');
// const navB = document.getElementById('gaya');
// hem.addEventListener('click', ()=>{
// navB.classList.toggle('hoo')
// })



const hamburger = document.querySelector('#rrr');
const navLink = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
