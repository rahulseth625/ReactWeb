import React, { Component } from "react";
import "../css/SignIn.css";
import { Redirect, Link } from "react-router-dom";


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_email: "",
                user_password: ""
            }
        };
    }


    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };

    login = event => {
        let user_email = this.state.loginParams.user_email;
        let user_password = this.state.loginParams.user_password;

        let user = JSON.parse(localStorage.getItem('user'));

                if (user_email === user.email && user_password === user.password) {
                    localStorage.setItem("token", "T");
                    this.setState({
                        islogged: true
                    });
                    alert('login Successfully');
                    this.props.history.push('/dashboard')
                }else{
                    alert('email or password are invalid');
                }

                event.preventDefault();

    };


    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.login} className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div className="row">
                            <div className="col">
                            <label>Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    onChange={this.handleFormChange}
                                    placeholder="Enter Email"
                                    required
                                />
                            <label>Password</label>
                                <input
                                    type="password"
                                    name="user_password"
                                    onChange={this.handleFormChange}
                                    placeholder="Enter Password"
                                    required
                                />
                                <input type="submit" value="SignIn" />
                            </div>
                        </div>
                    </form>
                </div>

                <p>
                    <Link to={'/'}>New User Click Here</Link>
                </p>
            </div>
        );
    }
}

export default SignIn;