import React from 'react';
import { Link } from 'react-router-dom';

const RedirectButton = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      
      <a href="/success" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"></a>
        Redirect to Success Page
      
    </div>
  );
};

export default RedirectButton;