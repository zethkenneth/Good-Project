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
                  accountname: row.AccountName,
                  usertype: row.AccountUsertype, 
                  username:  row.AccountUsername
                 };
            })
                if (user.length === 1){
                    res.send('Successfully Login!!!');
                    console.log(user);
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
    });
});

server.post('/addDepartment', (req,res) => {
    let query = "INSERT INTO Department (DepartmentName) VALUES (?)"
    db.serialize(() => {
        db.run(query, [
            req.body.Department_Name
        ], (err) => {

            if (err) {
                res.send("Error Inserted table: ", err);
            } else {
                res.send("Successfully ");
            }
            
        })
    });
});

server.get('/getDepartment',(req,res) => {
    let query = "Select * from Department ORDER BY DepartmentName"
    db.serialize(() => {
        db.all(query, (err ,rows) => {
            const Department = rows.map((row) => {
                return {
                    Department_Name: row.DepartmentName
                }
            })
            if (err) {
                res.send(err);
            } else {
                res.json(Department);
            }
        })
    });
});

server.get('/getDepartmentHaids',(req,res) => {
    let query = "SELECT * FROM Department ORDER BY DepartmentName LIMIT ? OFFSET ?"
    let limit = req.body.limit
    let offset = req.body.offset
    db.serialize(() => {
        db.all(query, [limit, offset], (err ,rows) => {
            const Department = rows.map((row) => {
                return {
                    Department_Name: row.DepartmentName
                }
            })
            if (err) {
                res.send(err);
            } else {
                res.json(Department);
            }
        })
    });
});



server.post('/addCourse', (req, res) => {
    let query = "INSERT INTO Course (CourseName,DepartmentID) VALUES (?,?)"
    db.serialize(() => {
        db.run(query, [
            req.body.Course_Name,
            req.body.Department_Name
        ], (err) => {
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