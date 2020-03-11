
import React from "react";


import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

import { Link } from 'react-router-dom';

const btnAdd={
    marginLeft:"80%",
    backgroundColor: "#0083ce"
  }
class AccountTable extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">ADD Account</CardTitle>
                  <input placeholder="Search..." type="text" class="form-control" style={{width:'200px'}}></input>
                </CardHeader>
                
              <Link to="/adminsettingaccount">
                <button type="submit" class="btn-round btn btn-primary" style={btnAdd}>Add Account</button>
                </Link>
                
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
      </>
    );
  }
}

export default AccountTable;
