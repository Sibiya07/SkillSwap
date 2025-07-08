import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/users/register', form);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
     

      <div className="register-form">
        <h2>Create an Account</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              minLength="6"
              className="form-input"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`submit-button ${loading ? 'loading' : ''}`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        
        <div className="login-link">
          Already have an account?{' '}
          <Link to="/login" className="link">
            Login here
          </Link>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f3f4f6;
          padding: 20px;
        }
        
        .success-message {
          font-size: 1.875rem;
          font-weight: bold;
          color: #2563eb;
          text-align: center;
          margin-top: 2.5rem;
        }
        
        .register-form {
          width: 100%;
          max-width: 28rem;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }
        
        .register-form h2 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .error-message {
          margin-bottom: 1rem;
          padding: 0.75rem;
          background-color: #fee2e2;
          color: #b91c1c;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }
        
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.25rem;
        }
        
        .form-input {
          width: 100%;
          padding: 0.5rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          outline: none;
        }
        
        .form-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }
        
        .submit-button {
          width: 100%;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          color: white;
          font-weight: 500;
          border: none;
          cursor: pointer;
          outline: none;
        }
        
        .submit-button:not(.loading) {
          background-color: #2563eb;
        }
        
        .submit-button:not(.loading):hover {
          background-color: #1d4ed8;
        }
        
        .submit-button:focus {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }
        
        .submit-button.loading {
          background-color: #60a5fa;
          cursor: not-allowed;
        }
        
        .login-link {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.875rem;
          color: #4b5563;
        }
        
        .link {
          color: #2563eb;
          font-weight: 500;
          text-decoration: none;
        }
        
        .link:hover {
          color: #1e40af;
        }
      `}</style>
    </div>
  );
};

export default Register;