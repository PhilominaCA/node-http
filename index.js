const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end("Hello !!!"); //wirting to client
            console.log("hello!!!")
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Bad Request"}));
}
});
server.listen(8080);