//console.log("Hello world!");//
let http = require("http")
const PORT = 8080
http.createServer(function(req,res){
    res.writeHead("hello world")
    res.end()
}).listen(PORT)
console.log("server running on "+PORT)
