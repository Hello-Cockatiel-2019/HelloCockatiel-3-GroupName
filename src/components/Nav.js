import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container-fluid" id={props.idd}>
            <Navbar light expand="xl" >
                <NavbarBrand href="/"><img className="img-fluid" src="/logo1.svg" width="auto" height="auto" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <NavLink className="text-white ml-5 mr-5" href="#home"><h3>HOME</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white ml-5 mr-5" href="#about"><h3>ABOUT</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white ml-5 mr-5" href="#evolution"><h3>EVOLUTION</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white ml-5 mr-5" href="#anatomy"><h3>ANATOMY</h3></NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink className="mr-5" href="#"><img src="/facebook1.svg" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><img src="/twitter1.svg" /></NavLink>
                        </NavItem> */}

                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Example;