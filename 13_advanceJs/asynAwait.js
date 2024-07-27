// promise is a javasripit object is use to mange the asynchronous operation.
//promise have three state resolve , reject , pending. its provide more predictible and mangeble way to handle the asynchronous operation.

let myPromise = ()=>{
    return new Promise((resolve, reject)=>{
        let success = true
       setTimeout(()=>{
        if(success)
            {
                resolve("operation is compelete successful!")
            }
            else
            {
                reject("operation is failed!")
            } 
       },2000) 
    })
}

async function processData()
{
  try {
    
    const data = await myPromise();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

processData();