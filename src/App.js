import "./App.css";
import Navbar from "./Component/NavBar";
import LoadingBar from 'react-top-loading-bar';
import { Component } from "react";
import News from "./Component/News";
import * as React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
export default class App extends Component {

  state={progress: 0}
  setProgress=(progress)=>{this.setState({progress: progress})}
  render() {
    return (
      <>  
        <div>
          <Router>      <LoadingBar
           
           progress={this.state.progress}
           height={10}
           color=' #f11946'
          
         />
            <Navbar />
      
            <Routes > 
              <Route exact path="/" element={<News setProgress={this.setProgress} key ="general" pageSize={12} country="in" category="general" />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} key ="health" pageSize={12} country="in" category="health" />} /> 
              <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business"   pageSize={12} country="in" category="business" />} /> 
              <Route exact path="/science" element={<News setProgress={this.setProgress} key ="science"  pageSize={12} country="in" category="science" />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment"  pageSize={12} country="in" category="entertainment" />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology"  pageSize={12} country="in" category="technology" />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports"  pageSize={12} country="in" category="sports" />} />

            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
