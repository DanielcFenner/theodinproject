const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/about", function (req, res) {
  res.sendFile("about.html", { root: __dirname });
});

app.get("/contact", function (req, res) {
  res.sendFile("contact.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("404.html", { root: __dirname });
});

app.listen(port, function () {
  console.log("Server listening");
});

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");

//   let path = "";

//   // Take the request and route it
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/contact":
//       path += "contact.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//   }

//   // Read the file and send back to client
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     }

//     res.end(data);
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log("Listening for requests on port 3000");
// });
