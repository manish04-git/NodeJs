const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {
    //=====
    let collectHeaderData = fs.readFileSync("html/header.html", "utf-8");
    let collectFooterData = fs.readFileSync("html/footer.html", "utf-8");

    //======
    let file = "/home";
    if (req.url != "/") {
      file = req.url;
    }

    if (req.url != "/style.css") {
      fs.readFile("html/" + file + ".html", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("Internal Server Error");
          return false;
        }
        // console.log(collectHeaderData);
        resp.write(collectHeaderData + data+collectFooterData);
        resp.end();
      });
    } else if (req.url == "/style.css") {
      fs.readFile("html/style.css", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(200, { "content-type": "text/plain" });
          resp.end(" css is not found");
          return false;
        }
        resp.writeHead(200, { "content-type": "text/css" });
        resp.write(data);
        resp.end();
      });
    }
  })
 .listen(3200);