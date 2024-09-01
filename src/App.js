import React, { useState } from 'react';
import RegistrationForm from '../src/components/RegistrationForm';
import LoginForm from '../src/components/LoginForm';
import UserList from '../src/components/UserList';
import Welcome from '../src/components/Welcome';
import './App.css'; // Import custom CSS if needed

const App = () => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('register');

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setCurrentPage('welcome');
  };

  const handleNavigation = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#" onClick={(e) => handleNavigation('register', e)}>App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleNavigation('register', e)}>Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleNavigation('login', e)}>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleNavigation('userList', e)}>User List</a>
            </li>
          </ul>
        </div>
      </nav>

      {currentPage === 'register' && <RegistrationForm />}
      {currentPage === 'login' && <LoginForm onLogin={handleLogin} />}
      {currentPage === 'userList' && <UserList />}
      {currentPage === 'welcome' && user && <Welcome user={user} />}
    </div>
  );
};

export default App;

