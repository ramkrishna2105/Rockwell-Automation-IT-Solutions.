var express = require('express');
var app = express();


var Controller=function(req, res){
  console.log("Invoking  rest api for product list");
  var Employees = [
    {id:100, Employees:"Ramkrushna",salary:50000, status:"completed"},
	{id:101, Employees:"Shrikant",salary:50000, status:"completed"},
	{id:102, Employees:"Jayant",salary:50000, status:"completed"},
    {id:103, Employees:"Ganesh",salary:45000, status:"inprogress"},
    {id:104, Employees:"Ashish",salary:55000, status:"rejected"}
  ];
  res.send(Employees);
};
 


app.get('/employees',Controller);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})