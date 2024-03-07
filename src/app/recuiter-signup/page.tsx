"use client"

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RecuiterSignup() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("RECUITER");
  const router = useRouter();

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    try {
      // First API call to sign up the user and obtain a token
      const signUpResponse = await axios.post(
        "http://ec2-3-109-211-75.ap-south-1.compute.amazonaws.com:8085/auth/signup",
        {
          username: username,
          password: password,
          role: role,
        }
      );

      console.log({signUpResponse})

      // Extracting the token from the response
      const token = signUpResponse.data.token;

      console.log({token})

      // Second API call to register the user using the obtained token
      const registerResponse = await axios.post(
        "http://ec2-3-109-211-75.ap-south-1.compute.amazonaws.com:8085/api/recruiters/register",
        {
          fullName: fullName,
          phoneNumber: phoneNumber,
          workEmail: workEmail,
          companyType: companyType,
          organization: organization,
          designation: designation,
          location: location,
          email: email
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      console.log(registerResponse.data);
      toast.success(registerResponse.data.message);
      // Redirect or handle success as required
    } catch (error) {
      console.error("Recruiter registration failed:", error);
      toast.error("Recruiter registration failed. Please try again.");
    }
  }


  return (
    <div className="signup-page">
      <Toaster />
      <img src={"/login.jpg"} className="login-img" />
      <div className="auth-container">
        <h1>
          <b>Welcome Guest,</b> Sign up as Recruiter
        </h1>
        <form className="signup-form" onSubmit={handleSubmit}>
        <div className="field-container">
            <label htmlFor="username" className="field-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="fullName" className="field-label">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="phoneNumber" className="field-label">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="1234267890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="workEmail" className="field-label">
              Work Email
            </label>
            <input
              id="workEmail"
              type="email"
              placeholder="john.doe1@company.com"
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="companyType" className="field-label">
              Company Type
            </label>
            <input
              id="companyType"
              type="text"
              placeholder="MNC"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="organization" className="field-label">
              Organization
            </label>
            <input
              id="organization"
              type="text"
              placeholder="Tech Innovations Inc."
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="designation" className="field-label">
              Designation
            </label>
            <input
              id="designation"
              type="text"
              placeholder="Talent Acquisition Manager"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="location" className="field-label">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="New York"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="contact@techinnovations.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
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
