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
                        <th>Storage Area</th>
                        <th>Expiry Date</th>
                        <th>Quantity</th>
                        
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Bluh</td>
                       <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                       
                        <td>Bluh</td>
                      </tr>
                      <tr>
                      <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Bluh</td>
                        <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                       
                       <td>Bluh</td>
                      </tr>
                      <tr>
                      <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Bluh</td>
                        <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                       
                       <td>Bluh</td>
                      </tr>
                      <tr>
                      <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Bluh</td>
                        <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                       
                       <td>Bluh</td>
                      </tr>
                      <tr>
                      <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Bluh</td>
                        <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                       
                       <td>Bluh</td>
                      </tr>
                      <tr>
                      <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Bluh</td>
                        <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                       
                       <td>Bluh</td>
                      </tr>
                      <tr>
                      <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Bluh</td>
                        <td>49<Button color="primary" size="sm" style={{marginLeft:'10px'}}  onClick={toggle}>{buttonLabel}Load</Button></td>
                       
                        <td>Bluh</td>
                      </tr>
                    </tbody>
                  </Table>
                  <button type="submit" class="btn-round btn btn-primary" >Add Medicine</button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row> 
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
