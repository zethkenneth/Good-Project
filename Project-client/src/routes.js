/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";

import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";

import UserPage from "views/User.jsx";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Patient Profilling",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Patient Records",
    icon: "nc-icon nc-badge",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Inventory",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  },
  
  
  
  {
    path: "/typography",
    name: "Setting",
    icon: "nc-icon nc-settings-gear-65",
    component: Typography,
    layout: "/admin"
  },
  
];
export default routes;
