let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');

let pool = new pg.Pool({
    port: 5432,
    password: 'Tiger12345',
    database: 'campus',
    max: 10,
    host: 'localhost',
    user:'postgres'
});


 
let app= express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/api/universities', function(request, response){
      pool.connect((err,db,done)=>{
          if(err){
              return console.log(err)
          }
          else{
              db.query('SELECT * FROM universities ', function(err, table){
                  done();
                  if(err){
                    return console.log(err)
                  }
                  else{
                      return response.status(200).send(table.rows)
                  }
              })
          }
      })
  })

app.post('/api/new-uni', function(request, response){
    
    var name = request.body.name;
    var location = request.body.location;
    var numStudents = request.body.numStudents;
    let values = [name,numStudents,location]


    pool.connect((err,db,done)=>{
        if(err){
            return console.log(err)
        }
        else{
            db.query('INSERT INTO universities(name,numStudents,location) VALUES ($1,$2,$3)',[...values],(err,table) =>{
                done();
                if(err){
                    return console.log(err)
                }
                else{
                    console.log('data inserted')
                }
            })
        }
    })


})
app.listen(PORT, () => console.log('listining on port ' + PORT));
  