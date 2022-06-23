// require the http module
const http = require("http");

// create the port
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1><p>What's upsss?</p>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
