// const os=require("os");
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.cpus().length)
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.platform())
// console.log(os.userInfo())
// console.log(os.loadavg())
// console.log(os.uptime())


const http = require("http")

const server = http.createServer((req,res)=>{
    res.write("hello amulya")
    res.end()
})
server.listen(8020,()=>{console.log("server started on port 8020")})