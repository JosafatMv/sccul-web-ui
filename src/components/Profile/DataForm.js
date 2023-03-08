import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import styles from "../../assets/css/components/Profile/Form.module.css";
import {
    MdVpnKey
} from 'react-icons/md';
export const DataForm =()=>{
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Group controlId="formName" >
                        <Form.Label>Nombre</Form.Label>

                        <FormControl type="text" value={"Pug"} style={{backgroundColor:"#F3F1F1"}} disabled />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Apellido paterno</Form.Label>
                        <FormControl type="text" value="Ayuda" className={`${styles.input}`} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formSurName">
                        <Form.Label>Apellido materno</Form.Label>
                        <FormControl type="text" value="Me estoy" className={`${styles.input}`}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <FormControl type="number" value="837487" className={`${styles.input}`}/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <FormControl type="email" value="Enculando" className={`${styles.input}`}/>
                    </Form.Group>
                </Col>

                <Col>
                    <button type="button" className={`${styles.btn}`}>
                        <MdVpnKey className={`${styles.btnIcon}`}/> Cambiar contraseña</button>
                </Col>
            </Row>
        </Form>
    )
}