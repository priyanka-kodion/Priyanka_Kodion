// FormContainer.js
import React, { useState } from 'react';
import { Form, ProgressBar } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

function FormContainer() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({})

    // Function to handle form data updates
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to navigate to the next step
    const nextStep = (e) => {
        e.preventDefault();
        const errorObj = {};
        if (step == 1) {
            const personalInfo = ['first', 'last', 'email', 'birthdate', 'phone'];

            personalInfo.map((item) => {
                if (formData != undefined && formData.hasOwnProperty(item)) {
                    console.log(formData, 'formData')
                    const itemValue = formData[item];
                    console.log(itemValue, item, 'itemValue')
                    if (itemValue == '' || itemValue == null) {
                        errorObj[item] = 'This field is required';
                    } else {
                        errorObj[item] = null;
                    }
                } else {
                    errorObj[item] = 'This field is required';
                }
            });
            setErrors(errorObj)
        }
        const hasErrors = Object.values(errorObj).some((value) => value != null);
        if (!hasErrors) {
            setStep(step + 1);
        }

    };

    // Function to navigate to the previous step
    const prevStep = () => {
        setStep(step - 1);
    };

    // Function to submit the form and display the output
    const handleSubmit = (event) => {
        event.preventDefault();
        if (step == 2) {
            const addressInfo = ['address', 'country', 'state', 'city', 'zipcode'];
            addressInfo.map((item) => {
                if (formData.hasOwnProperty(item)) {
                    const itemValue = addressInfo.item;
                    if (itemValue == '' || itemValue == null) {
                        setErrors({
                            ...errors,
                            [item]: 'This field is required'
                        });
                    } else {
                        setErrors({
                            ...errors,
                            [item]: null
                        });
                    }
                } else {
                    setErrors({
                        ...errors,
                        [item]: 'This field is required'
                    });
                }
            });

        }
        console.log(formData);
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-.]+@gmail\.com$/;
        return emailRegex.test(email);
    };
    const isPhoneValid = (phone) => {
        return phone.length <= 10;
    };
    const isBirthdateValid = (birthdate) => {
        const selectedDate = new Date(birthdate);
        const currentDate = new Date();
        if (selectedDate < currentDate) {
            return 'Date must be in the past.';
        };
    }
    console.log(formData, 'ddd')
    const setField = (Field, value) => {

        setFormData({
            ...formData,
            [Field]: value
        })

        if (Field == 'email') {
            if (!isEmailValid(value)) {
                console.log(value, 'rrr')
                setErrors({
                    ...errors,
                    [Field]: 'Please enter valid email'
                });
            } else {
                setErrors({
                    ...errors,
                    [Field]: null
                });
            }
        }
        else if (Field == 'birthdate') {
            if (!isBirthdateValid(value)) {
                setErrors({
                    ...errors,
                    [Field]: 'Date must be in past'
                });
            } else {
                setErrors({
                    ...errors,
                    [Field]: null
                });
            }
        }
        else if (Field == 'phone') {
            if (!isPhoneValid(value)) {
                setErrors({
                    ...errors,
                    [Field]: 'Please enter valid phone number'
                });
            } else {
                setErrors({
                    ...errors,
                    [Field]: null
                });
            }
        }
        else if (value == '') {
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
                    <Step1 formData={formData} setErrors={setErrors} handleChange={handleChange} nextStep={nextStep} setField={setField} handleInputChange={handleInputChange} errors={errors} />
                )}
                {step === 2 && (
                    <Step2 formData={formData} setErrors={setErrors} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} setField={setField} handleInputChange={handleInputChange} errors={errors} />

                )}
                {step === 3 && (
                    <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} setField={setField} handleInputChange={handleInputChange} errors={errors} />

                )}
                {step === 4 && (
                    <Step4 formData={formData} handleSubmit={handleSubmit} />
                )}
            </Form>
        </div>
    );
}

export default FormContainer;
