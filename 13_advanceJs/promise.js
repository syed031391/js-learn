// promise is a javasripit object is use to mange the asynchronous operation.
//promise have three state resolve , reject , pending. its provide more predictible and mangeble way to handle the asynchronous operation.

let myPromise = new Promise((resolve, reject)=>{
    let success = true
    if(success)
    {
        resolve("operation is compelete successful!")
    }
    else
    {
        reject("operation is failed!")
    }  
})

myPromise
.then((message)=>{
   console.log(message)
})
.catch((e)=>{
    console.log(e)
})