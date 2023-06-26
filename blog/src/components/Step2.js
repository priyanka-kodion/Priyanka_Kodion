// Step2.js
import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Step2({ nextStep, prevStep, setField, errors }) {
    const [formData, setFormData] = useState();
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    console.log(formData);





    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
                <h1>Address Information</h1>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter your Address"
                    onChange={(e) => setField('address', e.target.value)}
                    isInvalid={!!errors.address}
                />
                <div style={{ color: 'red' }}>{errors['address']}</div>


                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    name="country"
                    placeholder="Enter your Country"
                    onChange={(e) => setField('country', e.target.value)}
                    isInvalid={!!errors.country}
                />
                <div style={{ color: 'red' }}>{errors['country']}</div>


                <Form.Label>state</Form.Label>
                <Form.Control
                    type="text"
                    name="state"
                    placeholder="Enter your State"
                    onChange={(e) => setField('state', e.target.value)}
                    isInvalid={!!errors.state}
                />
                <div style={{ color: 'red' }}>{errors['state']}</div>


                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter your City"
                    onChange={(e) => setField('city', e.target.value)}
                    isInvalid={!!errors.city}
                />
                <div style={{ color: 'red' }}>{errors['city']}</div>


                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                    type="text"
                    name="zipcode"
                    placeholder="Enter your Zipcode"
                    onChange={(e) => setField('zipcode', e.target.value)}
                    isInvalid={!!errors.zipcode}
                />
                <div style={{ color: 'red' }}>{errors['zipcode']}</div>


                <Button variant="secondary" onClick={prevStep}>
                    Previous
      </Button>
                <Button variant="primary" onClick={nextStep}>Next</Button>
            </Form.Group>
        </Form>
    );
}

export default Step2;

