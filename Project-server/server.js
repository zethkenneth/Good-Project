// Import dependencies
const express = require('express');
const bodyparser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();   
const cors = require('cors');

//Configure the Database
const db_path = './ClinicDatabase.db'
let db = new sqlite3.Database(db_path);

const server = express();
server.use(bodyparser.json());
server.use(cors()); 

server.get('/', (req, res) =>{ 
    res.send('Hello World!');
});



server.post('/login',(req,res) => {
    db.all('Select * from Account where Account_Username = ? and Account_Password = ?',
        [
            req.body.Account_Username,
            req.body.Account_Password
            
        ], ( err, rows ) => {
                if (err){
                    console.log(err);
                }
            const user = rows.map( (row) => {
               return {
                   row.Account_UserType +
                   row.Account_Username 
                 row.Account_Password };
            })
                if (user.length === 1){
                    res.send('Successfully Login!!!');
                } else {
                    res.send('Successfully Login!!!');
                }
            db.close();   
        }); 
    
});

server.post('/addAccount', (req, res) => {
   
    db.run('INSERT INTO Account (Account_Name,Account_Usertype,Account_Username,Account_Password) VALUES (?,?,?,?)', 
        [
            req.body.Account_Name,
            req.body.Account_UserType,
            req.body.Account_Username,
            req.body.Account_Password

        ], (err) => {   
                if (err) {
                    res.send("Error Inserted table: ", err);
                } else {
                    res.send("Successfully Added");
                }
                db.close();
         });
});

server.listen(3001, () => {
    console.log("Server running in port 3001");
});