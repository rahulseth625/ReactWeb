import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../css/Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };

  user = JSON.parse(localStorage.getItem('user'));

  render() {
    if (this.state.islogout) {
      return <Redirect to="/SignIn" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}`}>Dashboard</Link>
          </li>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>

        <div>
        <p> <b>Welcome {this.user.name} , Your Email Id is {this.user.email}</b> </p>
        </div>
      </div>
    );
  }
}
 
export default withRouter(Dashboard);
