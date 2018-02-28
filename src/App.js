import React from "react";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/Sign-up" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
export default App;
