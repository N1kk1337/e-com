import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput: React.FC = () => {
  return (
    <div className="flex items-center border rounded-lg shadow-sm p-3">
      <FaSearch className="text-gray-500 mr-3" />
      <input
        type="text"
        placeholder="Search"
        className="w-full focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
