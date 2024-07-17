// A collection value or element in a singal variable is called array.
const array  = [1,2,3,4,5,6,7,8,10];
// push method is use to add one or more element to the end of an array.
// array.push(9)
//Pop: The pop method removes the last element from an array.
array.pop()
// shift method is use to remove the firt element of the array
array.shift();
array.shift();
// unshift method is add one or more element to the begining of an array.
array.unshift(1,2);
let fruits = ["Apple", "Banana", "Cherry"];
// splice method is use to add or remove the element into an array.
// splice method modifies the original array
// splice is use full to modifies add or remove the original array.
let removeArray = fruits.splice(1,2)
let addEelement = fruits.splice(1,2,'mango','chery')
//slice method is use to add 0r remove the element into an array and return the copy of an array.
// can not modifies the original array.
 const number =[1,2,3,4,5,6]
 let removeNum = number.slice(2,4);
 console.log(removeNum);
 console.log(number)

