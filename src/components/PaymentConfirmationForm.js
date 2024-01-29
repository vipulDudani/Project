import React, { useState } from 'react';

const PaymentConfirmationForm = () => {
  const [lenderEmail, setLenderEmail] = useState('');

  const handleConfirmPayment = () => {
    // Implement payment confirmation logic here (send data to the server, etc.)
    console.log('Payment Confirmed for Lender:', lenderEmail);
  };

  return (
    <div>
      <h2>Payment Confirmation Form</h2>
      <label>Lender Email:</label>
      <input type="email" value={lenderEmail} onChange={(e) => setLenderEmail(e.target.value)} />
      <button onClick={handleConfirmPayment}>Confirm Payment</button>
    </div>
  );
};

export default PaymentConfirmationForm;
