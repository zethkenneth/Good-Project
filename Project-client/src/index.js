
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

// import Department from "views/Department.jsx";
import Department from "views/Department.jsx";
import Account from "views/Account.jsx";
import Employee from "views/Employee.jsx";
import Student from "views/Student";
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
      
      <Route path="/adminsettingcourse" component={Course} />
      <Route path="/adminsettingaddemployee" component={addemployee}/>
      <Route path="/adminsettingdepartment" component={Department} />
      
      <Route path="/adminsettingstudent" component={Student}/>
      <Route path="/adminsettingemployee" component={Employee}/>
      <Route path="/adminsettingMedicine" component={Medicine}/>
      <Redirect to="/homepage" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
