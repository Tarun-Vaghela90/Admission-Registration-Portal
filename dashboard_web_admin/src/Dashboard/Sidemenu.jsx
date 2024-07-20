import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

const Sidemenu = () => {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home">
      <div className="sidebar-sticky"></div>
      <NavItem>
        <NavLink href="/home">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink eventKey="link-1">Link 1</NavLink>
      </NavItem>
      <NavItem>
        <NavLink eventKey="link-2">Link 2</NavLink>
      </NavItem>
      {/* Add more menu items here */}
    </Nav>
  );
};

export default Sidemenu;
