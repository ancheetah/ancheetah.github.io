import React, { useState }  from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, 
    NavItem, NavLink, Collapse} from 'reactstrap';
import { faHome, faCameraRetro, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
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

                    <NavItem>
                        <NavLink className="nav-link-main" to="/home">
                            <FontAwesomeIcon icon={faHome}/>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item-main">
                        <NavLink className="nav-link-main" href="https://www.linkedin.com/in/ajrancheta/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2"/>LinkedIn
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link-main" href="https://github.com/ancheetah" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="mr-2"/>GitHub
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link-main" href="https://codepen.io/ancheetah" target="_blank">
                            <FontAwesomeIcon icon={faCodepen} className="mr-2"/>Codepen
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link-main" href="https://www.instagram.com/bad_habit_frames_/" target="_blank">
                            <FontAwesomeIcon icon={faCameraRetro} className="mr-2"/>Photography
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link-main" href="#" target="_blank">
                            <FontAwesomeIcon icon={faCertificate} className="mr-2"/>Credentials
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link-main" href="mailto:aj.ancheetah@yahoo.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>Email
                        </NavLink>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    );
}
    
export default SidebarNav;