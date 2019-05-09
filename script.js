var _=require('lodash');
console.log(_);
let color1 = document.querySelector('.color1'),color2 =document.querySelector('.color2'),body=document.getElementById('bdy');
function changeBGD(){
body.style.background =`linear-gradient(to right ,${color1.value},${color2.value})`;
console.log(body.style.background)
}
color1.addEventListener('input',changeBGD);
color2.addEventListener('input',changeBGD);
