const http = require("http")

http.createServer((request,response)=>{
    response.write("Hi my name is amulya")
    response.end()
}).listen(8000, ()=>{console.log("server started")})