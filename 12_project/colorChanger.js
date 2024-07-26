
const randomColor = ()=>
{
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i =0; i<6; i++)
    {
    color += hex[Math.floor(Math.random()*16)]
    }
  return color
}

let intervelId 
const startChangingColor = function()
{
    if(!intervelId)
    {
   intervelId= setInterval(()=>{
        const body = document.querySelector('body');
        body.style.background= randomColor();   
    },1000)
    }
}

const stopChangeColor = function(){
    clearInterval(intervelId)
    intervelId= null
    console.log('stopped')
}

 document.querySelector("#start").addEventListener('click', startChangingColor)
 document.querySelector("#stop").addEventListener('click', stopChangeColor)