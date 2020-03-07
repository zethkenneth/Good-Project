import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      signInUsername: '',
      signInPassword: ''
    }
  }

  onUsernameChange = event => {
    this.setState({
      signInUsername: event.target.value
    })
  }

  onPasswordChange = event => {
    this.setState({
      signInPassword: event.target.value
    })
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/logint', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Account_Username: this.state.signInUsername,
        Account_Password: this.state.signInPassword
      })
    });
  }

  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  // console.log(props.opened);
  render() {
    const { signInUsername, signInPassword } = this.state
    return (
      <div>
        <Form>
        <Modal isOpen={this.props.opened} toggle={this.props.toggle} >
          <ModalHeader toggle={this.props.toggle}>Welcome</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Input 
                value={signInUsername}
                type="text"
                className="form-control"
                onChange={this.onUsernameChange}
                placeholder="Username"
              />
            </FormGroup>

            <FormGroup>
              <Input 
                value={signInPassword}
                type="password"
                className="form-control"
                onChange={this.onPasswordChange}
                placeholder="Password"
              />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Link to="/admin/dashboard"> <Button color="primary" onClick={this.onSubmitSignIn}>Login</Button></Link>
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Form>
      </div>
    );

  }
}

export default LoginModal;