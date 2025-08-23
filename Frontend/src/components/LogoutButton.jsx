import React from 'react';

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="fixed bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
