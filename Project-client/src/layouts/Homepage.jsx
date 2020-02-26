import React from 'react';
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
                <HomepageContent />
                <HomepageFooter />
            </div>
        );
    };
}

export default Homepage;