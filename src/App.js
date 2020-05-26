import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <img src="./app_logo.png" className="App-logo" alt="logo" />
        <ul>
          <li className="selected">Profile</li>
          <li>Help</li>
        </ul>
      </div>
      <header className="App-header">
        <h1>Profile</h1>
      </header>
      <main>
        <div className="profile-info">
          <img className="profile-pic" src="https://secure.gravatar.com/avatar/7063e4e3d83ca275f016542320d08abc?s=400&d=identicon&r=g" alt="Profile Pic" />
          <div id="main-info">
            <label for="full-name">Full Name</label>
            <p id="full-name">super admin</p>
            <label for="email">Email</label>
            <p id="full-name">super@admin.com</p>
            <a id="edit-profile" href="#">Edit Profile</a>
          </div>
          <div className="profile-options">
            <a href="#">Change Password</a>
          </div>
          <div className="profile-options">
            <label id="language-options" for="language">Select App Language</label>
            <select name="language" id="language">
              <option>English</option>
            </select>
          </div>
          <div className="profile-options last">
            <a href="#">Logout</a>
            <span id="logout-options">
              <input type="checkbox" id="logoutAllDevices" name="logoutAllDevices" />
                <label for="logoutAllDevices">Logout All Devices</label>

            </span>
          </div>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
        </div>

      </main>

    </div>
  );
}

export default App;
