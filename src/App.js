
import "./App.css";
import Navbar from "./Component/NavBar";
import NewsItem from "./Component/NewsItem";
import { Component } from "react";
import News from "./Component/News";
import * as React from 'react';
export default class App extends Component {
  render() {
    return (
      <>
      
        <div>
          <Navbar/>
          <News category='sports' pageSize={20} country='in'/>
          
        </div>
      </>
    );
  }
}