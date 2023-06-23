
import { React, useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

function Step1({ nextStep, setField, errors }) {

    return (
        <Form.Group>
            <h1>Personal Information</h1>
            <Form.Label >First Name:</Form.Label>
            <Form.Control
                type="text"
                name="first"
                onChange={(e) => setField('first', e.target.value)}

                isInvalid={!!errors.text}
                required
            />
            <div style={{ color: 'red' }}>{errors['first']}</div>
            <br />
            <Form.Label >last Name:</Form.Label>
            <Form.Control
                type="text"
                name="last"
                onChange={(e) => setField('last', e.target.value)}

                isInvalid={!!errors.text}
                required
            />
            <div style={{ color: 'red' }}>{errors['last']}</div>
            <br />
            <Form.Label >Birthdate:</Form.Label>
            <Form.Control
                type="text"
                name="birthdate"
                onChange={(e) => setField('birthdate', e.target.value)}

                isInvalid={!!errors.text}
                required
            />
            <div style={{ color: 'red' }}>{errors['birthdate']}</div>
            <br />
            <Form.Label >Phone:</Form.Label>
            <Form.Control
                type="text"
                name="Phone"
                onChange={(e) => setField('phone', e.target.value)}


                isInvalid={!!errors.text}
                required
            />
            <div style={{ color: 'red' }}>{errors['date']}</div>
            <br />
            <Form.Label >Email:</Form.Label>
            <Form.Control
                type="email"
                name="email"
                onChange={(e) => setField('email', e.target.value)}

                isInvalid={!!errors.text}
                required
            />
            <div style={{ color: 'red' }}>{errors['email']}</div>
            <br />





            <Button variant="primary" onClick={nextStep}>
                Next
      </Button>
        </Form.Group>
    );
}

export default Step1;

// import { React, useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// function Step1({ nextStep }) {
//     const [formData, setFormData] = useState();
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));

//     }

//     console.log(formData);

//     return (
//         <Form.Group>
//             <h1>Personal Information</h1>
//             <Form.Label>First Name:</Form.Label>
//             <Form.Control
//                 type="text"
//                 name="first"
//                 onChange={handleInputChange}

//                 required
//             />
//             <br />


//             <Form.Label>last Name:</Form.Label>
//             <Form.Control
//                 type="text"
//                 name="lastname"
//                 onChange={handleInputChange}
//             />
//             <br />
//             <Form.Label>Birthdate:</Form.Label>
//             <Form.Control
//                 type="text"
//                 name="birthdate"
//                 onChange={handleInputChange}
//             />
//             <br />
//             <Form.Label>Phone Number:</Form.Label>
//             <Form.Control
//                 type="text"
//                 name="phone"
//                 onChange={handleInputChange}
//             />
//             <br />
//             <Form.Label>Email:</Form.Label>
//             <Form.Control
//                 type="email"
//                 name="email"
//                 onChange={handleInputChange}
//             />
//             <br />
//             <Button variant="primary" onClick={nextStep}>
//                 Next
//       </Button>
//         </Form.Group>
//     );
// }

// export default Step1;
