import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // ✅ Save token to localStorage
        alert("Login successful");
        navigate("/admin/songs");
      } else {
        alert("Login failed: No token received");
      }
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };

  return (
    <div
      className="container min-vh-100 d-flex justify-content-center align-items-center"
   
    >
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div
            className="card shadow-lg rounded-4 border-0"
           
          >
            <div className="card-body p-5">
              <h2 className="text-center mb-4 fw-bold text-primary">Admin Login</h2>
              
              <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="adminEmail" className="form-label fw-semibold">
                  {/* <FaEnvelope className="me-2 text-secondary" /> */}
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter admin email"
                  className="form-control mb-3 rounded-3 shadow-sm"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
  
                <label htmlFor="password" className="form-label fw-semibold">
                  {/* <FaLock className="me-2 text-secondary" /> */}
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control mb-4 rounded-3 shadow-sm"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
  
                <div className="d-grid">
                  <button
                    className="btn btn-primary py-2 fw-semibold d-flex justify-content-center align-items-center gap-2"
                    type="submit"
                
                  >
                   
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login