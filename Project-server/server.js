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



server.post('/login',(req,res) => {
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
            db.close();   
        }); 
    
});

server.post('/addAccount', (req, res) => {


    let AccountName;
    let AccountUsertype;  
    let AccountUsername;  
    let AccountPassword;  
    let CreatedAt = new Date();

     AccountName = req.body.Account_Name;
     AccountUsertype =  req.body.Account_Usertype;
     AccountUsername =  req.body.Account_Username;
     AccountPassword =  req.body.Account_Password;
     

   
    db.run('INSERT INTO Account (AccountName,AccountUsertype,AccountUsername,AccountPassword,CreatedAt) VALUES (?,?,?,?,?)', 
        [
            AccountName,
            AccountUsertype,
            AccountUsername,
            AccountPassword,
            CreatedAt

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