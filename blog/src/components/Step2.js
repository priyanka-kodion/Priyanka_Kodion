// Step2.js
import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Step2({ formData, nextStep, prevStep, setField, errors }) {


    return (
        <Form >
            <Form.Group>
                <h1>Address Information</h1>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                    type="text"
                    name="address"
                    value={formData['address']}
                    placeholder="Enter your address"
                    onChange={(e) => setField('address', e.target.value)}

                    required
                />
                <div style={{ color: 'red' }}>{errors['address']}</div>


                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    name="country"
                    value={formData['country']}
                    placeholder="Enter your country"
                    onChange={(e) => setField('country', e.target.value)}
                    isInvalid={!!errors.country}
                    required
                />
                <div style={{ color: 'red' }}>{errors['country']}</div>


                <Form.Label>State</Form.Label>
                <Form.Control
                    type="text"
                    name="state"
                    value={formData['state']}
                    placeholder="Enter your state"
                    onChange={(e) => setField('state', e.target.value)}
                    isInvalid={!!errors.state}
                    required
                />
                <div style={{ color: 'red' }}>{errors['state']}</div>

                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    value={formData['city']}
                    placeholder="Enter your city"
                    onChange={(e) => setField('city', e.target.value)}
                    isInvalid={!!errors.city}
                    required
                />
                <div style={{ color: 'red' }}>{errors['city']}</div>


                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                    type="number"
                    name="zipcode"
                    value={formData['zipcode']}
                    placeholder="Enter your zipcode"
                    onChange={(e) => setField('zipcode', e.target.value)}
                    isInvalid={!!errors.zipcode}
                    required
                />
                <div style={{ color: 'red' }}>{errors['zipcode']}</div>


                <Button variant="secondary" onClick={prevStep}>Previous</Button>
                <Button variant="primary" type="submit" onClick={nextStep}>Next</Button>
            </Form.Group>
        </Form>
    );
}

export default Step2;

