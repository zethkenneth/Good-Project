import React from 'react';
import { Link } from 'react-router-dom';
import wmsu from 'assets/img/wmsu.png';

class Login extends React.Component {
 constructor(){
        super();
        this.state = {
            signInUsername: '',
            signInPassword: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({signInUsername: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }


    onSubmitSignIn = () => { 
        fetch('http://localhost:3001/logint',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                Account_Username: this.state.signInUsername,
                Account_Password: this.state.signInPassword
            })
        }); 
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
                                    onChange={this.onUsernameChange}
                                    type="string"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Username"
                                    required
                                />
                                
                            </div>
                            <div className="form-group">
                                <input onChange={this.onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <Link to="/admin/dashboard">
                                <button onClick={this.onSubmitSignIn}
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