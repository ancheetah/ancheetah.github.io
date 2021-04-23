import React, { useState }  from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, 
    NavItem, NavLink, Collapse} from 'reactstrap';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarNav() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (            
        <Navbar dark expand="md" sticky="top">
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
                <Nav vertical navbar className="navbar-main">
                    
                    <NavbarBrand href="/home" className="mb-4">
                        <img src="../../logo192.png" alt="Logo" height="80" width="80"/>
                    </NavbarBrand>

                    <NavItem className="nav-item-main">
                        <NavLink className="nav-link-main" to="/home">Link 1</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link-main" to="/home">Link 2</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className="nav-link-main" to="/home"><FontAwesomeIcon icon={faHome}/> Home</NavLink>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    );
}
    
export default SidebarNav;