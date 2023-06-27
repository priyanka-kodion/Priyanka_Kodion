import React from 'react';
import { Form, Button, } from 'react-bootstrap';

function Step4({ formData, handleSubmit }) {
    return (
        <div>
            <h2>Review Form</h2>
            <div>
                <h3>Personal Information</h3>
                <p>First Name: {formData.first}</p>
                <p>Last Name: {formData.last}</p>
                <p>Birthdate: {formData.birthdate}</p>
                <p>Phone: {formData.phone}</p>
                <p>Email: {formData.email}</p>
            </div>
            <div>
                <h3>Address Information</h3>
                <p>Street Address: {formData.address}</p>
                <p>Country: {formData.country}</p>
                <p>State: {formData.state}</p>
                <p>City: {formData.city}</p>
                <p>Zipcode: {formData.zipcode}</p>
            </div>
            <div>
                <h3>Education</h3>
                {formData.educations.map((education, index) => (
                    <div key={index}>
                        <h4>Education {index + 1}</h4>
                        <p>School/College Name: {education.school}</p>
                        <p>Degree: {education.degree}</p>
                        <p>Field of Study: {education.study}</p>
                        <p>Start Date: {education.startDate}</p>
                        <p>End Date: {education.endDate}</p>
                    </div>
                ))}
            </div>

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Step4;
