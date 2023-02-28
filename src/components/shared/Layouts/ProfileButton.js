import DropdownItem from "react-bootstrap/DropdownItem";
import {DropdownButton, Nav, NavDropdown} from "react-bootstrap";
import React from "react";

export const ProfileButton = () => {
    return(
        <Nav className="me-auto ">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Christopher</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                    logouttt
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}