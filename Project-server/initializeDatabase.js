const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('WMSUClinicDatabase.db', (err) => {
    if (err) { console.log("Error connecting to database."); }
    db.run(`CREATE TABLE Account(
                Account_ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                Account_Name TEXT NOT NULL,
                Account_Type TEXT NOT NULL,
                Account_Username TEXT NOT NULL,
                Account_Password TEXT NOT NULL,
                Account_CreatedAt date NOT NULL
             ); 
            CREATE TABLE MedTransaction(
                Medtransact_ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                Medtransact_CreatedAt date NOT NULL,
                Medtransact_Illness TEXT NOT NULL,
                Medtransact_NursingCare TEXT NOT NULL,
                Medtransact_Account INTEGER NOT NULL,
                Medtransact_Patient INTEGER NOT NULL,
                Medtransact_VitalSign INTEGER NOT NULL,
                FOREIGN KEY ( Medtransact_Account)
                REFERENCES Account(Account_ID)
                FOREIGN KEY (Medtransact_Patient)
                REFERENCES Patient(Patient_No)
                FOREIGN KEY ( Medtransact_VitalSign)
                REFERENCES VitalSign(VS_ID)
                );
            CREATE TABLE VitalSign(
                VS_ID INTEGER PRIMARY KEY,
                VS_CreatedAt date,
                VS_Height Double,
                VS_Weight Double,
                VS_BloodPressure Double
                );	  
            CREATE TABLE Unit(
                Unit_ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                Unit_Type TEXT NOT NULL
                );
            CREATE TABLE Employee(
                Emp_ID INTEGER PRIMARY KEY NOT NULL,
                Emp_Position TEXT NOT NULL,
                Emp_Type TEXT NOT NULL,
                Emp_Unit INTEGER NOT NULL,
                FOREIGN KEY (Emp_Unit)
                REFERENCES Unit(Unit_ID)
                );
            CREATE TABLE Department(
                Dept_ID INTEGER PRIMARY KEY NOT NULL,
                Dept_Name TEXT NOT NULL
                );
            CREATE TABLE Course(
                Course_ID INTEGER PRIMARY KEY NOT NULL,
                Course_Name TEXT NOT NULL,
                Course_DeptName INTEGER NOT NULL,
                FOREIGN KEY (Course_DeptName)
                REFERENCES Department(Dept_ID)
                );
            CREATE TABLE Student(
                Student_ID INTEGER PRIMARY KEY NOT NULL,
                Student_Course INTEGER NOT NULL,
                Student_Guardian INTEGER NOT NULL,
                Student_Adviser INTEGER NOT NULL,
                FOREIGN KEY (Student_Course)
                REFERENCES Course(Course_ID)
                FOREIGN KEY (Student_Guardian)
                REFERENCES Course(Course_ID)
                FOREIGN KEY (Student_Adviser)
                REFERENCES Adviser(Adviser_ID)
                );
            CREATE TABLE StudGuardian(
                Guardian_ID INTEGER PRIMARY KEY NOT NULL,
                Guardian_Name TEXT NOT NULL,
                Guarduan_ContactNo LONG NOT NULL
                );
            CREATE TABLE StudAdviser(
                Adviser_ID INTEGER PRIMARY KEY NOT NULL,
                Adviser_Name TEXT NOT NULL,
                Adviser_ContactNo INTEGER NOT NULL,
                Adviser_Dept INTEGER NOT NULL,
                FOREIGN KEY (Adviser_Dept)
                REFERENCES Department(Dept_ID)
                );
            CREATE TABLE Patient(
                Patient_No INTEGER PRIMARY KEY NOT NULL,
                Patient_LName TEXT NOT NULL,
                Patient_FName TEXT NOT NULL,
                Patient_MName TEXT NOT NULL,
                Patient_EName TEXT NOT NULL,
                Patient_BloodType TEXT NOT NULL,
                Patient_Address TEXT NOT NULL,
                Patient_DateofBirth date NOT NULL,
                Patient_Age INTEGER NOT NULL
                );
            CREATE TABLE Medicine(
                Med_ID INTEGER PRIMARY KEY NOT NULL,
                Med_BrandName TEXT NOT NULL,
                Med_GenericName TEXT NOT NULL,
                Med_Dosage TEXT NOT NULL,
                Med_Category INTEGER NOT NULL,
                FOREIGN KEY (Med_Category)
                REFERENCES MedCategory(Category_ID)
                );
            CREATE TABLE MedCategory(
                Category_ID INTEGER PRIMARY KEY NOT NULL,
                Category_Name TEXT NOT NULL,
                Category_AreaStored INTEGER NOT NULL
                );
            CREATE TABLE MedBatch(
                Batch_ID INTEGER PRIMARY KEY NOT NULL,
                Batch_Dosage INTEGER NOT NULL,
                Batch_ExpDate date NOT NULL,
                Batch_ArrivedDate date NOT NULL,
                Batch_QtyAvailable INTEGER NOT NULL,
                Batch_Medicine INTEGER NOT NULL,
                FOREIGN KEY (Batch_Medicine)
                REFERENCES Medicine(Med_ID)
                );
            CREATE TABLE MedRelease(
            Released_Qty INTEGER NOT NULL,
            Released_MedTransact INTEGER  NOT NULL,
            Released_MedBatch INTEGER NOT NULL,
                FOREIGN KEY (Released_MedTransact)
                REFERENCES MedTransaction(Medtransact_ID)
                FOREIGN KEY ( Released_MedBatch)
                REFERENCES MedBatch(Batch_ID)
            );`
, (err) => {
            if (err) {
                console.log("Error creating table: ", err);
            } else {
                console.log("Table succesfully created.");
            }
            db.close();
        });
});