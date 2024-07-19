let buttons = document.querySelectorAll(".button")
let body = document.querySelector("body")
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target.id)
        if(e.target.id==='grey')
        {
         body.style.background =e.target.id
        }
        if(e.target.id==='white')
            {
             body.style.background =e.target.id
            }
            if(e.target.id==='blue')
                {
                 body.style.background =e.target.id
                }
                if(e.target.id==='yellow')
                    {
                     body.style.background =e.target.id
                    }
    })
})

