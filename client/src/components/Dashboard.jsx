import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to SkillSwap 👋</h1>
      <p className="subtext">
        Discover talents, exchange skills, and grow together with our community!
      </p>

      <div className="dashboard-cards">
        <Link to="/skills" className="dashboard-card">
          <h3>Explore Skills</h3>
          <p>Browse and learn new skills shared by others.</p>
        </Link>

        <Link to="/profile" className="dashboard-card">
          <h3>Your Profile</h3>
          <p>Update your information and showcase your skills.</p>
        </Link>

        <Link to="/exchanges" className="dashboard-card">
          <h3>My Exchanges</h3>
          <p>Manage skill exchange requests and collaborations.</p>
        </Link>

        <Link to="/all-chats" className="dashboard-card">
          <h3>Messages</h3>
          <p>Chat with your connections and share files or ideas.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
