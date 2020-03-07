/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
/**style for header -vnc */
  const headerstyle={
    color: "#ffffff",
    backgroundColor: "#3399ff"
  }
/**style for LOAD buttons -vnc */
  const btnstyle={
    color:"primary",
    size:"sm",
    marginLeft:"10px",
    backgroundColor: "#0083ce",
    
  }
  /**style for ADD Med Btn -vnc */
  const btnAdd={
    marginLeft:"80%",
    backgroundColor: "#0083ce"
  }

  return (
    <div className="content">
       <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" style={{color:'#0083ce'}}><b>Medicine</b>List</CardTitle>
                  <button type="submit" class="btn-round btn btn-primary" style={btnAdd}>Add Medicine</button>
                  <input placeholder="Search..." type="text" class="form-control" style={{width:'200px'}}></input>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr style={headerstyle}>
                        <th>Brand Name</th>
                        <th>Generic Name</th>
                        <th>Dose</th>
                        <th>Unit</th>
                        <th>Storage Area</th>
                        <th>Expiry Date</th>
                        <th>Quantity</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<button  type="submit"  class="btn-round btn btn-primary" style={btnstyle}  onClick={toggle}>{buttonLabel}Load</button></td>
                        <td>Remarks</td>
                      </tr>
                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<button  type="submit"  class="btn-round btn btn-primary" style={btnstyle}  onClick={toggle}>{buttonLabel}Load</button></td>
                        <td>Remarks</td>
                      </tr>

                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<button  type="submit"  class="btn-round btn btn-primary" style={btnstyle}  onClick={toggle}>{buttonLabel}Load</button></td>
                        <td>Remarks</td>
                      </tr>

                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<button  type="submit"  class="btn-round btn btn-primary"style={btnstyle}  onClick={toggle}>{buttonLabel}Load</button></td>
                        <td>Remarks</td>
                      </tr>

                     <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<button  type="submit"  class="btn-round btn btn-primary" style={btnstyle}  onClick={toggle}>{buttonLabel}Load</button></td>
                        <td>Remarks</td>
                      </tr>

                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<button  type="submit"  class="btn-round btn btn-primary" style={btnstyle}  onClick={toggle}>{buttonLabel}Load</button></td>
                        <td>Remarks</td>
                      </tr>
                    </tbody>
                  </Table>
                  
                  
                  
                </CardBody>
              </Card>
            </Col>
          </Row> 
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Load Medicine</ModalHeader>
              <ModalBody>
              Load form dzai
              </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Save</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
