import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ProfileButton} from "./ProfileButton";
import styles from "../../assets/css/components/TopMenu.module.css";


export const TopMenu = () => {
    return (
        <Navbar  bg="light" expand="lg">
            <Container>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="ms-auto me-0">
                    <ProfileButton></ProfileButton>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}