const http = require("http");

const userData = [
  {
    name: "manish",
    age: 25,
    gender: "male",
  },
  {
    name: "aayushi",
    age: 25,
    gender: "female",
  },
  {
    name: "priyanshi",
    age: 6,
    gender: "female",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.write(JSON.stringify(userData));
  res.end();
});

server.listen(3000);
