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
import React, { useState } from "react";
import classnames from 'classnames';


// reactstrap components
import {
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  CardText,
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

const PatientInfo = (props) => {


  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    return (
      <>
        <div className="content">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Moar Tabs
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Card className="card-user">
                    <CardHeader>
                      <CardTitle tag="h5">Patient Information</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="4">
                          <FormGroup>
                              <label>ID No.</label>
                              <Input
                                
                                placeholder="Enter ID No."
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                         <Col className="pr-1" md="2">
                           <FormGroup>
                             <label>Sex</label>
                              <select className="form-control">
                               
                              <option>Select..</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                             
                           </FormGroup>
                         </Col>

                         <Col className="pr-1" md="2">
                           <FormGroup>
                             <label>Birth Date</label>
                             <input type="date" className="form-control" placeholder="month"/>
                           </FormGroup>
                         </Col>
                         
                        </Row>
                        <Row>
                          <Col className="pr-1" md="4">
                            <FormGroup>
                              <label>First Name</label>
                              <Input
                                placeholder="First Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="4">
                            <FormGroup>
                              <label>Last Name</label>
                              <Input
                               
                                placeholder="Last Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="px-1" md="3">
                            <FormGroup>
                              <label>Middle Name</label>
                              <Input
                               
                                placeholder="Middle Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                        <Col className="pr-1" md="4">
                           <FormGroup>
                             <label>College</label>
                              <select className="form-control">
                               
                              <option>Select..</option>
                                <option>ICS</option>
                                <option>CET</option>
                                <option>CTE</option>
                                <option>CN</option>
                              </select>
                           </FormGroup>
                         </Col>
                        
                         <Col className="pr-1" md="4">
                           <FormGroup>
                             <label>Course</label>
                              <select className="form-control">
                               
                              <option>Select..</option>
                                <option>Department of Computer Engineering</option>
                                <option>Department of Computer Education</option>
                                <option>Department of Civil Engineering</option>
                                <option>CN</option>
                              </select>
                             
                           </FormGroup>
                         </Col>
                         <Col className="pr-1" md="3">
                           <FormGroup>
                             <label>Year</label>
                              <select className="form-control">
                               
                              <option>Select..</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                             
                           </FormGroup>
                         </Col>
                        </Row>
                       
                        <Row>
                          <div className="update ml-auto mr-auto">
                          <Row>
                          <div className="update ml-auto mr-auto">
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit">
                              Next
                            </Button>
                          </div>
                        </Row>
                          </div>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
      </div>
    </>
    );
  }

export default PatientInfo;
