"use client";
import Image from "next/image";
import { useState } from "react";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // POST request to the backend
    try {
      const response = await fetch("http://localhost:8085/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          role: role,
        }),
      });

      const data = await response.json();

      // Handle response data
      console.log(data);
      alert(data.message); // Display success message
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <div className="signup-page">
      <img src={"/login.jpg"} className="login-img" />
      <div class="auth-container">
        <h1>
          <b>Welcome Guest,</b> Sign in to Ezapply
        </h1>
        <form class="signup-form">
          <div class="field-container">
            <label for="email" class="field-label">
              Email Address
            </label>
            <input
              id="signUp-email-input"
              type="text"
              placeholder="you@example.com"
              name="email"
            />
          </div>
          <div class="field-container field-container-relative">
            <label for="password" class="field-label">
              Password
            </label>
            <div class="signUpPasswordWrapper">
              <input
                id="signUpPassword"
                type="password"
                placeholder="Enter 8 characters or more"
                name="password"
              />
            </div>
          </div>
          
          <button id="signUpSubmit" type="submit" class="submit-button">
            Continue
          </button>
          <div class="switch-container">
            <p>
              Don't have an account? <span tabindex="0">Sign up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
