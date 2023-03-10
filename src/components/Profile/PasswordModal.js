import {Button, Form, Modal} from "react-bootstrap";

export const PasswordModal= ({
    props,
    show,
    setShow,
    handleClose
})=>{

   // console.log("handleShow: "+show + " setHandleShow: "+setShow + " handleClose: "+handleClose)
    return(
        <>
             <Modal
                show={show}
                onHide={handleClose}
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{borderStyle:"none"}}/>

                <Modal.Body style={{borderRadius: 30}}>
                    <Modal.Title style={{textAlign:"center"}}>Cambiar contraseña</Modal.Title>
                    <Form style={{borderRadius:30}}>
                        <Form.Group className="mb-3 d-flex align-items-center col" controlId="exampleForm.ControlInput1">
                            <Form.Label className="me-4">Contraseña actual</Form.Label>
                            <Form.Control  type="password" className="rounded w-100" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex align-items-center col" controlId="exampleForm.ControlInput2">
                            <Form.Label className="me-4">Contraseña nueva</Form.Label>
                            <Form.Control type="password" className="rounded w-100" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex align-items-center col" controlId="exampleForm.ControlInput3">
                            <Form.Label className="me-4">Repetir contraseña nueva</Form.Label>
                            <Form.Control type="password" className="rounded w-100" autoFocus/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="me-2">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}