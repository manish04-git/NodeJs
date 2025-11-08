
const http=require('http');

const age=20;
const server=http.createServer((req,res)=>{
  res.setHeader('content-type','text/html');
  res.write(`
    <html>
    <head>
    <title>node by manish</title>
    </head>
    <body>
    <h1>hello everyone get ready to learn node</h1>
    <h2>`+age+`</h2>
    <h3>`+new Date()+`</h3>
    </body>
    </html>
    `);



  res.end() // end is mendatory

})

server.listen(3000);