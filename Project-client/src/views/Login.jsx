import React from 'react';
import { Link } from 'react-router-dom';
import wmsu from 'assets/img/wmsu.png';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render(){
        return (
            <section className="container-fluid">
                <section className="row justify-content-center">
                    <section className="col-12 col-sm-6 col-md-3">
                        <form className="form-container">
                            <div className="form-group">
                                <img id="wmsu" src={wmsu} alt="" />
                                <h1>Welcome!</h1>
                                <input
                                    
                                    type="string"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <Link to="/admin/dashboard">
                                <button
                                    
                                    type="submit"
                                    className="btn btn-primary btn-block">Log In</button></Link>
                            <a href="forgotPassword ">Forgot Password?</a>
                        </form>
                    </section>
                </section>
            </section>
        );
    };
}

export default Login;