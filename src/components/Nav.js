import React, { useState } from 'react';
import { css } from 'styled-components';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const navstlye = css`
padding-right:200px;
`

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container-fluid">
            <Navbar color="" dark expand="xl">
                <NavbarBrand href="/"><img src="/logo1.svg" width="200px" height="150px" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className={navstlye} navbar>
                        <NavItem >
                            <NavLink href="/components/">HOME    </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ABOUT </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">EVOLUTION</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">ANATOMY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><img src="/facebook1.svg" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><img src="/twitter1.svg" /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;