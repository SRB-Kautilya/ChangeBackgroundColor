//assigning constant values
const colorBtn = document.querySelector('.colorBtn');

const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#3b5785'];

//Listening to click event
colorBtn.addEventListener('click',changeColor);

//changing color when we click
 function changeColor(){
     
     let random = Math.floor(Math.random()*colors.length)
     
     bodyBcg.style.backgroundColor = colors[random];
     
       
}