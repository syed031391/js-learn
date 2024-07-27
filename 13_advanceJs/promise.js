let myPromise = new Promise((resolve , reject)=>{
    let success=true;
    if(success)
    {
        resolve("opperation compelete successful!")
    }
    else
    {
        reject("opperation failed!")
    }
})
myPromise
.then((message)=>console.log(message))
.catch((e)=>console.log(e))
