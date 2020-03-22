
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
import Course from "views/Course.jsx";
import Test from "views/Test.jsx";



//settings cards link
import Department from "views/Settings/Department/Department.jsx";
import Account from "views/Settings/Account/Account.jsx";
import Employee from "views/Settings/Employee/Employee.jsx"
import Student from "views/Settings/Student/Student.jsx";
import Medicine from "views/Settings/Medicine/Medicine.jsx";
import Course from "views/Settings/Course/Course.jsx"; 

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/homepage" component={HomepageLayout} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} /> 
            <Route path="/settingaccount" component={Account} />
            <Route path="/settingcourse" component={Course} />
            <Route path="/settingmedicine" component={Medicine} />
            <Route path="/settingdepartment" component={Department} />
            <Route path="/settingstudent" component={Student} />
            <Route path="/settingemployee" component={Employee} />
            <Route path="/test" component={Test} />
      <Redirect to="/homepage" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
