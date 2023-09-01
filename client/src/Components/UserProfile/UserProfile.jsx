import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Implement save logic here (e.g., update user data in the database)
    // ...

    setEditMode(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="user-profile">

      <h2>User Profile</h2>
      {editMode ? (
        <div className="edit-form">

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={updatedUser.username}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedUser.email}
            onChange={handleInputChange}
          />
          {/* Other fields for user profile */}
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="user-details">
          <div className="profile-img">
            <img src={user.img} alt="" />
          </div>
          {/* <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Number : {user.number}</p>
          <p>Gender : {user.gender}</p> */}
          {/* Display other user details */}

          <div className="profile-row">
            <p className="key">Username:</p>
            <p className="value">{user.username}</p>
          </div>
          <div className="profile-row">
            <p className="key">Email:</p>
            <p className="value">{user.email}</p>
          </div>
          <div className="profile-row">
            <p className="key">Number:</p>
            <p className="value">{user.number}</p>
          </div>
          <div className="profile-row">
            <p className="key">Gender:</p>
            <p className="value">{user.gender}</p>
          </div>
          <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
