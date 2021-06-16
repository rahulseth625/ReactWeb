import React, { Component } from 'react';
import '../css/SignIn.css';
import { Redirect, Link } from "react-router-dom";

export default class SignUp extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        alert('SignUp Successfully');
        e.target.reset();
        this.props.history.push('/SignIn')
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                password: this.userData.password
            })
        } else {
            this.setState({
                name: '',
                email: '',
                password: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                        <div className="row">
                            <div className="col">
                                <label>Name</label>
                                <input type="text" onChange={this.onChangeName} placeholder="Enter Name" required />
                                <label>Email</label>
                                <input type="email" onChange={this.onChangeEmail} placeholder="Enter Email" required />
                                <label>Password</label>
                                <input type="password" onChange={this.onChangePassword} placeholder="Enter Password" required />
                            </div>
                        </div>
                        <button type="submit" style = {{ width:1245, marginLeft : 38 }} className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>

                <p>
                    <Link to={'/SignIn'}>Click Here To LogIn</Link>
                </p>
            </div>
        )
    }
}
