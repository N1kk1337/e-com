import React from 'react';

const MessageTextarea: React.FC = () => {
  return (
    <textarea
      placeholder="Message"
      className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      rows={4}
    ></textarea>
  );
};

export default MessageTextarea;
