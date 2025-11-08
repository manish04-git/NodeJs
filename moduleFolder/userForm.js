
function userForm(req,res){
  
res.write(`
  <h2>Submit Your Data</h2>
  <form action="/submit" method="POST">
    <label>Name:</label>
    <input type="text" name="name"><br><br>
    <label>Email:</label>
    <input type="email" name="email"><br><br>
    <button type="submit">Submit</button>
  </form>
  `)
}

module.exports=userForm;