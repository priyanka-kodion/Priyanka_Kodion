// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';

// const Step3 = (prevStep) => {
//     const [educations, setEducations] = useState([
//         {
//             school: '',
//             degree: '',
//             fieldOfStudy: '',
//             startDate: '',
//             endDate: ''
//         }
//     ]);


//     const handleChange = (index, field, value) => {
//         const updatedEducations = [...educations];
//         updatedEducations[index][field] = value;
//         setEducations(updatedEducations);
//     };

//     const handleAddEducation = () => {
//         if (educations.length < 8) {
//             setEducations([...educations, {
//                 school: '',
//                 degree: '',
//                 fieldOfStudy: '',
//                 startDate: '',
//                 endDate: ''
//             }]);
//         }
//     };

//     const handleRemoveEducation = (index) => {
//         const updatedEducations = [...educations];
//         updatedEducations.splice(index, 1);
//         setEducations(updatedEducations);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // You can perform further actions with the educations array, such as saving it to a database
//         console.log(educations);
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             {educations.map((education, index) => (
//                 <div key={index}>
//                     <h2>Education Information{index + 1}</h2>
//                     <Form.Group controlId={`school${index}`}>
//                         <Form.Label>School/College Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={education.school}
//                             onChange={(e) => handleChange(index, 'school', e.target.value)}

//                         />


//                         <br />
//                     </Form.Group>
//                     <Form.Group controlId={`degree${index}`}>
//                         <Form.Label>Degree</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={education.degree}
//                             onChange={(e) => handleChange(index, 'degree', e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId={`fieldOfStudy${index}`}>
//                         <Form.Label>Field of Study</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={education.fieldOfStudy}
//                             onChange={(e) => handleChange(index, 'fieldOfStudy', e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId={`startDate${index}`}>
//                         <Form.Label>Start Date</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={education.startDate}
//                             onChange={(e) => handleChange(index, 'startDate', e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId={`endDate${index}`}>
//                         <Form.Label>End Date</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={education.endDate}
//                             onChange={(e) => handleChange(index, 'endDate', e.target.value)}
//                         />
//                     </Form.Group>
//                     {index > 0 && (
//                         <Button variant="danger" onClick={() => handleRemoveEducation(index)}>
//                             Remove
//                         </Button>
//                     )}
//                 </div>
//             ))}
//             {educations.length < 8 && (
//                 <Button variant="success" onClick={handleAddEducation}>
//                     Add Education
//                 </Button>
//             )}
//             <Button variant="secondary" onclick={prevStep}>Previous</Button>
//             <Button variant="primary" type="submit">
//                 Save
//       </Button>
//         </Form>
//     );
// };

// export default Step3;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap';

const Step3 = () => {
    const { register, handleSubmit, errors, match } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" ref={register({ required: 'First name is required' })} />
                {errors.firstName && <Alert variant="danger">{errors.firstName.message}</Alert>}
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" ref={register({ required: 'Last name is required' })} />
                {errors.lastName && <Alert variant="danger">{errors.lastName.message}</Alert>}
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" ref={register({ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} />
                {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" ref={register({ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
                {errors.password && <Alert variant="danger">{errors.password.message}</Alert>}
            </Form.Group>

            <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" ref={register({
                    required: 'Confirm Password is required',
                    validate: (value) => value === match('password') || 'Passwords must match'
                })} />
                {errors.confirmPassword && <Alert variant="danger">{errors.confirmPassword.message}</Alert>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default Step3;
