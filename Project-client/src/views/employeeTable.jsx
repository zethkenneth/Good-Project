/*!

=========================================================
* Paper Dashboard React - vBS CS.BS CS.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";
import Course from "./Course";
import { Link } from 'react-router-dom';

const btnAdd={
    marginLeft:"80%",
    backgroundColor: "#0083ce"
  }
class employeeTable extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">ADD STUDENT</CardTitle>
                  <input placeholder="Search..." type="text" class="form-control" style={{width:'200px'}}></input>
                </CardHeader>
                
                <Link to="/adminsettingcourse">
                <button type="submit" class="btn-round btn btn-primary" style={btnAdd}>Add Course</button>
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

export default employeeTable;
