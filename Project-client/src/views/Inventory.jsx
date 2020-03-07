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

  return (
    <div className="content">
       <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Medicine List</CardTitle>
                  <input placeholder="Search..." type="text" class="form-control" style={{width:'200px'}}></input>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Brand Name</th>
                        <th>Generic Name</th>
                        <th>Dosage</th>
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
                       <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                        <td>Remarks</td>
                      </tr>

                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                        <td>Remarks</td>
                      </tr>

                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                        <td>Remarks</td>
                      </tr>

                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                        <td>Remarks</td>
                      </tr>

                     <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                        <td>Remarks</td>
                      </tr>

                      <tr>
                        <td>Biogesic</td>
                        <td>Paracetamol</td>
                        <td>50</td>
                        <td>mg</td>
                        <td>Storage B</td>
                        <td>3/20/20</td>
                       <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                        <td>Remarks</td>
                      </tr>
                    </tbody>
                  </Table>
                  <button type="submit" class="btn-round btn btn-primary" >Add Medicine</button>
                  
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
