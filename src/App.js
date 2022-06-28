import "./App.css";
import Navbar from "./Component/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Component } from "react";
import News from "./Component/News";
export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
          
            <Switch>
          <Route path="/about"><News pageSize={20} category="entertainment" /></Route>
        </Switch>          
          </Router>
        </div>
      </>
    );
  }
}
