import {Button, Col, Form, FormControl, Modal, Row} from "react-bootstrap";
import styles from "../../assets/css/components/Profile/Form.module.css";
import {
    MdVpnKey
} from 'react-icons/md';
import {useState} from "react";
import {PasswordModal} from "./PasswordModal";


export const DataForm = (props) => {

    const {edit} = props;
    console.log("edit"+edit)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    //const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        console.log("shoe"+show)
    }

    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <FormControl type="text" style={{backgroundColor: "#F3F1F1"}} disabled={!edit}
                                         value={edit ? null : "nombre"}/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Apellido paterno</Form.Label>
                            <FormControl type="text" className={`${styles.input}`} disabled={!edit}
                                         value={edit ? null : "nombre"}/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formSurName">
                            <Form.Label>Apellido materno</Form.Label>
                            <FormControl type="text" className={`${styles.input}`} disabled={!edit}
                                         value={edit ? null : "nombre"}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Teléfono</Form.Label>
                            <FormControl type="number" className={`${styles.input}`} disabled={!edit}
                                         value={edit ? null : "nombre"}/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <FormControl type="email" className={`${styles.input}`} disabled={!edit}
                                         value={edit ? null : "nombre"}/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <button type="button" className={`${styles.btn}`} onClick={handleShow}>
                            <MdVpnKey className={`${styles.btnIcon}`}/> Cambiar contraseña
                        </button>
                    </Col>
                </Row>
                <Button hidden={!edit} type={"submit"}>
                    Guardar
                </Button>

            </Form>
            {/*test*/}
            <PasswordModal show={show} setShow={setShow} handleClose={handleClose}/>



        </>
    )
}