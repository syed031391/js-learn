// callback is the function which pass to onther function as a peramater...
function greet(name, callback)
{
    console.log("Hello i am",name)
    callback();
}

function sayGoodBy()
{
    console.log("GOOD BYE")
}

greet("waqar shah", sayGoodBy);// sayGoodBy is the callbacke function.
