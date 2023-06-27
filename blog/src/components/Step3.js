import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Step3({ prevStep, errors, nextStep, formData }) {
    const [educations, setEducations] = useState([
        {
            school: '',
            degree: '',
            study: '',
            startDate: '',
            endDate: ''
        }
    ]);
    console.log(educations);

    const handleChange = (index, field, value) => {
        const updatedEducations = [...educations];
        updatedEducations[index][field] = value;
        setEducations(updatedEducations);
    };

    const handleAddEducation = () => {
        if (educations.length < 8) {
            setEducations([
                ...educations,
                {
                    school: '',
                    degree: '',
                    study: '',
                    start: '',
                    end: ''
                }
            ]);
        }
    };

    const handleRemoveEducation = (index) => {
        const updatedEducations = [...educations];
        updatedEducations.splice(index, 1);
        setEducations(updatedEducations);
    };

    return (
        <Form>
            {educations.map((educations, index) => (
                <div key={index}>
                    <h2>Education Information {index + 1}</h2>
                    <Form.Group controlId={`school${index}`}>
                        <Form.Label>School/College Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="school"
                            value={formData['school']}
                            placeholder="Enter your school/college"
                            onChange={(e) => handleChange(index, 'school', e.target.value)}
                            isInvalid={!!errors[index]?.school}
                            required
                        />
                        {errors[index]?.school && (
                            <Form.Control.Feedback type="invalid" style={{ color: 'red' }} >
                                {errors[index].school}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                    <Form.Group controlId={`degree${index}`}>
                        <Form.Label>Degree</Form.Label>
                        <Form.Control
                            type="text"
                            name="degree"
                            value={formData['degree']}
                            placeholder="Enter your degree"
                            onChange={(e) => handleChange(index, 'degree', e.target.value)}
                            isInvalid={!!errors[index]?.degree}
                            required
                        />
                        {errors[index]?.degree && (
                            <Form.Control.Feedback type="invalid" >
                                {errors[index].degree}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                    <Form.Group controlId={`fieldOfStudy${index}`}>
                        <Form.Label>Field of Study</Form.Label>
                        <Form.Control
                            type="text"
                            name="study"
                            placeholder="Enter your field of study"
                            value={formData['study']}
                            onChange={(e) => handleChange(index, 'study', e.target.value)}
                            isInvalid={!!errors[index]?.study}
                            required
                        />
                        {errors[index]?.study && (
                            <Form.Control.Feedback type="invalid">
                                {errors[index].study} style={{ color: 'red' }}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                    <Form.Group controlId={`startDate${index}`}>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="start"
                            placeholder="Enter the start date"
                            value={formData['start']}
                            onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                            isInvalid={!!errors[index]?.start}
                            required
                        />
                        {errors[index]?.start && (
                            <Form.Control.Feedback type="invalid">
                                {errors[index].start} style={{ color: 'red' }}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>

                    <Form.Group controlId={`endDate${index}`}>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="end"
                            placeholder="Enter the end date"
                            value={formData['end']}
                            onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                            isInvalid={!!errors[index]?.end}
                            required
                        />
                        {errors[index]?.end && (
                            <Form.Control.Feedback type="invalid">
                                {errors[index].end}
                            </Form.Control.Feedback>
                        )}
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
            <Button variant="secondary" onClick={prevStep}>
                Previous
      </Button>
            <Button variant="primary" type="submit" onClick={nextStep}>
                next
      </Button>
            <br />
        </Form>
    );
}
export default Step3;

