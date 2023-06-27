import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';

function Step1({ formData, nextStep, setField, errors, }) {

    return (
        <Form  >
            <Form.Group>
                <h1>Personal Information</h1>
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="first"
                    placeholder="Enter your first name"
                    onChange={(e) => setField('first', e.target.value)}
                    value={formData['first']}
                    required
                />
                <div style={{ color: 'red' }}>{errors.first}</div>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="last"
                    value={formData['last']}
                    placeholder="Enter your last name"
                    onChange={(e) => setField('last', e.target.value)}
                    required
                />
                <div style={{ color: 'red' }}>{errors.last}</div>
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
                    placeholder="Enter your phone number"
                    required
                />
                <div style={{ color: 'red' }}>{errors.phone}</div>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData['email']}
                    placeholder="Enter your email"
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
