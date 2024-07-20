// EmployeeList.js
import React from 'react';
import './styles.css';

const EmployeeList = ({ employees }) => {
    return (
        <div className="list-container">
            <h2>All Employees</h2>
            {employees.map((employee) => (
                <div key={employee.email} className="list-item">
                    <p>Name: {employee.name}</p>
                    <p>Designation: {employee.designation}</p>
                    <p>CTC: {employee.ctc}</p>
                    <p>Email: {employee.email}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployeeList;
