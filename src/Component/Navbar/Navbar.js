import React from 'react'
import { Nav,
         Navbar,
         NavItem,
         NavLink,
         Collapse,
         NavbarBrand,
         NavbarToggler,
         } from 'reactstrap';
  
import '../../style.css';



function Navbarr() {
    return (
<div className='navbar-area transparent navbar-inverse fixed-top'>
  <Navbar
    color="dark"
    dark
    expand="md"
    
  >
    <NavbarBrand href="/" className='brand-name'>
      <p>febri.</p>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="ms-auto navbar-item"
        navbar
        
      >
        <NavItem>
          <NavLink href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="../About/About.js">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Portfolio">
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
    )
}

export default Navbarr
