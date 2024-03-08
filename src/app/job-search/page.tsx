"use client";

import InputTag from "@/components/InputTag";
import { baseUrl } from "@/utils/constants";
import axios from "axios";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

const initialFormData = {
  firstName: "",
  lastName: "",
  profileId: "",
  email: "",
  phoneNumber: "",
  resumeLink: "",
  coverLetterLink: "",
  skills: [""],
  educationHistory: [
    {
      degree: "",
      fieldOfStudy: "",
      institutionName: "",
      graduationYear: "",
    },
  ],
  workExperience: [
    {
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  certifications: [""],
  personalProjects: [
    {
      projectName: "",
      projectDescription: "",
      technologiesUsed: "",
      projectLink: "",
    },
  ],
  professionalSummary: "",
  desiredJobTitle: "",
  languages: [""],
  linkedInProfile: "",
  portfolioLink: "",
  githubLink: "",
  twitterHandle: "",
  availability: "",
  preferredLocations: [""],
  willingToRelocate: false,
  seekingFullTime: false,
  seekingPartTime: false,
  seekingContract: false,
  industryPreferences: [""],
  companyPreferences: [""],
  currentCtc: "",
  expectedCtc: "",
  currentAddress: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  permanentAddress: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  isServingNoticePeriod: false,
  dateOfJoiningAtNewOrg: "",
  officialNoticePeriod: "",
  isNoticePeriodNegotiable: false,
  earliestYouCanJoin: "",
};

const JobSeekerRegistration = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [skills, setSkills]: any = useState([]);
  const [certifications, setCertifications]: any = useState([]);
  const [languages, setLanguages]: any = useState([]);
  const [locations, setLocations]: any = useState([]);
  const [industry, setIndustry]: any = useState([]);
  const [company, setCompany]: any = useState([]);

  const handleChange = (e : any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleWorkExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const workExperience = [...prevState.workExperience];

      console.log(workExperience)

      const toChange : any = (workExperience[index])


      toChange[name] =
        value;
      return { ...prevState, workExperience };
    });
  };

  const handleAddWorkExperience = () => {
    setFormData((prevState) => ({
      ...prevState,
      workExperience: [
        ...prevState.workExperience,
        {
          companyName: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const handleEducationHistoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedEducationHistory: any = [...prevState.educationHistory];
      updatedEducationHistory[index][name] = value;
      return { ...prevState, educationHistory: updatedEducationHistory };
    });
  };

  const handleAddEducationHistory = () => {
    setFormData((prevState) => ({
      ...prevState,
      educationHistory: [
        ...prevState.educationHistory,
        {
          degree: "",
          fieldOfStudy: "",
          institutionName: "",
          graduationYear: "",
        },
      ],
    }));
  };

  const handlePersonalProjectsChange = (
    e: { target: { name: any; value: any } },
    index: string | number
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedPersonalProjects: any = [...prevState.personalProjects];
      updatedPersonalProjects[index][name] = value;
      return { ...prevState, personalProjects: updatedPersonalProjects };
    });
  };

  const handleAddPersonalProject = () => {
    setFormData((prevState) => ({
      ...prevState,
      personalProjects: [
        ...prevState.personalProjects,
        {
          projectName: "",
          projectDescription: "",
          technologiesUsed: "",
          projectLink: "",
        },
      ],
    }));
  };




  
const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  formData.skills = skills.map((x : any) => x.text);
  formData.certifications = certifications.map((x : any) => x.text);
  formData.languages = languages.map((x : any) => x.text);
  formData.preferredLocations = locations.map((x : any) => x.text);
  formData.industryPreferences = industry.map((x : any) => x.text);
  formData.companyPreferences = company.map((x : any) => x.text);

  // Constructing the request body
  const requestBody = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    profileId: formData.profileId,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    resumeLink: formData.resumeLink,
    coverLetterLink: formData.coverLetterLink,
    skills: formData.skills,
    educationHistory: formData.educationHistory,
    workExperience: formData.workExperience,
    certifications: formData.certifications,
    personalProjects: formData.personalProjects,
    professionalSummary: formData.professionalSummary,
    desiredJobTitle: formData.desiredJobTitle,
    languages: formData.languages,
    linkedInProfile: formData.linkedInProfile,
    portfolioLink: formData.portfolioLink,
    githubLink: formData.githubLink,
    twitterHandle: formData.twitterHandle,
    availability: formData.availability,
    preferredLocations: formData.preferredLocations,
    willingToRelocate: formData.willingToRelocate,
    seekingFullTime: formData.seekingFullTime,
    seekingPartTime: formData.seekingPartTime,
    seekingContract: formData.seekingContract,
    industryPreferences: formData.industryPreferences,
    companyPreferences: formData.companyPreferences,
    currentCtc: formData.currentCtc,
    expectedCtc: formData.expectedCtc,
    currentAddress: formData.currentAddress,
    permanentAddress: formData.permanentAddress,
    isServingNoticePeriod: formData.isServingNoticePeriod,
    dateOfJoiningAtNewOrg: formData.dateOfJoiningAtNewOrg,
    officialNoticePeriod: formData.officialNoticePeriod,
    isNoticePeriodNegotiable: formData.isNoticePeriodNegotiable,
    earliestYouCanJoin: formData.earliestYouCanJoin,
  };

  try {
    // Sending the POST request using Axios
    const response = await axios.post(
    `${baseUrl}/api/jobseekers/register`,
      requestBody,
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYWZpejQwMyIsInJvbGVzIjpbIlJPTEVfSk9CU0VFS0VSIl0sImlhdCI6MTcwOTgyMjE3MSwiZXhwIjoxNzA5OTA4NTcxfQ.w-ZAnrJJoT7_gS8FUSTdsyiSZCVc5z-YLKO1iZwd8JY',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data); // Log the response data
  } catch (error) {
    console.error('Error:', error); // Log any errors that occur during the request
  }
};

  return (
    <div className="signup-page">
      <Toaster />
      <img src={"/login.jpg"} className="login-img" />
      <div
        className="auth-container"
        style={{ maxHeight: "100vh", overflow: "sroll" }}
      >
        <h1>
          <b>Welcome Guest,</b> Register as a Job Seeker
        </h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div style={{ display: "flex", gap: 20 }}>
            <div className="field-container">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="field-container">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field-container">
            <label htmlFor="profileId">Profile ID:</label>
            <input
              type="text"
              name="profileId"
              value={formData.profileId}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label htmlFor="resumeLink">Resume Link:</label>
            <input
              type="text"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label htmlFor="coverLetterLink">Cover Letter Link:</label>
            <input
              type="text"
              name="coverLetterLink"
              value={formData.coverLetterLink}
              onChange={handleChange}
            />
          </div>
          {/* Add similar input fields for other personal information */}

          <InputTag tags={skills} setTags={setSkills} text={"Skills"} />

          {/* Work Experience */}

          {formData.workExperience.map((exp, index) => (
            <div key={index}>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontWeight: 600,
                  paddingTop: 40,
                  fontSize: 22,
                }}
              >
                Work Experience {index + 1}
              </h2>
              <div className="field-container">
                <label htmlFor={`companyName${index}`}>Company Name:</label>
                <input
                  type="text"
                  name={`companyName`}
                  value={exp.companyName}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`jobTitle${index}`}>Job Title:</label>
                <input
                  type="text"
                  name={`jobTitle`}
                  value={exp.jobTitle}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`startDate${index}`}>Start Date:</label>
                <input
                  type="text"
                  name={`startDate`}
                  value={exp.startDate}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`endDate${index}`}>End Date:</label>
                <input
                  type="text"
                  name={`endDate`}
                  value={exp.endDate}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`description${index}`}>Description:</label>
                <textarea
                  name={`description`}
                  value={exp.description}
                  onChange={(e: any) => handleWorkExperienceChange(e, index)}
                />
              </div>
            </div>
          ))}

          <button
            className="add-btn"
            type="button"
            onClick={handleAddWorkExperience}
          >
            <PlusIcon />
          </button>

          {formData.educationHistory.map((edu, index) => (
            <div key={index}>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontWeight: 600,
                  paddingTop: 40,
                  fontSize: 22,
                }}
              >
                Education History {index + 1}
              </h2>
              <div className="field-container">
                <label htmlFor={`degree${index}`}>Degree:</label>
                <input
                  type="text"
                  name={`degree`}
                  value={edu.degree}
                  onChange={(e) => handleEducationHistoryChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`fieldOfStudy${index}`}>Field of Study:</label>
                <input
                  type="text"
                  name={`fieldOfStudy`}
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleEducationHistoryChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`institutionName${index}`}>
                  Institution Name:
                </label>
                <input
                  type="text"
                  name={`institutionName`}
                  value={edu.institutionName}
                  onChange={(e) => handleEducationHistoryChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`graduationYear${index}`}>
                  Graduation Year:
                </label>
                <input
                  type="text"
                  name={`graduationYear`}
                  value={edu.graduationYear}
                  onChange={(e) => handleEducationHistoryChange(e, index)}
                />
              </div>
            </div>
          ))}

          <button
            className="add-btn"
            type="button"
            onClick={handleAddEducationHistory}
          >
            <PlusIcon />
          </button>

          {formData.personalProjects.map((project, index) => (
            <div key={index}>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontWeight: 600,
                  paddingTop: 40,
                  fontSize: 22,
                }}
              >
                Personal Project {index + 1}
              </h2>
              <div className="field-container">
                <label htmlFor={`projectName${index}`}>Project Name:</label>
                <input
                  type="text"
                  name={`projectName`}
                  value={project.projectName}
                  onChange={(e) => handlePersonalProjectsChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`projectDescription${index}`}>
                  Project Description:
                </label>
                <textarea
                  name={`projectDescription`}
                  value={project.projectDescription}
                  onChange={(e) => handlePersonalProjectsChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`technologiesUsed${index}`}>
                  Technologies Used:
                </label>
                <input
                  type="text"
                  name={`technologiesUsed`}
                  value={project.technologiesUsed}
                  onChange={(e) => handlePersonalProjectsChange(e, index)}
                />
              </div>
              <div className="field-container">
                <label htmlFor={`projectLink${index}`}>Project Link:</label>
                <input
                  type="text"
                  name={`projectLink`}
                  value={project.projectLink}
                  onChange={(e) => handlePersonalProjectsChange(e, index)}
                />
              </div>
            </div>
          ))}

          <button
            className="add-btn"
            type="button"
            onClick={handleAddPersonalProject}
          >
            <PlusIcon />
          </button>

          <InputTag
            tags={certifications}
            setTags={setCertifications}
            text={"Certifications"}
          />

          <div className="field-container">
            <label htmlFor="professionalSummary">Professional Summary:</label>
            <textarea
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="desiredJobTitle">Desired Job Title:</label>
            <input
              type="text"
              name="desiredJobTitle"
              value={formData.desiredJobTitle}
              onChange={handleChange}
            />
          </div>

          <InputTag
            tags={languages}
            setTags={setLanguages}
            text={"Languages"}
          />

          <div className="field-container">
            <label htmlFor="linkedInProfile">LinkedIn Profile:</label>
            <input
              type="text"
              name="linkedInProfile"
              value={formData.linkedInProfile}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="portfolioLink">Portfolio Link:</label>
            <input
              type="text"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="githubLink">GitHub Link:</label>
            <input
              type="text"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="twitterHandle">Twitter Handle:</label>
            <input
              type="text"
              name="twitterHandle"
              value={formData.twitterHandle}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="availability">Availability:</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
            />
          </div>

          <InputTag
            tags={locations}
            setTags={setLocations}
            text={"Preffered Locations"}
          />

          <div className="field-container">
            <label htmlFor="willingToRelocate">Willing to Relocate:</label>
            <input
              type="checkbox"
              name="willingToRelocate"
              checked={formData.willingToRelocate}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="seekingFullTime">Seeking Full Time:</label>
            <input
              type="checkbox"
              name="seekingFullTime"
              checked={formData.seekingFullTime}
              onChange={handleChange}
            />
          </div>

          {/* Add similar checkboxes for seekingPartTime and seekingContract */}

          <InputTag
            tags={industry}
            setTags={setIndustry}
            text={"Preffered Industries"}
          />

          <InputTag
            tags={company}
            setTags={setCompany}
            text={"Preffered Companies"}
          />

          <div className="field-container">
            <label htmlFor="currentCtc">Current CTC:</label>
            <input
              type="number"
              name="currentCtc"
              value={formData.currentCtc}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="expectedCtc">Expected CTC:</label>
            <input
              type="number"
              name="expectedCtc"
              value={formData.expectedCtc}
              onChange={handleChange}
            />
          </div>

          {/* Address Fields */}
          {/* You can use similar input fields for address fields */}

          <div className="field-container">
            <label htmlFor="isServingNoticePeriod">
              Is Serving Notice Period:
            </label>
            <input
              type="checkbox"
              name="isServingNoticePeriod"
              checked={formData.isServingNoticePeriod}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="dateOfJoiningAtNewOrg">
              Date of Joining at New Organization:
            </label>
            <input
              type="date"
              name="dateOfJoiningAtNewOrg"
              value={formData.dateOfJoiningAtNewOrg}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="officialNoticePeriod">
              Official Notice Period:
            </label>
            <input
              type="number"
              name="officialNoticePeriod"
              value={formData.officialNoticePeriod}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="isNoticePeriodNegotiable">
              Is Notice Period Negotiable:
            </label>
            <input
              type="checkbox"
              name="isNoticePeriodNegotiable"
              checked={formData.isNoticePeriodNegotiable}
              onChange={handleChange}
            />
          </div>

          <div className="field-container">
            <label htmlFor="earliestYouCanJoin">Earliest You Can Join:</label>
            <input
              type="date"
              name="earliestYouCanJoin"
              value={formData.earliestYouCanJoin}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobSeekerRegistration;

// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "profileId": "JD12345",
//   "email": "john.doe@example.com",
//   "phoneNumber": "123-456-7890",
//   "resumeLink": "http://example.com/resume/johndoe",
//   "coverLetterLink": "http://example.com/coverletter/johndoe",
//   "skills": [
//   "Java",
//   "Spring Boot",
//   "MongoDB",
//   "Microservices"
//   ],
//   "educationHistory": [
//   {
//   "degree": "Bachelor of Technology",
//   "fieldOfStudy": "Computer Science",
//   "institutionName": "Tech University",
//   "graduationYear": "2018"
//   }
//   ],
//   "workExperience": [
//   {
//   "companyName": "Tech Innovations",
//   "jobTitle": "Software Developer",
//   "startDate": "2019-01-01",
//   "endDate": "2021-12-31",
//   "description": "Developed and maintained multiple high-profile enterprise applications."
//   }
//   ],
//   "certifications": [
//   "Oracle Certified Professional, Java SE 8 Programmer",
//   "AWS Certified Solutions Architect – Associate"
//   ],
//   "personalProjects": [
//   {
//   "projectName": "Personal Finance Tracker",
//   "projectDescription": "A web application for tracking personal finances and investments.",
//   "technologiesUsed": "React, Node.js, MongoDB",
//   "projectLink": "http://example.com/projects/finance-tracker"
//   }
//   ],
//   "professionalSummary": "Experienced software developer with a strong background in Java and cloud technologies.",
//   "desiredJobTitle": "Senior Software Engineer",
//   "languages": [
//   "English",
//   "Spanish"
//   ],
//   "linkedInProfile": "http://linkedin.com/in/johndoe",
//   "portfolioLink": "http://johndoe.com",
//   "githubLink": "http://github.com/johndoe",
//   "twitterHandle": "@johndoe",
//   "availability": "Immediately",
//   "preferredLocations": [
//   "New York",
//   "San Francisco"
//   ],
//   "willingToRelocate": true,
//   "seekingFullTime": true,
//   "seekingPartTime": false,
//   "seekingContract": false,
//   "industryPreferences": [
//   "Technology",
//   "Finance"
//   ],
//   "companyPreferences": [
//   "Tech Innovations",
//   "Finance Forward"
//   ],
//   "currentCtc": 80000,
//   "expectedCtc": 100000,
//   "currentAddress": {
//   "street": "123 Tech Lane",
//   "city": "Techville",
//   "state": "TechState",
//   "postalCode": "12345",
//   "country": "Techland"
//   },
//   "permanentAddress": {
//   "street": "456 Home Road",
//   "city": "HomeTown",
//   "state": "HomeState",
//   "postalCode": "67890",
//   "country": "Homeland"
//   },
//   "isServingNoticePeriod": true,
//   "dateOfJoiningAtNewOrg": "2024-01-01",
//   "officialNoticePeriod": 60,
//   "isNoticePeriodNegotiable": true,
//   "earliestYouCanJoin": "2023-12-01"
//   }

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path
      fill-rule="evenodd"
      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
    ></path>
  </svg>
);
