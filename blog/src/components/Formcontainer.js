// FormContainer.js
import React, { useState } from 'react';
import { Form, ProgressBar } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

function FormContainer() {
    const [step, setStep] = useState(1);

    // Function to handle form data updates
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to navigate to the next step
    const nextStep = () => {
        setStep(step + 1);
    };

    // Function to navigate to the previous step
    const prevStep = () => {
        setStep(step - 1);
    };

    // Function to submit the form and display the output
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        // Access form data from 'formData' state object

        // Display output or perform further actions
        console.log(formData);
    };
    const [formData, setFormData] = useState();
    const [errors, setErrors] = useState({})
    const setField = (Field, value) => {

        setFormData({
            ...formData,
            [Field]: value
        })

        if (value == '') {
            setErrors({
                ...errors,
                [Field]: 'This field is required'
            })
        } else {
            setErrors({
                ...errors,
                [Field]: null
            })
        }
    }
    console.log(errors['first'], 'sdfsd')
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }

    console.log(formData);
    return (
        <div className="container">
            <ProgressBar now={step * 33.33} />
            <Form onSubmit={handleSubmit}>
                {step === 1 && (
                    <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} setField={setField} handleInputChange={handleInputChange} errors={errors} />
                )}
                {step === 2 && (
                    <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} setField={setField} handleInputChange={handleInputChange} errors={errors} />

                )}
                {step === 3 && (
                    <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} setField={setField} handleInputChange={handleInputChange} errors={errors} />

                )}
                {step === 4 && (
                    <Step4 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
                )}
            </Form>
        </div>
    );
}

export default FormContainer;
