import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const User = () => {
    const [changePass, setChangePass] = useState(false)
    return (
        <div>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        UserName
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                </Form.Group>

                {!changePass ? <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                    :
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            New Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Enter New Password" />
                        </Col>
                    </Form.Group>}
            </Form>
            <br />
            <br />
            <div>
                <Button variant="outline-secondary" className="mr-5" onClick={() => setChangePass(true)}>Change Password</Button>
                <Button variant="outline-secondary">Logout</Button>
            </div>
        </div>
    )
}

export default User
