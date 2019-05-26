const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
console.log('bodyBcg',bodyBcg)

const colors = ['yellow','red','green','#3b5785'];

colorBtn.addEventListener('click',changeColor);

 function changeColor(){
     let random = Math.floor(Math.random()*colors.length)
     console.log('Math.random',Math.random())
     console.log('colors.length',colors.length)
     console.log('random',random) 
     console.log('colors',colors[random])


     bodyBcg.style.backgroundColor = colors[random];
     
       
}