import React from "react";

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

class Department extends React.Component {
  constructor(){
    super();
    this.state = {
      DepartmentName: ''
    }
  }


  onDepartmentNameChange = (event) => {
    this.setState({ DepartmentName: event.target.value });
  }

  onAddDepartment = () => {
    fetch('http://localhost:3001/addDepartment', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Department_Name: this.state.DepartmentName,
      })
    }); 
  }
  render(){
    return (
      <React.Fragment>
        <div className="content" style={{marginLeft:'300px', marginTop:'150px'}}>
          
         
            
           
              <Row>
                <Col sm="10" >
                  <Card className="card-user"  style={{backgroundColor:'ghostwhite'}}>
                    <CardHeader>
                      <CardTitle tag="h5">ADD Department</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="6">
                          <FormGroup>
                              <label>Department Name</label>
                              <Input
                                onChange={this.onDepartmentNameChange}
                                placeholder="Enter Course Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                         
                         
                        </Row>
                        <Row>
                       
                          
                          
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
                            onClick={this.onAddDepartment}
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
      
    </React.Fragment>
    );
  };
}

export default Department;