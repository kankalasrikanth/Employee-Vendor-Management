// VendorList.js
import React from 'react';
import './styles.css';

const VendorList = ({ vendors }) => {
    return (
        <div className="list-container">
            <h2>All Vendors</h2>
            {vendors.map((vendor) => (
                <div key={vendor.email} className="list-item">
                    <p>Name: {vendor.name}</p>
                    <p>Email: {vendor.email}</p>
                    <p>UPI: {vendor.upi}</p>
                </div>
            ))}
        </div>
    );
};

export default VendorList;
