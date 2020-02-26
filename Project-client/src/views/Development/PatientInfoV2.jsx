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
import React from "react";


// reactstrap components
import {
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col

} from "reactstrap";

class PatientInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        hTabs: "ht1",
    };
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Nav pills className="nav-pills-primary">
              <NavItem>
                  <NavLink
                      className={this.state.hTabs === "ht1" ? "active":""}
                      onClick={() => this.setState({hTabs: "ht1"})}
                  >
                      Profile
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink
                      className={this.state.hTabs === "ht2" ? "active":""}
                      onClick={() => this.setState({hTabs: "ht2"})}
                  >
                      Settings
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink
                      className={this.state.hTabs === "ht3" ? "active":""}
                      onClick={() => this.setState({hTabs: "ht3"})}
                  >
                      Options
                  </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.hTabs} className="tab-space">
                <TabPane tabId="ht1">
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                    <br/><br/>
                    Dramatically visualize customer directed convergence without revolutionary ROI.
                </TabPane>
                <TabPane tabId="ht2">
                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                    <br/><br/>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions.
                </TabPane>
                <TabPane tabId="ht3">
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                    <br/><br/>
                    Dynamically innovate resource-leveling customer service for state of the art customer service.
                </TabPane>
            </TabContent>
          </Row>
        </div>
      </>
    );
  }
}

export default PatientInfo;
