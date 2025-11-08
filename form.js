/*const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  console.log(req.url);
  if (req.url == "/") {
res.write(`
    <form method="post" action="submit">
    <input type="text" name="name" placeholder="enter your name"/>
    <input type="text" name="age" placeholder="enter your age" />
    <button type="submit">submit</button>
    </form>
    `);
  } else if (req.url == "/submit") {
    res.write('<h1>data submitted</h1>')
  }
  res.end();
});
server.listen(3000); */

const http = require("http");
const fs = require("fs");
const queryString = require("querystring");


const server = http.createServer((req, res) => {
  fs.readFile("html/home.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "plain/text" });
      res.write("internal server error");
      res.end();
      return;
    }

    res.writeHead(200, { "content-type": "text/html" });
    if (req.url == "/") {
      res.write(data);
    } else if (req.url == "/submit") {
      let dataBody = [];
      req.on("data", (chunk) => {
        dataBody.push(chunk);
      });
      req.on("end", () => {
        let rawData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rawData);
        //console.log(readableData);
        // creating file of input data
        let dataString =
          "my name is " +
          readableData.name +
          " and my email is " +
          readableData.email;
        console.log(dataString);
        //fs.writeFileSync("text/"+readableData.name+".txt",dataString);
        // console.log("file created");
      // created file async
        fs.writeFile(
          "text/" + readableData.name + ".txt",
          dataString,
          "utf-8",
          (err) => {
            if (err) {
              res.end("internal server error");
              return false;
            } else {
              console.log("file created");
            }
          }
        );
      });

      res.write("<h1>data submitted</h1>");
    }
    res.end();
  });
});
server.listen(3000);

/*const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    // Serve the home.html page
    fs.readFile("html/home.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  } else if (req.url === "/submit" && req.method === "POST") {
    // Handle form submission
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const rawData = Buffer.concat(body).toString();
      const parsedData = queryString.parse(rawData);
      console.log("Form Data:", parsedData);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Data Submitted Successfully!</h1>");
      res.write(`<pre>${JSON.stringify(parsedData, null, 2)}</pre>`);
      res.end();
    });

  } else {
    // Handle 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

*/
