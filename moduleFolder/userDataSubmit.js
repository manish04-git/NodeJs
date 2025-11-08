
const queryString=require('querystring');

function userDataSubmit(req,res){
 let databody=[];
 req.on("data",(chunk)=>{
  databody.push(chunk);
 });

 req.on("end",()=>{
  let rawData=Buffer.concat(databody).toString();
  let readableData=queryString.parse(rawData);
 // console.log(readableData);
  let dataString="name is "+readableData.name+ "and email is" +readableData.email;
  console.log(dataString);
  
 });




res.write(`
  <h1>you can get data from user form</h1>
  `)
}

module.exports=userDataSubmit;