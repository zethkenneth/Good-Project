
import React from "react";

import {
    Card,
    CardBody,
    CardFooter,
    CardTitle, 
    Row,
    Col
} from "reactstrap";
import { Link } from 'react-router-dom';

class SettingCards extends React.Component {
    render() {
        return (
      <>
            <div className="content">
                <Row>
                    <Col lg="3" md="6" sm="6">
                        <Link to="/adminsettingaccount">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-single-02" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Account</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                            </CardFooter>
                        </Card>
                        </Link>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-money-coins" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Storage</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-calendar" /> Last day
                  </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-bell-55" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Notification</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-clock" /> In the last hour
                  </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                    <Link to="/adminsettingcourse">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-align-left-2" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Course</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-clock" /> In the last hour
                  </div>
                            </CardFooter>
                        </Card>
                    </Link>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Link to="/adminsettingdepartment">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-align-left-2" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Department</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-clock" /> In the last hour
                  </div>
                            </CardFooter>
                        </Card>
                    </Link>
                    </Col>
                    
                    <Col lg="3" md="6" sm="6">
                    <Link to="/adminsettingStudent">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-badge" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Student</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-clock" /> In the last hour
                  </div>
                            </CardFooter>
                        </Card>
                        </Link>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                    <Link to="/adminsettingemployee">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-badge" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Employee</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-clock" /> In the last hour
                  </div>
                            </CardFooter>
                        </Card>
                        </Link>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                    <Link to="/adminsettingMedicine">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-planet" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Medicine</p>
                                            <CardTitle tag="p">0</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-clock" /> In the last hour
                  </div>
                            </CardFooter>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
            </>
    );
 };
}
export default SettingCards;