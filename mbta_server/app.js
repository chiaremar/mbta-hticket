var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var db = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'password',
  database  : 'mydb'
});

db.connect(function(err){
if(!err) {
    console.log("Database is connected ...");    
} else {
    console.log("Error connecting database ...");    
}
});

//register user
app.get('/register', (req, res) => {
  let post = req.body;

  let sql = 'INSERT INTO users SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({errors: [`Could not register user`]});
    }
    console.log('User registered...');
    //allow login, user passed auth
    res.status(200).send({allowed: true});
  })
});


//login user
app.post('/login', jsonParser, function(req, res)  {
//  let post = {username:'marianne', password:'12345'};
  var usern=req.body.email;
  var passw=req.body.password;
  console.log('login service requested with', req.body);

  let sql = `SELECT * from users where username='${usern}' and password='${passw}';`;
  console.log(sql);

  let query = db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({errors: [`Could not retrieve user`]});
    }
    
    //No results means user not found or didn't match password
    if (results.length === 0) {
      res.statusCode = 404;
      return res.json({errors: [`User not registered`]});
    }

    //allow login, user passed auth
    console.log('User logged on...');
    res.status(200).send({allowed: true});
  })
});

// app.get('/login',function(req,res){
//   let sql = 'SELECT * from users where username = req.username'
//   db.query('SELECT DISTINCT route from RoutesLinesMap', function(err, rows, fields) {
  
//     if (!err) {
//       console.log('Success while performing Query.');
//       res.send(rows);
//     } else
//       console.log('Error while performing Query.');
//     });
//   });

//get all stops (unique)
app.get('/routes',(req,res) => {
  let sql = 'SELECT DISTINCT route from RoutesLinesMap';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
      console.log('routes fetched');
      res.send(results);
    });
});

//get filtered list of stops for start route
app.get('/routes/:routename',(req,res) => {
  let sql = `SELECT DISTINCT route from RoutesLinesMap 
             WHERE RoutesLinesMap.line 
             IN (select line from RoutesLinesMap where route = ${req.params.routename})`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
      console.log('filtered routes fetched');
      res.send(results);
    });
});

app.listen(3000);