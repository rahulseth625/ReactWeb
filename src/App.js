import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={SignUp} path="/" exact />
        <PublicRoute restricted={true} component={SignIn} path="/SignIn" exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <Route path="*" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
