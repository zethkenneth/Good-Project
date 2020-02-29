import React from 'react';
import { Container } from 'reactstrap';

import HomepageContent from '../components/HomepageContent/HomepageContent.jsx';
import HomepageNavbar from '../components/HomepageNavbar/HomepageNavbar.jsx';
import HomepageFooter from '../components/HomepageFooter/HomepageFooter.jsx';


class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <HomepageNavbar />
                <Container>
                    <HomepageContent />
                </Container>
                <HomepageFooter fluid />
            </div>
        );
    };
}

export default Homepage;