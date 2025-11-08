

const http=require('http');
http.createServer((req,res)=>{
  res.write('<h1>hello manish</h1>');



  res.end('hello manish') // end is mendatory
}).listen(3000);