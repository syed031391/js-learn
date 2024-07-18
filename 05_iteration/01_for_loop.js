

const table = (table)=>
{
    for (let j = 1; j <=10; j++) {
   
        console.log(`${table} * ${j} = ${j*table} `)
    }
}
// table(3,2)
// multiplication table from 1 to 10

for (let i = 1; i <=10; i++) {
     
    console.log(`**********Table of ${i}**********`)
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${j*i} `)    
    }
}