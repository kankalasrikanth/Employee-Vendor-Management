// EmployeeForm.js
import React, { useState } from 'react';
import './styles.css';

const EmployeeForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [ctc, setCtc] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, designation, ctc: parseFloat(ctc), email });
        setName('');
        setDesignation('');
        setCtc('');
        setEmail('');
    };

    return (
        <div className="form-container">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>CTC</label>
                    <input type="number" value={ctc} onChange={(e) => setCtc(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit">Save Employee</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;
