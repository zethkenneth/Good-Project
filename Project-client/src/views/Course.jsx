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
        <div className="content" style={{marginLeft:'300px', marginTop:'150px'}}>
          
         
            
           
              <Row>
                <Col sm="10" >
                  <Card className="card-user"  style={{backgroundColor:'ghostwhite'}}>
                    <CardHeader>
                      <CardTitle tag="h5">ADD COURSE</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="6">
                          <FormGroup>
                              <label>Course Name</label>
                              <Input
                                
                                placeholder="Enter Course Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                         
                         
                        </Row>
                        <Row>
                       
                          
                          
                        </Row>
                        <Row>
                        <Col className="pr-1" md="6">
                           <FormGroup>
                             <label>Department</label>
                              <select className="form-control">
                               
                              <option>Select..</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                             
                           </FormGroup>
                         </Col>

                        
                        </Row>


                       
                        <Row>
                          <div className="update ml-auto mr-auto" >
                          <Row>
                          <div className="update ml-auto mr-auto">
                          <Button
                              className="btn-round"
                              color="DANGER"
                              type="submit" >
                              CANCEL
                            </Button>
                         
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit">
                              SAVE
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