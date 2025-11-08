// load html file in web page

const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
fs.readFile('html/home.html','utf-8',(err,data)=>{
  if(err){
    res.writeHead(500,{"content-type":'plain/text'})
    res.write('internal server error')
    res.end();
    return
  } 
  res.writeHead(200,{"content-type":'text/html'})
  res.write(data)
  res.end();
  
})

})
server.listen(3000);