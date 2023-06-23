import React, { useState } from 'react';
import './Personal.css';
function Personal() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div>
            <h1>Personal Information</h1>
            <form onSubmit={handleSubmit}>


                <div className="col-md-6">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                </div>

            <div className="col-md-6">
                <label htmlFor="Birthdate">Birthdate:</label>
                <input
                    type="text"
                    id="Birthdate"
                    name="Birthdate"
                    value={formData.Birthdate}
                    onChange={handleChange}
                    className="form-control"
                    required />
            </div>

            <div className="col-md-6">
                <label htmlFor="Phone">Phone Number:</label>
                <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>



            <div className="col-md-6">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />

            </div>




            </form>
        </div >
    );
}
export default Personal;
