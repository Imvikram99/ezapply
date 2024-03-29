"use client";

import withAuth from "@/components/Auth";
import InputTag from "@/components/InputTag";
import { baseUrl } from "@/utils/constants";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
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
  const [currentStreet, setCurrentStreet] = useState("123 Tech Lane");
  const [currentCity, setCurrentCity] = useState("Techville");
  const [currentState, setCurrentState] = useState("TechState");
  const [currentPostalCode, setCurrentPostalCode] = useState("12345");
  const [currentCountry, setCurrentCountry] = useState("Techland");
  const [permanentStreet, setPermanentStreet] = useState("456 Home Road");
  const [permanentCity, setPermanentCity] = useState("HomeTown");
  const [permanentState, setPermanentState] = useState("HomeState");
  const [permanentPostalCode, setPermanentPostalCode] = useState("67890");
  const [permanentCountry, setPermanentCountry] = useState("Homeland");
  const [currentStep, setCurrentStep] = useState(1);
  
  const [loading, setLoading] = useState(false);


  useEffect(() => {

  setLoading(true)

  const token : any = localStorage.getItem('authenticated') 

  const decoded : any = jwtDecode(token)

  if(!decoded.roles.includes("ROLE_JOBSEEKER")){
    window.location.href="/login"
  }

  setTimeout(() => {
    setLoading(false) 
  }, 2000);
  

}, [])

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

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

      console.log(workExperience);

      const toChange: any = workExperience[index];

      toChange[name] = value;
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

  const handleRemoveWorkExperience = () => {
    setFormData((prevState) => ({
      ...prevState,
      workExperience: prevState.workExperience.slice(0, -1),
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

  const handleRemoveEducationHistory = () => {
    setFormData((prevState) => ({
      ...prevState,
      educationHistory: prevState.educationHistory.slice(0, -1),
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

  const handleRemovePersonalProject = () => {
    setFormData((prevState) => ({
      ...prevState,
      personalProjects: prevState.personalProjects.slice(0, -1),
    }));
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

  const handleInputChange = (e: any, setter: any) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    formData.skills = skills.map((x: any) => x.text);
    formData.certifications = certifications.map((x: any) => x.text);
    formData.languages = languages.map((x: any) => x.text);
    formData.preferredLocations = locations.map((x: any) => x.text);
    formData.industryPreferences = industry.map((x: any) => x.text);
    formData.companyPreferences = company.map((x: any) => x.text);

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
      currentAddress: {
        street: currentStreet,
        city: currentCity,
        state: currentState,
        postalCode: currentPostalCode,
        country: currentCountry,
      },
      permanentAddress: {
        street: permanentStreet,
        city: permanentCity,
        state: permanentState,
        postalCode: permanentPostalCode,
        country: permanentCountry,
      },
      isServingNoticePeriod: formData.isServingNoticePeriod,
      dateOfJoiningAtNewOrg: formData.dateOfJoiningAtNewOrg,
      officialNoticePeriod: formData.officialNoticePeriod,
      isNoticePeriodNegotiable: formData.isNoticePeriodNegotiable,
      earliestYouCanJoin: formData.earliestYouCanJoin,
    };

    const token = localStorage.getItem('authenticated')

    try {
      // Sending the POST request using Axios
      const response = await axios.post(
        `${baseUrl}/api/jobseekers/register`,
        requestBody,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="signup-page">
      <Toaster />
      <img src={"/search.jpg"} className="login-img" />
      <div className="auth-container">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            textTransform: "uppercase",
          }}
        >
          Register as a Job Seeker
        </h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          {currentStep === 1 && (
            <Step1 formData={formData} handleChange={handleChange} skills={skills} setSkills={setSkills}/>
          )}

          {currentStep === 2 && (
            <Step2
              currentStreet={currentStreet}
              setCurrentStreet={setCurrentStreet}
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
              currentState={currentState}
              setCurrentState={setCurrentState}
              currentPostalCode={currentPostalCode}
              setCurrentPostalCode={setCurrentPostalCode}
              currentCountry={currentCountry}
              setCurrentCountry={setCurrentCountry}
              permanentStreet={permanentStreet}
              setPermanentStreet={setPermanentStreet}
              permanentCity={permanentCity}
              setPermanentCity={setPermanentCity}
              permanentState={permanentState}
              setPermanentState={setPermanentState}
              permanentPostalCode={permanentPostalCode}
              setPermanentPostalCode={setPermanentPostalCode}
              permanentCountry={permanentCountry}
              setPermanentCountry={setPermanentCountry}
              handleInputChange={handleInputChange}
            />
          )}
          {currentStep === 3 && (
            <Step3
              formData={formData}
              handleWorkExperienceChange={handleWorkExperienceChange}
              handleRemoveWorkExperience={handleRemoveWorkExperience}
              handleAddWorkExperience={handleAddWorkExperience}
            />
          )}
          {currentStep === 4 && (
            <Step4
              formData={formData}
              handleEducationHistoryChange={handleEducationHistoryChange}
              handleRemoveEducationHistory={handleRemoveEducationHistory}
              handleAddEducationHistory={handleAddEducationHistory}
            />
          )}
          {currentStep === 5 && (
            <Step5
              formData={formData}
              handlePersonalProjectsChange={handlePersonalProjectsChange}
              handleRemovePersonalProject={handleRemovePersonalProject}
              handleAddPersonalProject={handleAddPersonalProject}
            />
          )}

          {currentStep === 6 && (
            <Step6
              formData={formData}
              certifications={certifications}
              setCertifications={setCertifications}
              handleChange={handleChange}
              languages={languages}
              setLanguages={setLanguages}
              locations={locations}
              setLocations={setLocations}
            />
          )}

          {currentStep === 7 && (
            <Step7
              formData={formData}
              handleChange={handleChange}
              industry={industry}
              setIndustry={setIndustry}
              company={company}
              setCompany={setCompany}
            />
          )}
          {/* Navigation buttons */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              onClick={handlePrev}
              className="nav-button"
              style={{
                opacity: currentStep > 1 ? "1" : "0",
                pointerEvents: currentStep > 1 ? "all" : "none",
              }}
            >
              Previous
            </button>

            {currentStep < 7 && (
              <button type="button" onClick={handleNext} className="nav-button">
                Next
              </button>
            )}
            {currentStep === 7 && (
              <button type="submit" className="submit-button job">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(JobSeekerRegistration);

const Step7 = ({
  formData,
  handleChange,
  industry,
  setIndustry,
  company,
  setCompany,
}: any) => {
  return (
    <>
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

      <div
        className="field-container"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <label htmlFor="isServingNoticePeriod">Is Serving Notice Period:</label>
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
        <label htmlFor="officialNoticePeriod">Official Notice Period:</label>
        <input
          type="number"
          name="officialNoticePeriod"
          value={formData.officialNoticePeriod}
          onChange={handleChange}
        />
      </div>

      <div
        className="field-container"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
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

      <div
        className="field-container"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <label htmlFor="willingToRelocate">Willing to Relocate:</label>
        <input
          type="checkbox"
          name="willingToRelocate"
          checked={formData.willingToRelocate}
          onChange={handleChange}
        />
      </div>

      <div
        className="field-container"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <label htmlFor="seekingFullTime">Seeking Full Time:</label>
        <input
          type="checkbox"
          name="seekingFullTime"
          checked={formData.seekingFullTime}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

const Step6 = ({
  formData,
  certifications,
  setCertifications,
  handleChange,
  languages,
  setLanguages,
  locations,
  setLocations,
}: any) => {
  return (
    <>
      <InputTag
        tags={certifications}
        setTags={setCertifications}
        text={"Certifications"}
      />

      <div className="field-container">
        <label htmlFor="professionalSummary">Professional Summary:</label>
        <textarea
          name="professionalSummary"
          style={{color: '#000'}}
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

      <InputTag tags={languages} setTags={setLanguages} text={"Languages"} />

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
    </>
  );
};

const Step5 = ({
  formData,
  handleAddPersonalProject,
  handleRemovePersonalProject,
  handlePersonalProjectsChange,
}: any) => {
  return (
    <>
      {formData.personalProjects.map((project: any, index: number) => (
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
               style={{color: '#000'}}
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

      <div style={{ display: "flex", gap: 10 }}>
        <button
          className="add-btn"
          type="button"
          onClick={handleAddPersonalProject}
        >
          <PlusIcon />
        </button>
        {formData.personalProjects.length > 1 && (
          <button
            className="add-btn"
            type="button"
            onClick={handleRemovePersonalProject}
          >
            <MinusIcon />
          </button>
        )}
      </div>
    </>
  );
};

const Step4 = ({
  formData,
  handleEducationHistoryChange,
  handleRemoveEducationHistory,
  handleAddEducationHistory,
}: any) => {
  return (
    <>
      {formData.educationHistory.map((edu: any, index: any) => (
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
            <label htmlFor={`institutionName${index}`}>Institution Name:</label>
            <input
              type="text"
              name={`institutionName`}
              value={edu.institutionName}
              onChange={(e) => handleEducationHistoryChange(e, index)}
            />
          </div>
          <div className="field-container">
            <label htmlFor={`graduationYear${index}`}>Graduation Year:</label>
            <input
              type="text"
              name={`graduationYear`}
              value={edu.graduationYear}
              onChange={(e) => handleEducationHistoryChange(e, index)}
            />
          </div>
        </div>
      ))}
      <div style={{ display: "flex", gap: 10 }}>
        <button
          className="add-btn"
          type="button"
          onClick={handleAddEducationHistory}
        >
          <PlusIcon />
        </button>
        {formData.educationHistory.length > 1 && (
          <button
            className="add-btn"
            type="button"
            onClick={handleRemoveEducationHistory}
          >
            <MinusIcon />
          </button>
        )}
      </div>
    </>
  );
};

const Step3 = ({
  formData,
  handleWorkExperienceChange,
  handleRemoveWorkExperience,
  handleAddWorkExperience,
}: any) => {
  return (
    <>
      {formData.workExperience.map((exp: any, index: any) => (
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
            style={{color: '#000'}}
              name={`description`}
              value={exp.description}
              onChange={(e: any) => handleWorkExperienceChange(e, index)}
            />
          </div>
        </div>
      ))}

      <div style={{ display: "flex", gap: 10 }}>
        <button
          className="add-btn"
          type="button"
          onClick={handleAddWorkExperience}
        >
          <PlusIcon />
        </button>
        {formData.workExperience.length > 1 && (
          <button
            className="add-btn"
            type="button"
            onClick={handleRemoveWorkExperience}
          >
            <MinusIcon />
          </button>
        )}
      </div>
    </>
  );
};

const Step2 = ({
  currentStreet,
  setCurrentStreet,
  currentCity,
  setCurrentCity,
  currentState,
  setCurrentState,
  currentPostalCode,
  setCurrentPostalCode,
  currentCountry,
  setCurrentCountry,
  permanentStreet,
  setPermanentStreet,
  permanentCity,
  setPermanentCity,
  permanentState,
  setPermanentState,
  permanentPostalCode,
  setPermanentPostalCode,
  permanentCountry,
  setPermanentCountry,
  handleInputChange,
}: any) => {
  return (
    <>
      <div>
        <div className="field-container">
          <label htmlFor="currentStreet">Current Street:</label>
          <input
            type="text"
            id="currentStreet"
            value={currentStreet}
            onChange={(e) => handleInputChange(e, setCurrentStreet)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="currentCity">Current City:</label>
          <input
            type="text"
            id="currentCity"
            value={currentCity}
            onChange={(e) => handleInputChange(e, setCurrentCity)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="currentState">Current State:</label>
          <input
            type="text"
            id="currentState"
            value={currentState}
            onChange={(e) => handleInputChange(e, setCurrentState)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="currentPostalCode">Current Postal Code:</label>
          <input
            type="text"
            id="currentPostalCode"
            value={currentPostalCode}
            onChange={(e) => handleInputChange(e, setCurrentPostalCode)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="currentCountry">Current Country:</label>
          <input
            type="text"
            id="currentCountry"
            value={currentCountry}
            onChange={(e) => handleInputChange(e, setCurrentCountry)}
          />
        </div>
      </div>

      <div>
        <div className="field-container">
          <label htmlFor="permanentStreet">Permanent Street:</label>
          <input
            type="text"
            id="permanentStreet"
            value={permanentStreet}
            onChange={(e) => handleInputChange(e, setPermanentStreet)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="permanentCity">Permanent City:</label>
          <input
            type="text"
            id="permanentCity"
            value={permanentCity}
            onChange={(e) => handleInputChange(e, setPermanentCity)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="permanentState">Permanent State:</label>
          <input
            type="text"
            id="permanentState"
            value={permanentState}
            onChange={(e) => handleInputChange(e, setPermanentState)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="permanentPostalCode">Permanent Postal Code:</label>
          <input
            type="text"
            id="permanentPostalCode"
            value={permanentPostalCode}
            onChange={(e) => handleInputChange(e, setPermanentPostalCode)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="permanentCountry">Permanent Country:</label>
          <input
            type="text"
            id="permanentCountry"
            value={permanentCountry}
            onChange={(e) => handleInputChange(e, setPermanentCountry)}
          />
        </div>
      </div>
    </>
  );
};

const Step1 = ({ formData, handleChange, skills, setSkills }: any) => {
  return (
    <>
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
    </>
  );
};
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
      fillRule="evenodd"
      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
    ></path>
  </svg>
);


const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path fillRule="evenodd" d="M 2 11 L 22 11 L 22 13 L 2 13 Z"></path>
  </svg>
);
