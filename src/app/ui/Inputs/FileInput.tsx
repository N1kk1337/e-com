import React from 'react';
import { FaPaperclip } from 'react-icons/fa';

const FileInput: React.FC = () => {
  return (
    <div className="flex items-center border rounded-lg shadow-sm p-3">
      <FaPaperclip className="text-gray-500 mr-3" />
      <label htmlFor="file-upload" className="w-full text-gray-700">
        Choose File
      </label>
      <input type="file" id="file-upload" className="hidden" />
    </div>
  );
};

export default FileInput;
