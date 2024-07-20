// SentEmailList.js
import React from 'react';
import './styles.css';

const SentEmailList = ({ emails }) => {
    return (
        <div className="list-container">
            <h2>Sent Emails</h2>
            {emails.map((email, index) => (
                <div key={index} className="list-item">
                    <p>Recipient: {email.recipient}</p>
                    <p>Message: {email.message}</p>
                    <p>Timestamp: {new Date(email.timestamp).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default SentEmailList;
