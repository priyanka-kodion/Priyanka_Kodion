import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Step3({ prevStep }) {
    const [educations, setEducations] = useState([
        {
            school: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: ''
        }
    ]);


    const handleChange = (index, field, value) => {
        const updatedEducations = [...educations];
        updatedEducations[index][field] = value;
        setEducations(updatedEducations);
    };

    const handleAddEducation = () => {
        if (educations.length < 8) {
            setEducations([...educations, {
                school: '',
                degree: '',
                fieldOfStudy: '',
                startDate: '',
                endDate: ''
            }]);
        }
    };

    const handleRemoveEducation = (index) => {
        const updatedEducations = [...educations];
        updatedEducations.splice(index, 1);
        setEducations(updatedEducations);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform further actions with the educations array, such as saving it to a database
        console.log(educations);
    };
    const isEmailValid = (email) => {
        const emailRegex = /^[\w-.]+@gmail\.com$/;
        return emailRegex.test(email);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {educations.map((education, index) => (
                <div key={index}>
                    <h2>Education Information{index + 1}</h2>
                    <Form.Group controlId={`school${index}`}>
                        <Form.Label>School/College Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your School/College"
                            value={education.school}
                            onChange={(e) => handleChange(index, 'school', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={`degree${index}`}>
                        <Form.Label>Degree</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your degree"
                            value={education.degree}
                            onChange={(e) => handleChange(index, 'degree', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={`fieldOfStudy${index}`}>
                        <Form.Label>Field of Study</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your Field of Study"
                            value={education.fieldOfStudy}
                            onChange={(e) => handleChange(index, 'fieldOfStudy', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={`startDate${index}`}>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the Start Date "
                            value={education.startDate}
                            onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={`endDate${index}`}>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the End Date "
                            value={education.endDate}
                            onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                        />
                    </Form.Group>
                    {index > 0 && (
                        <Button variant="danger" onClick={() => handleRemoveEducation(index)}>
                            Remove
                        </Button>
                    )}
                </div>
            ))}
            {educations.length < 8 && (
                <Button variant="success" onClick={handleAddEducation}>
                    Add Education
                </Button>
            )}
            <Button variant="secondary" onClick={prevStep}>Previous</Button>
            <Button variant="primary" type="submit">Save </Button>
            <br />
        </Form>
    );
};

export default Step3;
