// Import dependencies
const express = require('express');
const bodyparser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();   
const cors = require('cors');

//Configure the Database
const db_path = './WMSUClinicDatabase.db'
let db = new sqlite3.Database(db_path);

const server = express();
server.use(bodyparser.json());
server.use(cors()); 

server.get('/', (req, res) =>{ 
    res.send('Hello World!');
});



server.post('/logint',(req,res) => {
    db.all('Select * from Account where AccountUsername = ? and AccountPassword = ?',
        [
            req.body.Account_Username,
            req.body.Account_Password
            
        ], ( err, rows ) => {
                if (err){
                    console.log(err);
                }
            const user = rows.map( (row) => {
               return {
                  usertype: row.Account_UserType,
                  username: row.Account_Username, 
                  password:  row.Account_Password
                 };
            })
                if (user.length === 1){
                    res.send('Successfully Login!!!');
                } else {
                    res.send('Invalid Login!!!');
                }
        }); 
    
});

server.post('/admin/settings', (req, res) => {
    let CreatedAt = new Date();
    db.run('INSERT INTO Account (AccountName,AccountUsertype,AccountUsername,AccountPassword,CreatedAt) VALUES (?,?,?,?,?)', 
        [
            req.body.Account_Name,
            req.body.Account_UserType,
            req.body.Account_Username,
            req.body.Account_Password,
            CreatedAt
        ], (err) => {   
                if (err) {
                    console.log(err);
                    res.send("Error Inserted table: ", err);
                } else {
                    res.send("Successfully Added");
                }
         });
});

server.post('/addMedicine', (req, res) => {
    let query = "INSERT INTO Medicine (GenericName,BrandName) VALUES (?,?)"
    db.serialize(() => {
        db.run(query, [
            req.body.Generic_Name,
            req.body.Brand_Name
        ], (err) =>{
            if (err) {
                res.send("Error Inserted table: ", err);
            } else {
                res.send("Successfully ");
            }
        })
    })
});



server.listen(3001, () => {
    console.log("Server running in port 3001");
});