
import React from "react";

import SettingCards from "../components/SettingCards/SettingCards.jsx"
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Course from "./Course";
import courseTable from "./courseTable";

class Setting extends React.Component {
  render() {
    return (
      <>
         <div className="content">
          <SettingCards />
         
        </div>
      </>
   );
  }
}
export default Setting;