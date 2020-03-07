/*!

=========================================================
* Paper Dashboard React - v1.1.0
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

class AccountRecords extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Medical Transaction</CardTitle>
                  <input placeholder="Search..." type="text" class="form-control" style={{width:'200px'}}></input>
                </CardHeader>
                
                 
                  
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary" >
                      <tr>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>ID No.</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>LastName</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>FirstName</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>MiddleName</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Sex</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>BirthDay</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Mobile No.</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Course</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Year</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Section</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Department</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Diagnosis</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Gro</td>
                        <td>Knee</td>
                        <td>Woot</td>
                        <td>Male</td>
                        <td>09091232223</td>
                        <td>January 1, 1999</td>
                        <td>BS Architecture></td>
                        <td>1st</td>
                        <td>A</td>
                        <td>Department of Architecture</td>
                        <td>Flu</td>
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Gro</td>
                        <td>Knee</td>
                        <td>Woot</td>
                        <td>Male</td>
                        <td>09091232223</td>
                        <td>January 1, 1999</td>
                        <td>BS Architecture></td>
                        <td>1st</td>
                        <td>A</td>
                        <td>Department of Architecture</td>
                        <td>Flu</td>
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Gro</td>
                        <td>Knee</td>
                        <td>Woot</td>
                        <td>Male</td>
                        <td>09091232223</td>
                        <td>January 1, 1999</td>
                        <td>BS Architecture></td>
                        <td>1st</td>
                        <td>A</td>
                        <td>Department of Architecture</td>
                        <td>Flu</td>
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Gro</td>
                        <td>Knee</td>
                        <td>Woot</td>
                        <td>Male</td>
                        <td>09091232223</td>
                        <td>January 1, 1999</td>
                        <td>BS Architecture></td>
                        <td>1st</td>
                        <td>A</td>
                        <td>Department of Architecture</td>
                        <td>Flu</td>
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Gro</td>
                        <td>Knee</td>
                        <td>Woot</td>
                        <td>Male</td>
                        <td>09091232223</td>
                        <td>January 1, 1999</td>
                        <td>BS Architecture></td>
                        <td>1st</td>
                        <td>A</td>
                        <td>Department of Architecture</td>
                        <td>Flu</td>
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Gro</td>
                        <td>Knee</td>
                        <td>Woot</td>
                        <td>Male</td>
                        <td>09091232223</td>
                        <td>January 1, 1999</td>
                        <td>BS Architecture></td>
                        <td>1st</td>
                        <td>A</td>
                        <td>Department of Architecture</td>
                        <td>Flu</td>
                        <td>EDIT</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Gro</td>
                        <td>Knee</td>
                        <td>Woot</td>
                        <td>Male</td>
                        <td>09091232223</td>
                        <td>January 1, 1999</td>
                        <td>BS Architecture></td>
                        <td>1st</td>
                        <td>A</td>
                        <td>Department of Architecture</td>
                        <td>Flu</td>
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

export default AccountRecords;
