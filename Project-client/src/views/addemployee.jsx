import React from "react";

// reactstrap components
import {
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
const btnAdd={
 
  backgroundColor: "#0083ce"
}

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
                      <CardTitle tag="h5">ADD EMPLOYEE</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="6">
                          <FormGroup>
                              <label>Employee Name</label>
                              <Input
                                
                                placeholder="Enter Employee Name"
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
                              type="submit"
                              style={btnAdd}
                              >
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