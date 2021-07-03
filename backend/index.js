const express = require('express');
const app = express();
const mysql = require('mysql');

//MySql
const db = mysql.createPool({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'bakreydb'
});

app.get('/', (req, res)=>{

    db.getConnection((err, connect)=>{
        if(err) throw err
        console.log("connected")

        const sqlInsert = "INSERT INTO login (username, password, status) VALUES ('Nazeer', 'n123','admin');";

        connect.query(sqlInsert, (err, res)=>{
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