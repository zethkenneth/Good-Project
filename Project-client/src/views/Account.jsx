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

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: '',
      Password: '',
      AccountName: '',
      AccountType: ''
    } 
  }



  onUsernameChange = (event) => {
    this.setState({ Username: event.target.value });
    console.log(this.state.Username);
  }

  onPasswordChange = (event) => {
    this.setState({ Password: event.target.value });
    console.log(this.state.Password);
  }

  onAccountNameChange = (event) => {
    this.setState({ AccountName: event.target.value });
    console.log(this.state.AccountName);
  }

  onAccountTypeChange = (event) => {  
    this.setState({ AccountType: event.target.value });
    console.log(this.state.AccountType);
  }

  
  onSubmitSignIn = () => { 
        fetch('http://localhost:3001/logint',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                Account_Name: this.state.AccountName,
                Account_UserType: this.state.AccountType,
                Account_Username: this.state.Username,
                Account_Password: this.state.Password,
            })
        }); 
    }



  render(){
    return (
      <>
        <div className="content" style={{marginLeft:'300px', marginTop:'150px'}}>
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
                          <label>Username</label>
                          <Input
                            onChange={this.onUsernameChange}
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            onChange={this.onPasswordChange}
                            placeholder="Password"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Account Name</label>
                          <Input
                            onChange={this.onAccountNameChange}
                            placeholder="Account Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Account Status</label>
                          <select className="form-control">
                            <option>1</option>
                            <option>0</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="5">
                      <FormGroup>
                          <label>Account Type</label>
                        <select className="form-control" onChange={this.onAccountTypeChange}>
                            <option>Select...</option>
                            <option>Admin</option>
                            <option>Clinic Staff</option>
                            <option>Clinic Assistant</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Row>
                          <div className="update ml-auto mr-auto">
                            <Button
                              onClick={this.onSubmitAddAccount}
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
      </div>
    </>
    )
  };
}

export default Account;