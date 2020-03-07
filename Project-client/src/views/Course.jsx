import React from "react";
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

class Course extends React.Component {
  constructor(){
    super();
    this.state = {
      
    }
  }


  
  render(){
    return (
      <>
        <div className="content">
          
         
            
           
              <Row>
                <Col sm="12">
                  <Card className="card-user">
                    <CardHeader>
                      <CardTitle tag="h5">Patient Information</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="3">
                          <FormGroup>
                              <label>ID No.</label>
                              <Input
                                
                                placeholder="Enter ID No."
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
                        <Col className="pr-1" md="3">
                           <FormGroup>
                             <label>Sex</label>
                              <select className="form-control">
                               
                              <option>Select..</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                             
                           </FormGroup>
                         </Col>

                         <Col className="pr-1" md="3">
                           <FormGroup>
                             <label>Birth Date</label>
                             <input type="date" className="form-control" placeholder="month"/>
                           </FormGroup>
                         </Col>
                        </Row>

                        <Row>
                        <Col className="pr-1" md="3">
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
                        
                         <Col className="pr-1" md="3">
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
            
            
         
      </div>
      
    </>
    );
  };
}

export default Course;