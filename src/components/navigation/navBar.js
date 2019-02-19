import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";
const NavBar = props => (
  <header className="app-header">
    <div className="app-title">ProMix</div>
    <nav className="app-nav-bar">
      {/* <NavLink className="app-link" activeClassName="active" to="/Home">
        Home
      </NavLink>
      
      <NavLink className="app-link" activeClassName="active" to="/Application">
        Application
      </NavLink> */}
      
      {/* <NavLink activeClassName="active" to="/contactDetails/5a5664025c3abdad6f5e098c">ContactDetails</NavLink> */}
    </nav>
  </header>
);
export default NavBar;
