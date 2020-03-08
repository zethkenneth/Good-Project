
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
import employeeTable from "views/employeeTable";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/homepage" component={HomepageLayout} />
      <Route path="/login" component={LoginLayout} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />  
      <Route path="/adminsettingcourse" component={Course} />
      <Route path="/adminsettingcourseTable" component={courseTable}/>
      <Route path="/adminsettingstudentTable" component={studentTable}/>
      <Route path="/adminsettingemployeeTable" component={employeeTable}/>
      <Redirect to="/homepage" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
