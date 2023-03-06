import {Button, Col, Form, FormControl, Row} from "react-bootstrap";

export const DataForm =()=>{
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <FormControl type="text" placeholder="Nombre" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Apellido paterno</Form.Label>
                        <FormControl type="text" placeholder="Apellido paterno" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formSurName">
                        <Form.Label>Apellido materno</Form.Label>
                        <FormControl type="text" placeholder="Apellido materno" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <FormControl type="text" placeholder="Teléfono" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <FormControl type="email" placeholder="Correo electrónico" />
                    </Form.Group>
                </Col>

                <Col>
                    <Button type="button">Cambiar contraseña</Button>
                </Col>
            </Row>
        </Form>
    )
}