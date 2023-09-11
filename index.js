const http = require("http");

const fs = require("fs").promises;

console.log("is this what imposter syndrome feels like");

const reqListener = (req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    fs.readFile(__dirname + "/page.html")
      .then(
        contents => {
          res.setHeader("Content-Type", "text/html; charset=UTF=8" );
          res.writeHead(200);
          res.end(contents);
        }
      );
  } else {
    fs.readFile(__dirname + "/data.json")
    .then(
      contents => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      }
    );
    
  }
};

const server = http.createServer(reqListener);

const host = "0.0.0.0";

const port = "8080";

server.listen(
  port,
  host,
  () => {
    console.log("the server is running");
}
);