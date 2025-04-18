import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; 


const AdminDashboard = () => {

  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      window.location.reload();
    }
  });
  

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments')
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.log('Error fetching payments:', error);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <img src='./tcs-logo.jpg' alt="Logo" className="dashboard-logo" />
      <h2>All Payment Details</h2>
      <table>
        <thead>
          <tr>
            <th>Card Holder Name</th>
            <th>Email-Address</th>
            <th>Card-Number</th>
            <th>Expiry Date</th>
            <th>CVV</th>
            <th>Purchased Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment._id}>
              <td>{payment.name}</td>
              <td>{payment.email}</td>
              <td>{payment.cardNumber}</td>
              <td>{payment.expiryDate}</td>
              <td>{payment.cvv}</td>
              <td>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
