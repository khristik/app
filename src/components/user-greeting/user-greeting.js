import React from 'react';

import './user-greeting.css';

const UserGreeting = ({ user }) => {
  return (
    <div className="app-header">
      <h1>Hello { user }</h1>
      <p>What is your main focus for today ?</p>
    </div>
  );
};

export default UserGreeting
