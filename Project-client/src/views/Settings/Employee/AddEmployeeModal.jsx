import React, { Component } from 'react';

import {
  Form, 
  FormGroup, 
  Input, 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody
  } from 'reactstrap';

class AddDepartmentModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      departmentName: ''
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
        Department_Name: this.state.departmentName,
      })
    }); 
  }

  render() {
    // const { signInUsername, signInPassword } = this.state
    return (
      <React.Fragment>
      <Modal isOpen={this.props.opened} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Add Employee</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <label for="departmentName">Employee Name</label>
              <Input
                onChange={this.onDepartmentNameChange}
                placeholder="Enter Employee Name"
                type="text"
                id="departmentName"
              />
            </FormGroup>
              
            <Button
              className="btn-round"
              color="danger"
              type="submit" 
              onClick={this.props.toggle}>
              CANCEL
            </Button>
           
            <Button
              onClick={this.onAddDepartment}
              className="btn-round"
              color="primary"
              type="submit">
              SAVE
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
    );
  }
}

export default AddDepartmentModal;