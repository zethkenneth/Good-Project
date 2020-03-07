
import React from "react";
import SettingTabs from "../components/SettingTabs/SettingTabs.jsx"
import SettingCards from "../components/SettingCards/SettingCards.jsx"


class Setting extends React.Component {
  render() {
    return (
      <>
         <div className="content">
          <SettingCards />
          <SettingTabs />
        </div>
      </>
   );
  }
}
export default Setting;