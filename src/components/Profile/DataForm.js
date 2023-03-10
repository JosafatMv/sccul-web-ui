import {Button, Col, Form as FormBt, Row} from "react-bootstrap";
import styles from "../../assets/css/components/Profile/Form.module.css";
import {
    MdVpnKey
} from 'react-icons/md';
import {useState} from "react";
import {PasswordModal} from "./PasswordModal";
import {TextInput} from "../Form/TextInput";
import {Formik, Form} from "formik";
import * as yup from 'yup';


export const DataForm = (props) => {
    const nombre = "Emi"
    const {edit} = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    }

    const handleOnSubmit = (values, resetForm) => {
       // login(values.email, values.password);
    };
    //formik
    const objectSchema = yup.object({
        name: yup.string().required("No puede quedar vacío"),
        lastname: yup.string().required("No puede quedar vacío"),
        surname: yup.string().required("No puede quedar vacío"),
        phone: yup.number().required("El numero de telefono es requerido"),
        email: yup.string().email().required("No puede quedar vacío")
    })

    return (
        <>
            <Formik
                initialValues={{
                    name: `${nombre}`,
                    lastname: '',
                    surname: '',
                    phone: 0,
                    email: ''

                }}
                validationSchema={objectSchema}
                onSubmit={(values, { resetForm }) => {
                    handleOnSubmit(values, resetForm);
                }}
            >
                {({errors, values, touched}) => (
                    <Form>
                        <Row>
                            <Col>
                                <FormBt.Group>
                                    <TextInput label='Nombre' name='name' style={{backgroundColor: "#F3F1F1"}}
                                               className={`${styles.input}`} isInvalid={
                                        !!errors.name && touched.name
                                    } disabled={!edit}
                                    />
                                </FormBt.Group>
                            </Col>
                            <Col>
                                <FormBt.Group>
                                    <TextInput label='Apellido paterno' name='lastname'
                                               style={{backgroundColor: "#F3F1F1"}}
                                               className={`${styles.input}`} isInvalid={
                                        !!errors.lastname && touched.lastname
                                    } disabled={!edit}
                                    />
                                </FormBt.Group>
                            </Col>
                            <Col>
                                <FormBt.Group>
                                    <TextInput label='Apellido materno' name='surname'
                                               style={{backgroundColor: "#F3F1F1"}}
                                               className={`${styles.input}`} isInvalid={
                                        !!errors.surname && touched.surname
                                    } disabled={!edit}
                                    />
                                </FormBt.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormBt.Group>
                                    <TextInput label='Telefono' name='phone' style={{backgroundColor: "#F3F1F1"}}
                                               className={`${styles.input}`} isInvalid={
                                        !!errors.phone && touched.phone
                                    } disabled={!edit}
                                    />
                                </FormBt.Group>
                            </Col>
                            <Col>
                                <FormBt.Group>
                                    <TextInput label='Correo electronico' name='email'
                                               style={{backgroundColor: "#F3F1F1"}}
                                               className={`${styles.input}`} isInvalid={
                                        !!errors.email && touched.email
                                    } disabled={!edit}
                                    />
                                </FormBt.Group>
                            </Col>
                            <Col>
                                <button type="button" className={`${styles.btn}`} onClick={handleShow}>
                                    <MdVpnKey className={`${styles.btnIcon}`}/> Cambiar contraseña
                                </button>
                            </Col>
                        </Row>
                        <Button hidden={!edit} type={"submit"} disabled={
                            !values.name || !!errors.name ||
                            !values.lastname || !!errors.lastname ||
                            !values.surname || !!errors.surname ||
                            !values.phone || !!errors.phone ||
                            !values.email || !!errors.email
                         }>
                            Guardar
                        </Button>
                    </Form>
                )}

            </Formik>
            {/*test*/}
            <PasswordModal show={show} setShow={setShow} handleClose={handleClose}/>


        </>
    )
}