// EmailForm.js
import React, { useState } from 'react';
import './styles.css';

const EmailForm = ({ onSubmit }) => {
    const [recipient, setRecipient] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ recipient });
        setRecipient('');
    };

    return (
        <div className="form-container">
            <h2>Send Email</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Recipient Email</label>
                    <input type="email" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit">Send Email</button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;
