// App.js
import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import VendorForm from './VendorForm';
import EmailForm from './EmailForm';
import EmployeeList from './EmployeeList';
import VendorList from './VendorList';
import SentEmailList from './SentEmailList';
import axios from 'axios';
import './styles.css';
//import './api.js'
const api = axios.create({ baseURL: 'http://localhost:8080/api', });
const App = () => {
    const [employees, setEmployees] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [sentEmails, setSentEmails] = useState([]);

    useEffect(() => {
        fetchEmployees();
        fetchVendors();
        fetchSentEmails();
    }, []);
    const fetchEmployees = async () => {
      try {
          //const response = await axios.get('/api/employees');
          const response = await api.get('/employees');
          setEmployees(response.data);
      } catch (error) {
          console.error('Error fetching employees:', error);
      }
  };
  
  const fetchVendors = async () => {
      try {
          const response = await api.get('/vendors');
          setVendors(response.data);
      } catch (error) {
          console.error('Error fetching vendors:', error);
      }
  };
  
  const fetchSentEmails = async () => {
      try {
          const response = await api.get('/emails');
          setSentEmails(response.data);
      } catch (error) {
          console.error('Error fetching emails:', error);
      }
  };
  
  const handleCreateEmployee = async (employee) => {
      try {
          await api.post('/employees', employee);
          fetchEmployees();
      } catch (error) {
          console.error('Error creating employee:', error);
      }
  };
  
  const handleCreateVendor = async (vendor) => {
      try {
          await api.post('/vendors', vendor);
          fetchVendors();
      } catch (error) {
          console.error('Error creating vendor:', error);
      }
  };
  
  const handleSendEmail = async (emailData) => {
      try {
          await api.post('/emails', emailData);
          fetchSentEmails();
      } catch (error) {
          console.error('Error sending email:', error);
      }
  };
  

    return (
        <div className="app-container">
            <EmployeeForm onSubmit={handleCreateEmployee} />
            <VendorForm onSubmit={handleCreateVendor} />
            <EmailForm onSubmit={handleSendEmail} />
            <EmployeeList employees={employees} />
            <VendorList vendors={vendors} />
            <SentEmailList emails={sentEmails} />
        </div>
    );
};

export default App;
