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

import PatientRecords from "views/PatientRecords.jsx";
import Setting from "views/Setting.jsx";
import Inventory from "views/Inventory.jsx";

import PatientInfo from "views/PatientInfo.jsx";




var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/patient-transaction",
    name: "Patient Transaction",
    icon: "nc-icon nc-single-02",
    component: PatientInfo, 
    layout: "/admin"
  },

 
  {
    path: "/patient-records",
    name: "Patient Records",
    icon: "nc-icon nc-badge",
    component: PatientRecords,
    layout: "/admin"
  },
  {
    path: "/inventory",
    name: "Inventory",
    icon: "nc-icon nc-tile-56",
    component: Inventory,
    layout: "/admin"
  },
  
  
  
  {
    path: "/settings",
    name: "Setting",
    icon: "nc-icon nc-settings-gear-65",
    component: Setting,
    layout: "/admin"
  },
  
];
export default routes;
