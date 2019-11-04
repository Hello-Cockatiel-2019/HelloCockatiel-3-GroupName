import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/* <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br /> */}
                <Nav>
                    <NavItem>
                        <NavLink><img src="/logo1.svg" /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">ABOUT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">ANATOMY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#test">HABITAT</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
};