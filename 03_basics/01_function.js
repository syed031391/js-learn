//Function is block of which perform a specific task. it can take input called parameter and return an output. 
 function sayMyName ()
 {
    //    console.log('my name is waqar')
 }

 function addTwoNum (a,b)
 {
       return a+b
 }
//  console.log(addTwoNum(5,5))

 // Get data from object 

 const personInfio ={
    name: 'waqar shah',
    location: 'peshawar'
 }

 function getInfio (infio)
 {
   console.log(`My name is ${infio.name} and I am from ${infio.location}`)
 }

getInfio(personInfio)

//Get data from array

function data (num)
{
  console.log(num[1])
}

data([1,2])