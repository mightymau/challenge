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
          <img className="profile-pic" src="./profile.png" alt="Profile Pic" />
          <a href="#">Edit Profile</a>
          <label for="full-name">Full Name</label>
          <p id="full-name">super admin</p>
          <label for="email">Email</label>
          <p id="full-name">super@admin.com</p>
          <div>
            <a href="#">Change Password</a>
          </div>
          <div>
            <label for="language">Select App Language</label>
            <select name="language" id="language">
              <option>English</option>
            </select>
          </div>
          <div>
            <a href="#">Logout</a>
            <span>
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
