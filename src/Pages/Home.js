import React from 'react';
import {ProSidebarProvider} from 'react-pro-sidebar';
import {LateralMenu} from "../components/shared/LateralMenu";
import style from '../assets/css/Pages/Home.module.css';
import {Col, Container, DropdownButton, Row} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {ProfileButton} from "../components/shared/ProfileButton";
import {TopMenu} from "../components/shared/TopMenu";

export const Home = () => {
    return (
        <Container fluid style={{backgroundColor:"black"}}>
           <Row>
               <Col xs={2}>
                   <LateralMenu></LateralMenu>
               </Col>
               <Col xs={10}>
                   <TopMenu></TopMenu>

               </Col>
           </Row>
        </Container>
    )
}

{/* <div className="container-fluid" style={{float:"left", position:"relative"}}>
                <div className="row">
                    <div className={`${style.sidebarContainer} col-2`}>

                    </div>
                    <div className={`col`}>

                    </div>
                </div>
            </div>*/
}
