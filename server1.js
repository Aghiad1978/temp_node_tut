import { print } from "./utils.js";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my home page");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page");
  } else {
    res.end(`<h1>Not found Page 404</h1>
            <a href="/">Home Page</a>
            <br>
            <a href="/about">About Page</a>
        `);
  }
});

server.listen(8000, "127.0.0.1", () => {
  print("Server on port 8000");
});
server.on("connection", (socket) => {
  print(socket.remoteAddress, socket.remotePort);
  socket.on("close", () => {
    print(`socket on port ${socket.remotePort} has been closed`);
  });
});
