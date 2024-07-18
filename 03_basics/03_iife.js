// Immediately invoked function expresion run as soon as it defined. The primary purpose of using an IIFE is to create a new scope to avoid polluting the global scope and to create private variables.

((name)=>{
  console.log(`my name is ${name}`)
})('waqar shah');