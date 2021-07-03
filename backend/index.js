const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

//MySql
const db = mysql.createPool({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'bakreydb'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/LogIn.js', (req, res)=>{

    const user = req.body.user;
    const password = req.body.password;

    db.getConnection((err, connect)=>{
        if(err) throw err
        console.log("connected")

        const sqlInsert = "INSERT INTO login (firstname, lastname, email, password, status) VALUES (?,?);";

        connect.query(sqlInsert, ["Nazeer", "Ahmed", user, password, "user"], (err, res)=>{
            connect.release()// return connection to db
        if(err){
            console.log(err.message)
        }
        else
        res.send("Query Inserted!");
    });
    })
    
    
});

app.listen(3001, ()=>{
    console.log('running on port 3001');
});