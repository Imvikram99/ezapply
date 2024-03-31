"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/utils/constants";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("JOBSEEKER");
  const router = useRouter();

  useEffect(() => {
    const queryString = window.location.search;

    const referralCode = new URLSearchParams(queryString).get("refralcode");

    setReferralCode(referralCode);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {

      const userData = {
        username: username,
        password: password,
        role: role,
      };
  
      // If referralCode exists, add it to the userData object
      if (referralCode) {
        userData.referralCode = referralCode;
      }

      const response = await axios.post(`${baseUrl}/auth/signup`,userData);

      console.log(response.data);
      toast.success(response.data.message); // Display success message
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  }

  return (
    <div className="signup-page">
      <Toaster />
      <img src={"/sign.jpg"} className="login-img" />
      <div className="auth-container">
        <h1>
          <b>Welcome Guest,</b> Sign up for Ezapply
        </h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="field-container">
            <label htmlFor="email" className="field-label">
              Email Address
            </label>
            <input
              id="signUp-email-input"
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
            <div className="signUpPasswordWrapper">
              <input
                id="signUpPassword"
                type="password"
                placeholder="Enter 8 characters or more"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field-container">
            <label htmlFor="confirmpassword" className="field-label">
              Confirm Password
            </label>
            <div className="signUpConfirmPassWrapper">
              <input
                id="signUpConfirmPassword"
                type="password"
                placeholder="Same password as above"
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button id="signUpSubmit" type="submit" className="submit-button">
            Continue
          </button>
          <div className="switch-container">
            <p>
              Already have an account?{" "}
              <span
                tabIndex="0"
                onClick={() => router.push("/login", { scroll: false })}
              >
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
