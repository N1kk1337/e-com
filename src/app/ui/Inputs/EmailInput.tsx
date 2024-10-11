import React from 'react';

const EmailInput: React.FC = () => {
  return (
    <input
      type="email"
      placeholder="Email *"
      className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
    />
  );
};

export default EmailInput;
