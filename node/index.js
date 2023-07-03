const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('John Doe')`
connection.query(sql)

connection.end()

app.get('/', (req,res) => {
    const conn = mysql.createConnection(config)
    const sql2 = `SELECT name FROM people`
    
    conn.query(sql2, function(err, results){
        if (err){ 
            conn.end();
          throw err;
        }
        var myData = []; 
        Object.keys(results).forEach(function(key) {
            var row = results[key];
            myData.push(row.name);
          });
          res.send('<h1>Full Cycle</h1> <br>' + JSON.stringify(myData))

    })
    conn.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})