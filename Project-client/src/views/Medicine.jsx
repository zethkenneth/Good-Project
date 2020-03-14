import React, { Component } from "react";
import AddMedicineModal from './AddMedicineModal';

import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Container, Row, Col, Table, InputGroup, InputGroupAddon, InputGroupText, Input, Pagination, PaginationItem, PaginationLink } from "reactstrap";


class Medicine extends Component {

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
        <Container>
          <Row>
            <Col md="12">
             
                
                <h1 className="title">MEDICINE</h1>

                <button onClick={this.toggleModal} className="btn-round btn btn-primary">Add Medicine</button>
                <AddMedicineModal opened={this.state.showModal} toggle={this.toggleModal} />
                  
                
                <InputGroup>
                  <Input placeholder="Search..." />
                  <InputGroupAddon addonType="append">
                    <InputGroupText><i className="nc-icon nc-zoom-split" /></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                
                
                
                  <Table responsive striped={true}>
                    <thead className="text-primary" >
                      <tr>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Department Name</th>
                        <th style={{color:'white', backgroundColor:'deepskyblue'}}>Action</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>  
                        <td>ICS Department</td>
                       
                        <td>
                          <Button className="btn btn-success btn-icon btn-sm mr-1">
                            <i className="fa fa-edit"/>
                          </Button>
                          <Button className="btn btn-danger btn-icon btn-sm">
                            <i className="fa fa-times"/>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>ICS Department</td>
                       
                        <td>
                          <Button className="btn btn-success btn-icon btn-sm mr-1">
                            <i className="fa fa-edit"/>
                          </Button>
                          <Button className="btn btn-danger btn-icon btn-sm">
                            <i className="fa fa-times"/>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>ICS Department</td>
                       
                        <td>
                          <Button className="btn btn-success btn-icon btn-sm mr-1">
                            <i className="fa fa-edit"/>
                          </Button>
                          <Button className="btn btn-danger btn-icon btn-sm">
                            <i className="fa fa-times"/>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>ICS Department</td>
                       
                        <td>
                          <Button className="btn btn-success btn-icon btn-sm mr-1">
                            <i className="fa fa-edit"/>
                          </Button>
                          <Button className="btn btn-danger btn-icon btn-sm">
                            <i className="fa fa-times"/>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>ICS Department</td>
                       
                        <td>
                          <Button className="btn btn-success btn-icon btn-sm mr-1">
                            <i className="fa fa-edit"/>
                          </Button>
                          <Button className="btn btn-danger btn-icon btn-sm">
                            <i className="fa fa-times"/>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>ICS Department</td>
                       
                        <td>
                          <Button className="btn btn-success btn-icon btn-sm mr-1">
                            <i className="fa fa-edit"/>
                          </Button>
                          <Button className="btn btn-danger btn-icon btn-sm">
                            <i className="fa fa-times"/>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>ICS Department</td>
                       
                        <td>
                          <Button className="btn btn-success btn-icon btn-sm mr-1">
                            <i className="fa fa-edit"/>
                          </Button>
                          <Button className="btn btn-danger btn-icon btn-sm">
                            <i className="fa fa-times"/>
                          </Button>
                        </td>
                      </tr>
                      
                    </tbody>
                  </Table>

                  <Pagination size="sm" aria-label="Department page navigation" className="mt-1" listClassName="justify-content-end">
                    <PaginationItem>
                      <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#" />
                    </PaginationItem>
                  </Pagination>
                
            
            </Col>
            
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Medicine;
