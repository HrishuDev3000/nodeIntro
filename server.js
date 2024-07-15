//Built-in modulule /Package
//The same as importing
const http = require("http");

const server = http.createServer((request,response) => {
    response.end("hello");
});

server.listen(5555, () => {
    console.log("Server started on port 5555 ...")
})