import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/Admin-Services';

export const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ selection: '', email: '', password: '', username: '' });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSelectionChange = (e) => {
        const selection = e.target.value;
        setFormData({
            selection,
            username: '',
            email: '',
            password: '',
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData);
            localStorage.setItem("token",result.token);
            navigate("/home");
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                setLoginError(false);
            }, 1500);
        }
    };

    const renderFields = () => {
        if (formData.selection === 'admin') {
            return (
                <>
                    <Form.Group controlId="email" className="mt-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="mt-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </>
            );
        } else if (formData.selection === 'user') {
            return (
                <>
                    <Form.Group controlId="username" className="mt-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="mt-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="mt-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </>
            );
        }
        return null;
    };

    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="p-5 shadow rounded-lg bg-light">
                            <h2 className="mb-4 text-center">Sign In</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="selection" className="mt-3">
                                    <Form.Label>Select User Type:</Form.Label>
                                    <Form.Control as="select" name="selection" value={formData.selection} onChange={handleSelectionChange}>
                                        <option value="">Select</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </Form.Control>
                                </Form.Group>
                                {renderFields()}
                                <Button variant="primary" type="submit" className="w-100 mt-3">
                                    Sign In
                                </Button>
                            </Form>
                            {loginError ? <Alert variant="danger" className="mt-3">Invalid phone or password</Alert> : null}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;
