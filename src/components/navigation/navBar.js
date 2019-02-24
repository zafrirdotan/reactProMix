import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import './NavBar.scss';

const NavBar = props => (
  <header className="app-header">
    <IconButton color="inherit" aria-label="Menu">
      <Icon fontSize="large" color="primary">
        menu
      </Icon>
    </IconButton>
    <div className="app-title">ProMix</div>
    {/* <nav className="app-nav-bar"> */}
    {/* <NavLink className="app-link" activeClassName="active" to="/Home">
        Home
      </NavLink>
      
      <NavLink className="app-link" activeClassName="active" to="/Application">
        Application
      </NavLink> */}

    {/* <NavLink activeClassName="active" to="/contactDetails/5a5664025c3abdad6f5e098c">ContactDetails</NavLink> */}
    {/* </nav> */}
    <div className="place-holder" />
  </header>
);
export default NavBar;
