// VendorForm.js
import React, { useState } from 'react';
import './styles.css';

const VendorForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [upi, setUpi] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, upi });
        setName('');
        setEmail('');
        setUpi('');
    };

    return (
        <div className="form-container">
            <h2>Create Vendor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>UPI</label>
                    <input type="text" value={upi} onChange={(e) => setUpi(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit">Save Vendor</button>
                </div>
            </form>
        </div>
    );
};

export default VendorForm;
