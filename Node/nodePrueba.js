const { readFile } = require("fs");
const http = require("http");

const html = FileSystem.readFile("HTML/index.html");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Hola mundo!</h1>");
  response.end();
});

server.listen(3000);
