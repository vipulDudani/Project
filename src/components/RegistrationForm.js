import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    // Implement registration logic here (send data to the server, etc.)
    console.log('User Registered:', { email, role });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="borrower">Borrower</option>
        <option value="lender">Lender</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
