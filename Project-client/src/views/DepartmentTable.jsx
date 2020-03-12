import React from "react";
import AddDepartmentModal from './AddDepartmentModal';

import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

import { Link } from 'react-router-dom';

const btnAdd={
    marginLeft:"80%",
    backgroundColor: "#0083ce"
  }
class DepartmentTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
        showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">ADD Department</CardTitle>
                  <input placeholder="Search..." type="text" class="form-control" style={{width:'200px'}}></input>
                </CardHeader>
                
              
                <button onClick={this.toggleModal} class="btn-round btn btn-primary" style={btnAdd}>Add Department</button>
                <AddDepartmentModal opened={this.state.showModal} toggle={this.toggleModal} />
                
                
                <CardBody style={{width:'1500px'}}>
                  <Table responsive>
                    <thead className="text-primary" >
                      <tr>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Course Name</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Department Name</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Action</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BS CS</td>
                        <td>ICS Department</td>
                       
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>BS CS</td>
                        <td>ICS Department</td>
                       
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>BS CS</td>
                        <td>ICS Department</td>
                       
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>BS CS</td>
                        <td>ICS Department</td>
                       
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>BS CS</td>
                        <td>ICS Department</td>
                       
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>BS CS</td>
                        <td>ICS Department</td>
                       
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>BS CS</td>
                        <td>ICS Department</td>
                       
                        <td>EDIT</td>
                      </tr>
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default DepartmentTable;
