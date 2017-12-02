var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'password',
  database  : 'mydb'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
connection.query('SELECT DISTINCT route from RoutesLinesMap', function(err, rows, fields) {

  if (!err)
    console.log('Success while performing Query.');
	res.send(rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);