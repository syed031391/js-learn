 const form = document.querySelector("form")
 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value)
   const results = document.querySelector("#results")

   if(height === "" || isNaN(height)  || height <0)
   {
    results.innerHTML= `Please give a valid height ${height}`
   }
   else if(weight === "" || isNaN(weight)  || weight <0)
    {
     results.innerHTML= `Please give a valid weight ${weight}`
    }
    else
    {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        //show the result
        if(bmi <18.6)
        {
            results.innerHTML = `You are under weight <span>${bmi}</span>`;
        }
        else if(bmi >18.6 && bmi <24.9)
        {
            results.innerHTML = `your weigth is in normal range <span>${bmi}</span>`;
        }
        else
        {
            results.innerHTML = `you are over weigth <span>${bmi}</span>`;
        }
    }
   console.log(results)

 })