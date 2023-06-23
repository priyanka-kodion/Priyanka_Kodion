// Step2.js
import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Step2({ nextStep, prevStep, setField, errors }) {
    const [formData, setFormData] = useState();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    console.log(formData);





    return (
        <Form.Group>
            <h1>Address Information</h1>
            <Form.Label>Address:</Form.Label>
            <Form.Control
                type="text"
                name="address"
                onChange={(e) => setField('address', e.target.value)}
                isInvalid={!!errors.address}
            />
            <div style={{ color: 'red' }}>{errors['address']}</div>

            <br />
            <Form.Label>Country</Form.Label>
            <Form.Control
                type="text"
                name="country"
                onChange={(e) => setField('country', e.target.value)}
                isInvalid={!!errors.address}
            />
            <div style={{ color: 'red' }}>{errors['country']}</div>

            <br />
            <Form.Label>state</Form.Label>
            <Form.Control
                type="text"
                name="state"
                onChange={(e) => setField('state', e.target.value)}
                isInvalid={!!errors.address}
            />
            <div style={{ color: 'red' }}>{errors['state']}</div>

            <br />
            <Form.Label>City</Form.Label>
            <Form.Control
                type="text"
                name="city"
                onChange={(e) => setField('city', e.target.value)}
                isInvalid={!!errors.address}
            />
            <div style={{ color: 'red' }}>{errors['city']}</div>

            <br />
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
                type="text"
                name="zipcode"
                onChange={(e) => setField('zipcode', e.target.value)}
                isInvalid={!!errors.address}
            />
            <div style={{ color: 'red' }}>{errors['zipcode']}</div>

            <br />
            <Button variant="secondary" onClick={prevStep}>
                Previous
      </Button>
            <Button variant="primary" onClick={nextStep}>
                Next
      </Button>
        </Form.Group>
    );
}

export default Step2;
