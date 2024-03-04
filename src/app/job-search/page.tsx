"use client"
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function JobSeekerRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profileId: "",
    email: "",
    phoneNumber: "",
    resumeLink: "",
    coverLetterLink: "",
    skills: [],
    educationHistory: [],
    workExperience: [],
    certifications: [],
    personalProjects: [],
    professionalSummary: "",
    desiredJobTitle: "",
    languages: [],
    linkedInProfile: "",
    portfolioLink: "",
    githubLink: "",
    twitterHandle: "",
    availability: "",
    preferredLocations: [],
    willingToRelocate: false,
    seekingFullTime: false,
    seekingPartTime: false,
    seekingContract: false,
    industryPreferences: [],
    companyPreferences: [],
    currentCtc: 0,
    expectedCtc: 0,
    currentAddress: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: ""
    },
    permanentAddress: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: ""
    },
    isServingNoticePeriod: false,
    dateOfJoiningAtNewOrg: "",
    officialNoticePeriod: 0,
    isNoticePeriodNegotiable: false,
    earliestYouCanJoin: ""
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    const { currentAddress, permanentAddress } = formData;
    if (name.includes("currentAddress")) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        currentAddress: {
          ...currentAddress,
          [name.split(".")[1]]: value
        }
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        permanentAddress: {
          ...permanentAddress,
          [name.split(".")[1]]: value
        }
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8085/api/jobseekers/register", formData, {
        headers: {
          Authorization: `Bearer your-access-token`,
          "Content-Type": "application/json"
        }
      });

      console.log(response.data);
      toast.success(response.data.message);
      // Redirect or handle success as required
    } catch (error) {
      console.error("Job seeker registration failed:", error);
      toast.error("Job seeker registration failed. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <Toaster />
      <img src={"/login.jpg"} className="login-img" />
      <div className="auth-container" style={{maxHeight: '100vh', overflow: 'sroll'}}>
        <h1>
          <b>Welcome Guest,</b> Register as a Job Seeker
        </h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="field-container">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="field-container">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="field-container">
            <label htmlFor="profileId">Profile ID:</label>
            <input type="text" name="profileId" value={formData.profileId} onChange={handleChange} />
          </div>
          <div className="field-container">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="field-container">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          {/* Add similar input fields for other personal information */}
          
          {/* Address Information */}
          <div className="field-container">
            <label htmlFor="currentAddress.street">Current Address Street:</label>
            <input type="text" name="currentAddress.street" value={formData.currentAddress.street} onChange={handleAddressChange} />
          </div>
          <div className="field-container">
            <label htmlFor="currentAddress.city">Current Address City:</label>
            <input type="text" name="currentAddress.city" value={formData.currentAddress.city} onChange={handleAddressChange} />
          </div>
          <div className="field-container">
            <label htmlFor="currentAddress.state">Current Address State:</label>
            <input type="text" name="currentAddress.state" value={formData.currentAddress.state} onChange={handleAddressChange} />
          </div>
          <div className="field-container">
            <label htmlFor="currentAddress.postalCode">Current Address Postal Code:</label>
            <input type="text" name="currentAddress.postalCode" value={formData.currentAddress.postalCode} onChange={handleAddressChange} />
          </div>
          <div className="field-container">
            <label htmlFor="currentAddress.country">Current Address Country:</label>
            <input type="text" name="currentAddress.country" value={formData.currentAddress.country} onChange={handleAddressChange} />
          </div>
          {/* Add similar input fields for other address information */}
          
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
}
