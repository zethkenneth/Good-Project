const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('ClinicDatabase.db', (err) => {
    if (err) { console.log("Error connecting to database."); }
    db.run(`
       CREATE TABLE Account (
                Account_ID integer NOT NULL PRIMARY KEY,
                Account_Name text NOT NULL,
                Account_UserType text NOT NULL,
                Account_Username text NOT NULL,
                Account_Password text NOT NULL
       )`, (err) => {
            if (err) {
                console.log("Error creating table: ", err);
            } else {
                console.log("Table succesfully created.");
            }
            db.close();
        });
});