
const http=require('http');

const server=http.createServer((req,res)=>{
console.log(req.url)

if(req.url=='/'){
res.write('<h1>home page</h1>');
}
else if(req.url=='/login'){
res.write('<h1>Login page</h1>');
}
else{
  res.write('<h1>page not found</h1>')
}


res.end() // end is mendatory)
});
server.listen(3000);  