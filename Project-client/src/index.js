
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.jsx";
import HomepageLayout from "layouts/Homepage.jsx";
import LoginLayout from "views/Login.jsx";
import Course from "views/Course.jsx";
import courseTable from "views/courseTable.jsx";
import studentTable from "views/studentTable.jsx";

// import Department from "views/Department.jsx";
import Department from "views/Department.jsx";
import Account from "views/Account.jsx";
import AccountTable from "views/Account.jsx";
import employeeTable from "views/Employee.jsx";
import addstudent from "views/addstudent";
import addemployee from "views/addemployee";
import Medicine from "views/Medicine.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/homepage" component={HomepageLayout} />
      <Route path="/login" component={LoginLayout} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} /> 
      <Route path="/adminsettingaccount" component={Account} />
      <Route path="/adminsettingaccountTable" component={AccountTable} /> 
      <Route path="/adminsettingcourse" component={Course} />
      <Route path="/adminsettingaddstudent" component={addstudent}/>
      <Route path="/adminsettingaddemployee" component={addemployee}/>
      <Route path="/adminsettingcourseTable" component={courseTable}/>
      <Route path="/adminsettingdepartment" component={Department} />
      <Route path="/adminsettingstudentTable" component={studentTable}/>
      <Route path="/adminsettingemployeeTable" component={employeeTable}/>
      <Route path="/adminsettingMedicineTable" component={Medicine} />
      <Redirect to="/homepage" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
