//Built-in modulule /Package
//The same as importing
const http = require("http");

const server = http.createServer((request,response) => {
    response.end("yo gabba gabba");
});

server.listen(5000, () => {
    console.log("Server started on port 5000 ...")
})