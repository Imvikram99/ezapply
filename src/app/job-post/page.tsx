"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/utils/constants";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [recruitingManager, setRecruitingManager] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [experienceRequired, setExperienceRequired] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const [recruitmentStages, setRecruitmentStages] = useState([
    { stageName: "", description: "", order: 1 },
  ]);

  const handleStageChange = (
    index: string | number,
    key: string | number,
    value: any
  ) => {
    const updatedStages: any = [...recruitmentStages];
    updatedStages[index][key] = value;
    setRecruitmentStages(updatedStages);
  };

  const handleAddStage = (e: any) => {
    e.preventDefault();
    setRecruitmentStages([
      ...recruitmentStages,
      { stageName: "", description: "", order: recruitmentStages.length + 1 },
    ]);
  };

  const router = useRouter();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      const token = "YOUR_TOKEN_HERE"; // Replace with your actual token

      const response = await axios.post(
        `${baseUrl}/api/recruitment/post-job`,
        {
          title,
          description,
          postingDate,
          closingDate,
          jobPosition,
          recruitingManager,
          vacancy,
          requiredSkills: requiredSkills
            .split(",")
            .map((skill) => skill.trim()),
          recruitmentStages,
          experienceRequired,
          isOpen,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      toast.success(response.data.message);
      // Redirect or handle success as required
    } catch (error) {
      console.error("Posting job failed:", error);
      toast.error("Posting job failed. Please try again.");
    }
  }

  return (
    <div className="post-job-page">
      <Toaster />
      <img src={"/login.jpg"} className="login-img" />
      <div className="auth-container">
        <h1>
          <b>Post a Job</b>
        </h1>
        <form className="post-job-form" onSubmit={handleSubmit}>
          <div className="field-container">
            <label htmlFor="title" className="field-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Senior Software Engineer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="description" className="field-label">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Looking for a senior software engineer with experience in building scalable web applications."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="postingDate" className="field-label">
              Posting Date
            </label>
            <input
              id="postingDate"
              type="date"
              value={postingDate}
              onChange={(e) => setPostingDate(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="closingDate" className="field-label">
              Closing Date
            </label>
            <input
              id="closingDate"
              type="date"
              value={closingDate}
              onChange={(e) => setClosingDate(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="jobPosition" className="field-label">
              Job Position
            </label>
            <input
              id="jobPosition"
              type="text"
              placeholder="Senior Engineer"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="recruitingManager" className="field-label">
              Recruiting Manager
            </label>
            <input
              id="recruitingManager"
              type="text"
              placeholder="Jane Doe"
              value={recruitingManager}
              onChange={(e) => setRecruitingManager(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="vacancy" className="field-label">
              Vacancy
            </label>
            <input
              id="vacancy"
              type="number"
              placeholder="2"
              value={vacancy}
              onChange={(e) => setVacancy(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="requiredSkills" className="field-label">
              Required Skills (comma-separated)
            </label>
            <input
              id="requiredSkills"
              type="text"
              placeholder="Java, Spring Boot, Microservices, Docker"
              value={requiredSkills}
              onChange={(e) => setRequiredSkills(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="recruitmentStages" className="field-label">
              Recruitment Stages (JSON)
            </label>
            <div>
              {recruitmentStages.map((stage, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Stage Name"
                    value={stage.stageName}
                    onChange={(e) =>
                      handleStageChange(index, "stageName", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={stage.description}
                    onChange={(e) =>
                      handleStageChange(index, "description", e.target.value)
                    }
                  />
                  <button onClick={handleAddStage}>Add Stage</button>
                </div>
              ))}
            </div>
          </div>
          <div className="field-container">
            <label htmlFor="experienceRequired" className="field-label">
              Experience Required
            </label>
            <input
              id="experienceRequired"
              type="number"
              placeholder="5"
              value={experienceRequired}
              onChange={(e) => setExperienceRequired(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label htmlFor="isOpen" className="field-label">
              Is Open
            </label>
            <select
              id="isOpen"
              value={isOpen ? "true" : "false"}
              onChange={(e) => setIsOpen(e.target.value === "true")}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}
