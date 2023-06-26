import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';

function Step1({ formData, nextStep, setField, errors, setErrors }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        nextStep();
    };


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
                <h1>Personal Information</h1>
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="first"
                    placeholder="Enter your First Name"
                    onChange={(e) => setField('first', e.target.value)}
                    isInvalid={!!errors.first}
                    value={formData['first']}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {errors.first}
                </Form.Control.Feedback>

                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="last"
                    value={formData['last']}
                    placeholder="Enter your Last Name"
                    onChange={(e) => setField('last', e.target.value)}
                    isInvalid={!!errors.last}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {errors.last}
                </Form.Control.Feedback>

                <Form.Label>Birthdate:</Form.Label>
                <Form.Control
                    type="date"
                    name="birthdate"
                    value={formData['birthdate']}
                    onChange={(e) => setField('birthdate', e.target.value)}
                    required
                />
                <div style={{ color: 'red' }}>{errors.birthdate}</div>
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={formData['phone']}
                    onChange={(e) => setField('phone', e.target.value)}
                    placeholder="Enter your Phone Number"
                    required
                />
                <div style={{ color: 'red' }}>{errors.phone}</div>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData['email']}
                    placeholder="Enter your Email"
                    onChange={(e) => setField('email', e.target.value)}

                    required
                />
                <div style={{ color: 'red' }}>{errors.email}</div>

                <Button variant="primary" type="submit" onClick={nextStep}>
                    Next
        </Button>
            </Form.Group>
        </Form >
    );
}

export default Step1;
