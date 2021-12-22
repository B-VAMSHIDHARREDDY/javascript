const fs = require("fs")
// const data = fs.readFileSync('./Ex04.js','utf8')
// console.log(data)

//******************Read a file in asynchronous manner */

// fs.readFile("./fileDemo.js",'utf8',function (err,data) {
//     if(err != null){
//         console.error(err.mesage);
//     }
//     else{
//         console.log(data)
//     }
// });

// console.log("--------------------END OF OUR PROGRAM---------------------")
//******************Write a file in js */
// const filename = "MyFile.txt";
// fs.writeFileSync(filename,"Hi vamshi ")
//******************write a file in asynchronous manner */
const filename = "MyFile.txt";
// fs.writeFile(filename,"This is the conten that I want to replace",(err)=>{
//     if(err !=null) console.log(err.message)
    
// })
//******************Appending the contents of the file**********************
fs.open(filename,'a+',function(err,fd){
    if(err != null){
        console.log(err.message)
    }else{
        let content = "Data in some format\n";
        fs.write(fd, content,(e,written,buffer)=>{
            fs.close(fd,()=>{
                console.log("File writing is completed")
            })
        })
    }
})




