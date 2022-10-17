import React, { Component } from "react";
import './Header.css'
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar" style={{backgroundColor: '#000000e0'}}>
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to ='/' className="navbar-brand" href="#" style={{color: '#e5c093', fontSize: '30px', fontWeight: 'bold'}}>
                Zomato &nbsp; 
                <div className="btn btn-info">Home</div>
              </Link>
              
            </div>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
