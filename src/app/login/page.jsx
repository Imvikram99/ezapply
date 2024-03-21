"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { baseUrl } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("JOBSEEKER");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        username: username,
        password: password,
        role,
      });

      if (response.data.token) {
        toast.success("Successfully logged in."); // Display success message
        localStorage.setItem("authenticated", response.data.token);
        router.push("/home", { scroll: false });
      }
    } catch (error) {
      if (error.response.status == 417) {
        toast.error("Authentication Failed");
        return;
      }
      toast.error("Login failed. Please try again.");
    }
  }

  return (
    <div className="signup-page">
      <Toaster />
      <img src={"/login.jpg"} className="login-img" />
      <div className="auth-container">
        <h1>
          <b>Welcome Guest,</b> Sign in to Ezapply
        </h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="field-container">
            <label htmlFor="email" className="field-label">
              Email Address
            </label>
            <input
              id="signIn-email-input"
              type="text"
              placeholder="you@example.com"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field-container field-container-relative">
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <div className="signInPasswordWrapper">
              <input
                id="signInPassword"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <input
              type="radio"
              id="yes"
              name="isOpen"
              value="true"
              checked={role === "JOBSEEKER"}
              onChange={() => setRole("JOBSEEKER")}
            />
            <label htmlFor="JOBSEEKER">JOB SEEKER</label>
            <input
              type="radio"
              id="no"
              name="isOpen"
              value="false"
              checked={role === "RECUITER"}
              onChange={() => setRole("RECUITER")}
            />
            <label htmlFor="RECUITER">RECUITER</label>
          </div>

          <button id="signInSubmit" type="submit" className="submit-button">
            Sign In
          </button>
          <div className="switch-container">
            <p>
              Don't have an account?{" "}
              <span
                tabIndex="0"
                onClick={() => router.push("/signup", { scroll: false })}
              >
                Sign up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
