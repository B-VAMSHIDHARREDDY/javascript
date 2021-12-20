
//A file of JS in Nodejs is called as module. In this example, the module the name of the file (table.js)
//the name of the module is table,js
//Any module must export something, other wise an empty object gets export.
module.exports= function(num = 10){
    console.log(`Table for ${num} is :`)
    for (let index = 1; index <= 10; index++){
        console.log(`${num} * ${index} = ${num * index}`)
    }
}

