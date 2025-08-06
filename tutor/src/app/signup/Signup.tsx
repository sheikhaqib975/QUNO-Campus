import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created!");
    navigate('/login'); // ✅ works if route exists
  };

  return (
    <div className="box" style={{
      filter: "drop-shadow(0 15px 50px #000)",
      borderRadius: "20px",
    }}>
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Name</label>
              <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <label>Email address</label>
              <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input type="password" name="password" className="form-control" required value={formData.password} onChange={handleChange} />
            </div>
            <div className="form-group mb-4">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" className="form-control" required value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
