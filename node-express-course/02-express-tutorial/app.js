// const { readFileSync } = require("fs");
// const http = require("http");

// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");
// const homeImage = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   } else if (url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>about page</h1>");
//     res.end();
//   } else if (url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   } else if (url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(homeImage);
//     res.end();
//   } else if (url === "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end();
//   } else if (url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>about page</h1>");
//     res.end();
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>page not found </h1>");
//     res.end();
//   }
// });

// server.listen(5000);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>not found page</h1>");
});

app.listen(5000, () => {
  console.log("server is listening to 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
