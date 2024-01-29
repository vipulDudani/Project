import React, { useState } from 'react';

const LoanRequestForm = () => {
  const [borrowerEmail, setBorrowerEmail] = useState('');

  const handleRequestLoan = () => {
    // Implement loan request logic here (send data to the server, etc.)
    console.log('Loan Requested for Borrower:', borrowerEmail);
  };

  return (
    <div>
      <h2>Loan Request Form</h2>
      <label>Borrower Email:</label>
      <input type="email" value={borrowerEmail} onChange={(e) => setBorrowerEmail(e.target.value)} />
      <button onClick={handleRequestLoan}>Request Loan</button>
    </div>
  );
};

export default LoanRequestForm;
