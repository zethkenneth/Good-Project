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

class SettingTabs extends React.Component {
  constructor(){
    super();
    this.state = {
      activeTab: '1',
      Username: '',
      Password: '',
      AccountName: '',
      AccountType: ''
    }
  }  

 toggle = (tab) => {
    if(this.state.activeTab !== tab){
      this.setState({activeTab: tab});
    }
  }

  onUsernameChange = (event) => {
    this.setState({ Username: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ Password: event.target.value });
  }

  onAccountNameChange = (event) => {
    this.setState({ AccountName: event.target.value });
  }

  onAccountTypeChange = (event) => {
    this.setState({ AccountType: event.target.value });
  }



  onSubmitAddAccount = () => {
    fetch('http://localhost:3001/admin/settings', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Account_Username: this.state.Username,
        Account_Password: this.state.Password,
        Account_Name: this.state.AccountName,
        Account_UserType: this.state.AccountType
      })
    });
  }
  render(){
    return (
      <>
        <div className="content">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Account
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >Storage
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >Notification
              </NavLink>
            </NavItem>

          </Nav>
        <TabContent activeTab={this.state.activeTab}>
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
                          <FormGroup >
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
            </TabPane>
            
            
            <TabPane tabId="2">
            </TabPane>

            <TabPane tabId="3">
            </TabPane>

          </TabContent>
         
      </div>
    </>
    );
  };
}
export default SettingTabs;