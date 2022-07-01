import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <Link className="navbar-brand"to="/#">
            News
          </Link  >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> 

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><Link className="nav-link"to="/#">Home <span className="sr-only">(current)</span></Link></li>
              <li className="nav-item"><Link className="nav-link"to="/business">Buisness</Link></li>
              <li className="nav-item"><Link className="nav-link"to="/entertainment">Entertainment</Link></li>

              <li className="nav-item"><Link className="nav-link"to="/health">Health</Link></li>   
              <li className="nav-item"><Link className="nav-link"to="/science">Science</Link></li> 
              <li className="nav-item"><Link className="nav-link"to="/technology">Technology</Link></li> 
              <li className="nav-item"><Link className="nav-link"to="/sports">Sports</Link></li> 
            </ul>
    
            <img
              src="https://lh3.googleusercontent.com/pw/AM-JKLUw3_g4F2uitj-zjbd1Sn1bXBx7boIWGivpBtcIm3hAAc7uiafEg5xHUFk2yjUHX2_7CIii0BunViQ0BE-h2FGv6hsw5RofCh64SXd0gdeA7xf1mm_HgfLkjSrRM5zPFWTt4hwwDXQgHmvTO6ZwTuXswQ=w697-h929-no?authuser=0"
              className="rounded-circle"
              height="30"
              width="30"
              
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;