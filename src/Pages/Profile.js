
import {Banner} from "../components/Profile/Banner";
import {Form, Button, FormControl, Row, Col, Modal} from 'react-bootstrap';
import Data from "bootstrap/js/src/dom/data";
import {DataForm} from "../components/Profile/DataForm";
import {PrimaryButton} from "../components/shared/PrimaryButton";
import {useState} from "react";



export const Profile = () => {

    const [show, setShow] = useState(false);

    //define a function to change the state of show
    const edit = () => {
        setShow(!show)
    }

    return (
        <>
            <Row>
                <Col xs={7} sm={8} md={10}>
                    <h2>Mi perfil</h2>
                </Col>
                <Col xs={5} sm={4} md={2}>
                    <PrimaryButton
                        text='Editar'
                        onClick={edit}
                    />
                </Col>
            </Row>
            <Banner/>
            <h2 style={{textAlign: "center", marginTop: 40, marginBottom:40}}>Nombre completo</h2>
            <DataForm edit={show}/>

        </>
    )
}