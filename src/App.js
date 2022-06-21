import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/NavBar";
import NewsItem from "./Component/NewsItem";
import { Component } from "react";
import News from "./Component/News";
export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <News/>
        </div>
      </>
    );
  }
}
