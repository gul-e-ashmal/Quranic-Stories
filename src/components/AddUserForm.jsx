import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Checkbox from './checkbox';
function AddUserForm() {
    // const { formState, getFormSubmitHandler } = useFormData('https://fund-family-backend-production.up.railway.app/?format=openapi');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const submitForm = () => sub

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
               Add Users
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label>Access Group</Form.Label>
                                    <Checkbox label="Admin" />
                                    <Checkbox label="Content" />
                                    <Checkbox label="Developer" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row> <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                       
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* {!!formState.status && <div className="py-2">Current form status is: {formState.status}</div>} */}
                    <Button variant="primary" > {/* onClick={getFormSubmitHandler()}> */}
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddUserForm;