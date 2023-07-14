import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // create navigate function

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.role === "manager") {
          alert("Logged in as Manager");
          navigate("/projects"); // navigate to TestPage
        } else if (data.role === "non-manager") {
          alert("Logged in as a Non-Manager");
          navigate("/projects"); // navigate to TestPage
        } else {
          alert("Invalid role");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login failed");
      });
  };

  return (
    <div className="login-form">
      <h1 className="welcome-header">Welcome!</h1>
      <h2 className="login-header">Log in to Project Management App</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-label">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginForm;
