import React, { useState } from "react";
import classnames from 'classnames';


// reactstrap components
import {
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Button,
  Card,
  CardHeader,
  CardBody,
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
                Account
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >Storage
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >Notification
              </NavLink>
            </NavItem>

          </Nav>
          <TabContent activeTab={activeTab}>
            
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Card className="card-user">
                    <CardHeader>
                      <CardTitle tag="h5">Account</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="5">
                          <FormGroup>
                              <label>Account ID</label>
                              <Input
                                
                                placeholder="Account ID"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                         
                          <Col className="pr-1" md="2">
                          <FormGroup>
                          <label>Account Type</label>
                              <select className="form-control">
                              <option>Select...</option>
                                <option>Admin</option>
                                <option>Clinic Staff</option>
                                <option>Clinic Assistant</option>
                               
                              </select>
                          </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                        <Col className="pr-1" md="5">
                            <FormGroup>
                              <label>Account Name</label>
                              <Input
                               
                                placeholder="Account Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          
                          
                          <Col className="pr-1" md="5">
                            <FormGroup>
                              <label>Account Status</label>
                              <Input
                               
                                placeholder="Account Status"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col className="pr-1" md="5">
                            <FormGroup>
                              <label>Username</label>
                              <Input
                               
                                placeholder="Username"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          
                          <Col className="pr-1" md="5">
                            <FormGroup>
                              <label>Password</label>
                              <Input
                               
                                placeholder="Password"
                                type="text"
                              />
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
                              Save
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
                <Col sm="12">
                  <Card className="card-user">
                    <CardHeader>
                      <CardTitle tag="h5">Storage</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="3">
                          <FormGroup>
                              <label>Faculty ID No.</label>
                              <Input
                                placeholder="Enter ID No."
                                type="text"
                              />
                          </FormGroup>
                          </Col>
                         
                   
                       
                         

                         <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Mobile Number</label>
                              <Input
                                placeholder="Mobile Number"
                                type="text"
                              />
                            </FormGroup>
                          </Col>

                        </Row>
                        <Row>
                        <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Last Name</label>
                              <Input
                               
                                placeholder="Last Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>First Name</label>
                              <Input
                                placeholder="First Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          
                          <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Middle Name</label>
                              <Input
                               
                                placeholder="Middle Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>

                          <Col className="pr-1" md="2">
                            <FormGroup>
                              <label>Extension Name</label>
                              <Input
                               
                                placeholder="Ext Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        
                        <Row>
                        
                        <CardHeader>
                      <CardTitle tag="h5">Guardian's Information (Optional)</CardTitle>
                    </CardHeader>
                    </Row>
          
                    <Row>
                        <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Guardian's Full Name</label>
                              <Input
                                placeholder="Last,  First,  Middle"
                                type="text"
                              />
                            </FormGroup>
                          </Col>

                          <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Mobile Number</label>
                              <Input
                               
                                placeholder="Mobile Number"
                                type="text"
                              />
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

            <TabPane tabId="3">
            <Row>
                <Col sm="12">
                  <Card className="card-user">
                    <CardHeader>
                      <CardTitle tag="h5">Diagnosis</CardTitle>
                    </CardHeader>
                    <CardBody>

                      <Form>
                        <Row>
                          <Col className="pr-1" md="3">
                          <FormGroup>
                          <label>Illness</label>
                              <select className="form-control">
                              <option>Select...</option>
                                <option>Fever</option>
                                <option>Colds</option>
                                <option>Asthma</option>
                                <option>Injuries</option>
                                <option>Headache</option>
                                <option>High Blood Pressure</option>
                              </select>
                          </FormGroup>
                          </Col>
    
                        <Col className="pr-1" md="2">
                            <FormGroup>
                              <label>Blood Pressure (Optional)</label>
                              <Input
                               
                                placeholder="mmHg"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-1" md="2">
                            <FormGroup>
                              <label>Pulse Rate (Optional)</label>
                              <Input
                                placeholder="Beats/min"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          
                          <Col className="pr-1" md="2">
                            <FormGroup>
                              <label>Body Temp.(Optional)</label>
                              <Input
                                placeholder="Celcius"
                                type="text"
                              />
                            </FormGroup>
                          </Col>

                          <Col className="pr-1" md="2">
                            <FormGroup>
                              <label>Sugar Level (Optional)</label>
                              <Input
                                placeholder="Sugar Level"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <CardHeader>
                      <CardTitle tag="h5">Nursing Care</CardTitle>
                    </CardHeader>

                        <Row>
                        <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Brand Name</label>
                              <Input
                                placeholder="Generic Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
 
                        <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Generic Name</label>
                              <Input
                                placeholder="Generic Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
 
                        <Col className="pr-1" md="2">
                            <FormGroup>
                              <label>Dose</label>
                              <Input
                                placeholder="Dose"
                                type="number"
                              />
                            </FormGroup>
                          </Col>

                          <Col className="pr-1" md="2">
                          <FormGroup>
                          <label>Unit</label>
                              <select className="form-control">
                              <option>Select...</option>
                                <option>mg (milligram)</option>
                                <option>g (gram)</option>
                                <option>ml (milliliter)</option>
                                <option>oz (ounce)</option>
                              </select>
                          </FormGroup>
                          </Col>

                          <Col className="pr-1" md="1">
                            <FormGroup>
                              <label>Quantity</label>
                              <Input
                                placeholder="Qty"
                                type="number"
                              />
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
                              Done
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

          </TabContent>
          <AccTable/>
      </div>
    </>
    );
  }
export default PatientInfo;