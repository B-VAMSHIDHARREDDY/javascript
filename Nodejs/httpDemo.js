//http module of Nodejs is used to create web server based apps that uses HTTP
//protocol to process web document like html, css, and other web based content thru nodejs
const http = require("http")
const f = ["apples","mangoes","Orange","Bananas"]
const server = http.createServer((req,res)=>{
    if(req.url != "favicon.ico"){
            res.write("<h1 style='color:red'>Welcome to vamshi</h1>");
            res.write("<hr/>")
            res.write(f.toString())
            res.end()
    }
    console.log(req.url)
})
server.listen(12345)