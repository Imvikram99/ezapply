"use client";

import { baseUrl } from "@/utils/constants";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import Modal from "react-modal";

const JobListing = () => {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([
    {
      title: "UI / UX Designer",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      requiredSkills: ["Full Time", "Min. 1 Year", "Senior Level"],

      headerColor: "#2e2882",
    },
    {
      title: "Sr. Product Designer",
      description:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      requiredSkills: ["Full Time", "Min. 1 Year", "Senior Level"],

      headerColor: "#f76754",
    },
    // Add more jobs as needed
  ]);

  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [currentApplication, setCurrentApplication]: any = React.useState({});

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "35em",
      paddingLeft: "40px",
      maxHeight: "90vh",
      overFlow: "scroll",
      transform: "translate(-50%, -50%)",
      boxShadow: "0em 0.25em 1em rgba(0, 0, 0, 0.25)",
    },
  };

  let subtitle: any;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token: any = localStorage.getItem("authenticated");
        const decoded: any = jwtDecode(token);

        console.log(decoded);

        // Check if the user role includes "ROLE_RECUITER"
        if (!decoded.roles.includes("ROLE_RECUITER")) {
          window.location.href = "/login";
          return;
        }

        const response = await axios.get(
          `${baseUrl}/api/recruitment/job-postings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);

        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div style={{marginLeft:30, marginTop: 30}}><LoaderIcon/></div>;
  }

  const fetchApplications = async (jobId: any) => {
    try {
      const token = localStorage.getItem("authenticated");

      const response = await axios.get(
        `${baseUrl}/api/recruitment/job-postings/${jobId}/applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Applications for Job ID", jobId, ":", response.data);
      setApplications(response.data);
      setShowTable(true);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const hideTable = () => {
    setShowTable(false);
  };

  const renderApplicationsTable = ({
    openModal,
    setCurrentApplication,
  }: any) => {
    return (
      <div>
        <button
          onClick={hideTable}
          style={{
            marginTop: 20,
            display: "flex",
            fontSize: 16,
            fontWeight: "600",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H18v-2z" />
          </svg>{" "}
          Back
        </button>
        <table className="responsive-table">
          <thead className="responsive-table__head">
            <tr className="responsive-table__row">
              <th className="responsive-table__head__title ">Full Name</th>
              <th className="responsive-table__head__title">Email</th>
              <th className="responsive-table__head__title ">Current CTC</th>
              <th className="responsive-table__head__title ">Expected CTC</th>
              <th className="responsive-table__head__title ">Phone Number</th>
              <th className="responsive-table__head__title ">Notice period</th>
            </tr>
          </thead>
          <tbody className="responsive-table__body">
            {applications.map((application: any) => (
              <tr key={application.id} className="responsive-table__row">
                <td className="responsive-table__body__text responsive-table__body__text--name">
                  {application.firstName} {application.lastName}
                </td>
                <td className="responsive-table__body__text">
                  {application.email}
                </td>

                <td className="responsive-table__body__text">
                  {application.currentCtc}
                </td>

                <td className="responsive-table__body__text">
                  {application.expectedCtc}
                </td>

                <td className="responsive-table__body__text">
                  {application.phoneNumber}
                </td>

                <td className="responsive-table__body__text">
                  {application.officialNoticePeriod} Month
                </td>

                <td className="responsive-table__body__text">
                  <button
                    className="remgister"
                    style={{
                      width: 80,
                      height: 32,
                      color: "#fff",
                      background: "#fb4f83",
                    }}
                    onClick={() => {
                      setCurrentApplication(application);
                      openModal();
                    }}
                  >
                    Open
                  </button>
                </td>

                {/* Add more table cells based on the application data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="searched-jobs">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="title">
          Application Details
        </h2>
        <form>
          <div className="h2">User Information</div>

          <div className="info-style">
            <label className="float-label">Name: </label>
            <input
              type="text"
              value={
                (currentApplication?.firstName ?? "") +
                " " +
                (currentApplication?.lastName ?? "")
              }
              className="float-input"
            />
          </div>

          <div className="info-style">
            <label className="float-label">Email: </label>
            <input
              type="text"
              value={currentApplication?.email ?? ""}
              className="float-input"
            />
          </div>

          <div className="info-style">
            <label className="float-label">Professional Summary: </label>
            <input
              type="text"
              value={currentApplication?.professionalSummary ?? ""}
              className="float-input"
            />
          </div>

          <div className="info-style">
            <label className="float-label">Resume Link: </label>
            <input
              type="text"
              value={currentApplication?.resumeLink ?? ""}
              className="float-input"
            />
          </div>

          <div className="info-style">
            <label className="float-label">Cover Letter: </label>
            <input
              type="text"
              value={currentApplication?.coverLetterLink ?? ""}
              className="float-input"
            />
          </div>

          <div className="h2">Address Information</div>

          <div className="info-style">
            <label className="float-label">Current Address: </label>
            <input
              type="text"
              value={
                (currentApplication?.currentAddress?.street ?? "") +
                ", " +
                (currentApplication?.currentAddress?.city ?? "") +
                ", " +
                (currentApplication?.currentAddress?.state ?? "") +
                ", " +
                (currentApplication?.currentAddress?.country ?? "")
              }
              className="float-input"
            />
          </div>

          <div className="info-style">
            <label className="float-label">Permanent Address: </label>
            <input
              type="text"
              value={
                (currentApplication?.permanentAddress?.street ?? "") +
                ", " +
                (currentApplication?.permanentAddress?.city ?? "") +
                ", " +
                (currentApplication?.permanentAddress?.state ?? "") +
                ", " +
                (currentApplication?.permanentAddress?.country ?? "")
              }
              className="float-input"
            />
          </div>

          <div className="h2">Skills & Languages</div>

          <div className="info-style">
            <label className="float-label">Skills: </label>
            <input
              type="text"
              value={currentApplication?.skills?.join(", ") ?? ""}
              className="float-input"
            />
          </div>

          <div className="info-style">
            <label className="float-label">Languages: </label>
            <input
              type="text"
              value={currentApplication?.languages?.join(", ") ?? ""}
              className="float-input"
            />
          </div>

          <div className="h2">Experience & Education</div>

          <div className="info-style">
            <label className="float-label">Industry Preferences: </label>
            <ul className="bullet-list">
              {currentApplication?.industryPreferences?.map(
                (item: any, index: number) => <li key={index}>{item}</li>
              ) ?? <li>No industry preferences available</li>}
            </ul>
          </div>

          <div className="info-style">
            <label className="float-label">Company Preferences: </label>
            <ul className="bullet-list">
              {currentApplication?.companyPreferences?.map(
                (item: any, index: number) => <li key={index}>{item}</li>
              ) ?? <li>No company preferences available</li>}
            </ul>
          </div>

          <div className="info-style">
            <label className="float-label">Education History: </label>
            <ul className="bullet-list">
              {currentApplication?.educationHistory?.map(
                (edu: any, index: number) => (
                  <li key={index}>
                    {edu.degree} in {edu.fieldOfStudy} from{" "}
                    {edu.institutionName} <br />
                    Graduated in {edu.graduationYear}
                  </li>
                )
              ) ?? <li>No education history available</li>}
            </ul>
          </div>

          <div className="info-style">
            <label className="float-label">Work Experience: </label>
            <ul className="bullet-list">
              {currentApplication?.workExperience?.map(
                (exp: any, index: number) => (
                  <li key={index}>
                    {exp.jobTitle} at {exp.companyName},<br /> {exp.startDate} -{" "}
                    {exp.endDate} <br /> {exp.description}
                  </li>
                )
              ) ?? <li>No work experience available</li>}
            </ul>
          </div>

          <div className="info-style">
            <label className="float-label">Certifications: </label>
            <ul className="bullet-list">
              {currentApplication?.certifications?.map(
                (item: any, index: number) => <li key={index}>{item}</li>
              ) ?? <li>No certifications available</li>}
            </ul>
          </div>

          <div className="info-style">
            <label className="float-label">Personal Projects: </label>
            <ul className="bullet-list">
              {currentApplication?.personalProjects?.map(
                (project: any, index: number) => (
                  <li key={index}>
                    {project.projectName}: {project.projectDescription} ,<br />
                    Technologies used: {project.technologiesUsed}, <br />{" "}
                    Project Link: {project.projectLink}
                  </li>
                )
              ) ?? <li>No personal projects available</li>}
            </ul>
          </div>

          <div className="h2">Additional Information</div>

          <div className="info-style-2">
            <label className="float-label">Is Serving Notice Period: </label>
            <input
              type="checkbox"
              checked={currentApplication?.isServingNoticePeriod ?? false}
              disabled
            />
          </div>

          <div className="info-style-2">
            <label className="float-label">Is Notice Period Negotiable: </label>
            <input
              type="checkbox"
              checked={currentApplication?.isNoticePeriodNegotiable ?? false}
              disabled
            />
          </div>

          <div className="info-style-2">
            <label className="float-label">Willing to Relocate: </label>
            <input
              type="checkbox"
              checked={currentApplication?.willingToRelocate ?? false}
              disabled
            />
          </div>

          <div className="info-style-2">
            <label className="float-label">Seeking Full Time: </label>
            <input
              type="checkbox"
              checked={currentApplication?.seekingFullTime ?? false}
              disabled
            />
          </div>

          <div className="info-style-2">
            <label className="float-label">Seeking Part Time: </label>
            <input
              type="checkbox"
              checked={currentApplication?.seekingPartTime ?? false}
              disabled
            />
          </div>

          <div className="info-style-2">
            <label className="float-label">Seeking Contract: </label>
            <input
              type="checkbox"
              checked={currentApplication?.seekingContract ?? false}
              disabled
            />
          </div>
        </form>
      </Modal>
      <div className="searched-bar" style={{marginTop: 20}}>
        <div className="searched-show">Showing {jobs.length} Jobs</div>
        <div className="searched-sort">
          Sort by: <span className="post-time">Newest Post </span>
          <span className="menu-icon">▼</span>
        </div>
      </div>
      {showTable ? (
        renderApplicationsTable({ openModal, setCurrentApplication })
      ) : (
        <div>
          <h2>Available Jobs</h2>
          <JobCardList
            jobs={jobs}
            fetchApplications={fetchApplications}
            openModal={openModal}
          />
        </div>
      )}
      
    </div>
  );
};

const JobCardList = ({ jobs, fetchApplications }: any) => {
  return (
    <div className="job-cards">
      {jobs.map((job: any, index: number) => (
        <div className="job-card" key={index}>
          <div className="job-card-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{ backgroundColor: "#f76754" }}
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M0 .5h4.2v23H0z"
                fill="#042b48"
                data-original="#212121"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
                fill="#fefefe"
                data-original="#f4511e"
              />
            </svg>
            <div className="menu-dot"></div>
          </div>
          <div className="job-card-title">{job.title}</div>
          <div className="job-card-subtitle">{job.description}</div>

          <div className="job-detail-buttons">
            {job.requiredSkills.map((button: any, buttonIndex: number) => (
              <button
                className="search-buttons detail-button"
                key={buttonIndex}
              >
                {button}
              </button>
            ))}
          </div>
          <div className="job-card-buttons">
            <button
              className="search-buttons card-buttons"
              onClick={() => fetchApplications(job.id)}
            >
              Applications
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListing;
