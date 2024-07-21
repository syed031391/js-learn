setInterval(()=>{
const date = new Date();
const time = date.toLocaleTimeString();
const clock = document.querySelector("#clock");
clock.innerHTML=time
},1000)

