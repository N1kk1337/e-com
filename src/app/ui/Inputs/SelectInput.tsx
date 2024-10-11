import React from 'react';

const SelectInput: React.FC = () => {
  return (
    <select className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500">
      <option>Select</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  );
};

export default SelectInput;
