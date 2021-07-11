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

app.get("/loadAllProductsList", (req, res)=>{
        
        db.getConnection((err, connect)=>{
            if(err) throw err
            console.log("fetching products")
    
            connect.query("SELECT * from products",(err,rows,fields)=>{
                if(err) throw err
                res.send(rows)
            })
        })
    })

    app.post("/createAccount", (req, res)=>{
        
        db.getConnection((err, connect)=>{
            if(err) throw err
            console.log("fetching products")
    
            var sql = `INSERT INTO users (userName,name,password,address,bankAccountNumber) VALUES ('${req.body.userName}','${req.body.name}','${req.body.password}','${req.body.address}','${req.body.bankAccountNumber}')`;
            connect.query(sql, function (err, result) {
            if (err)
            {
                res.status(400).send({
                    responseCode:0,
                    responseMessage:"Could not create account because of : "+err
                })
            }
            else
            {
                res.status(200).send({
                    responseCode:1,
                    responseMessage:"Account created"
                })
            }

            console.log("Created the account");
            });
        })
    })

    app.post("/loginToAccount", (req, res)=>{
        
        db.getConnection((err, connect)=>{
            if(err) throw err
            var sql = `Select * from users where userName='${req.body.userName}' and password='${req.body.password}'`;
            connect.query(sql, function (err, result) {
            if (err)
            {
                res.status(400).send({
                    responseCode:0,
                    responseMessage:"Cant find this account: "+err
                })
            }
            else
            {
               if(result.length>0)
               {
                res.status(200).send({
                    responseCode:1,
                    responseMessage:"Login Sucessfull"
                })

               }
               else
               {
                res.status(200).send({
                    responseCode:2,
                    responseMessage:"Wrong password or user name"
                }) 
               }
               
            }
            console.log("Login Module is being used");
            });
        })
    })

    app.post("/insertProduct", (req, res)=>{
        
            db.getConnection((err, connect)=>{
            if(err) throw err
            console.log("fetching products")
    
            var sql = `INSERT INTO products (productImage,productPrice,productQuantity,productName) VALUES ('${req.body.productImage}','${req.body.productPrice}','${req.body.productQuantity}','${req.body.productName}')`;
            connect.query(sql, function (err, result) {
            if (err)
            {
                res.status(400).send({
                    responseCode:0,
                    responseMessage:"Could not insert item because of : "+err
                })
            }
            else
            {
                res.status(200).send({
                    responseCode:1,
                    responseMessage:"Item Added"
                })
            }

            });
        })
   
    })

    app.post("/deleteItem", (req, res)=>{
        
        db.getConnection((err, connect)=>{
        if(err) throw err
        console.log("fetching products")

        var sql = `DELETE FROM products WHERE productId = '${req.body.productId}'`;
        connect.query(sql, function (err, result) {
          if (err) throw err;

          if( result.affectedRows>0)
          {
              res.status(200).send({
                responseCode:1,
                responseMessage:"Deleted"
            })
          }
          else
          {
            res.status(400).send({
                responseCode:1,
                responseMessage:"Could not find item with this id"
            })
          }
        });
      
    })

})


app.listen(3001, ()=>{
    console.log('running on port 3001');
});