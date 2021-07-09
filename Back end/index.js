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
app.get("/test", (req, res)=>{
    res.status(200).send({name:"here"})
    res.end()
    
});

app.post("/login", (req, res)=>{

    db.getConnection((err, connect)=>{
        if(err) throw err
        console.log("connected")

        connect.query(`Select * from login where email='${req.body.email}' and password='${req.body.password}'`,(err,row,fields)=>{
            if(err){
                res.status(400).send({
                    responseMessage:"Error in running sql qury",
                    responseCode:1
                })
            }
            else
            {
                if(row.length>0)
                res.status(200).send(JSON.stringify(row))
                else
                res.status(400).send({
                    responseMessage:"There is no user with these credentials",
                    responseCode:2
                })
            }
            
        })
        // const sqlInsert = "INSERT INTO login (id, firstname, lastname, email, password, status) VALUES (?,?);";

        // connect.query(sqlInsert, [3, "Nazeer", "Ahmed", user, password, "user"], (err, res)=>{
        //     connect.release()// return connection to db
        // if(err){
        //     console.log(err.message)
        // }
        // else
        // res.send("Query Inserted!");
    });
    })

    app.get("/list", (req, res)=>{
        
        db.getConnection((err, connect)=>{
            if(err) throw err
            console.log("connected")
    
            connect.query("delete from login where id=1",(err,row,fields)=>{
                if(err) throw err
                res.status(200).send("HI")
            })
        })
    })

    app.get("/data", (req, res)=>{
        
        db.getConnection((err, connect)=>{
            if(err) throw err
            console.log("connected")
    
            connect.query("SELECT * from login",(err,rows,fields)=>{
                if(err) throw err
                res.send(rows)
            })
        })
    })

    app.get("/register", (req, res)=>{
        
        db.getConnection((err, connect)=>{
            if(err) throw err
            console.log("connected")
            
            const sqlInsert = "INSERT INTO login (firstname, lastname, email, password, status) VALUES (?,?,?,?,?)";

            connect.query(sqlInsert, [req.body.fname, req.body.lname, req.body.email, req.body.password, 'user'], (err, rows)=>{
        
            //connect.query("INSERT INTO login (firstname, lastname, email, password, status) VALUES('${req.body.fname}', req.body.lname, req.body.email, req.body.password, "user")",(err,rows,fields)=>{
                //if(err) throw err
                //res.send(rows.json())
                if(err){
                    res.status(400).send({
                        responseMessage:"Error in running sql qury",
                        responseCode:1
                    })
                    
                }
                else
                {
                    if(rows.length>0)
                    res.status(200).send(JSON.stringify(rows))
                    
                }
            })
        })
    })

app.post("/signup", (req, res)=>{

    db.getConnection((err, connect)=>{
        if(err) throw err
        console.log("connected")
        const sqlInsert = "INSERT INTO login (id,firstname, lastname, email, password, status) VALUES (?,?,?,?,?,?);";

        connect.query(sqlInsert, [6,req.body.fname, req.body.lname, req.body.email, req.body.password, "user"], (err, res)=>{
        //connect.query(`Select * from login where email='${req.body.email}' and password='${req.body.password}'`,(err,row,fields)=>{
            if(err){
                res.status(400).send({
                    responseMessage:"Error in running sql qury",
                    responseCode:1
                })
                
            }
            else
            {
                if(row.length>0)
                res.status(200).send(JSON.stringify(row))
                
            }
            connect.end();
        })
        
    });
    
    })
    
    db.getConnection((err, connect)=>{
        if(err) throw err
        console.log("connected")
    
        app.post("/register", (req, res)=>{
        const sqlInsert = "INSERT INTO login (id,firstname, lastname, email, password, status) VALUES (?,?,?,?,?,?);";

        connect.query(sqlInsert, [6,req.body.fname, req.body.lname, req.body.email, req.body.password, "user"], (err, res)=>{
        
    //dbConn.query("INSERT INTO login set ?", newEmp, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          console.log(res.insertId);
          }
        });
        });
    });
app.listen(3001, ()=>{
    console.log('running on port 3001');
});