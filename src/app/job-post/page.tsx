"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast, { LoaderIcon, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/utils/constants";
import { jwtDecode } from "jwt-decode";
import withAuth from "@/components/Auth";
import Image from "next/image";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
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


  
  useEffect(() => {

    setLoading(true)

    const token : any = localStorage.getItem('authenticated') 

    const decoded : any = jwtDecode(token)

    if(!decoded.roles.includes("ROLE_RECUITER")){
      window.location.href="/login"
    }

    setTimeout(() => {
      setLoading(false) 
    }, 2000);
    
 
  }, [])
  

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("authenticated");

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

  const handleRemoveStage = (indexToRemove: number) => {
    setRecruitmentStages((prevStages) => {
      return prevStages.filter((stage, index) => index !== indexToRemove);
    });
  };


  if(loading){
    return <LoaderIcon/>
  }else{

    return (
      <div className="post-job-page">
        <Toaster />
        <Image src={"/pomst.jpg"} className="login-img" alt={""} />
        <div className="auth-container">
          <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>
            Post a Job
          </h1>
          <form className="post-job-form" onSubmit={handleSubmit}>
            <div className="field-container">
              <label
                htmlFor="title"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="description"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="postingDate"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="closingDate"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="jobPosition"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="recruitingManager"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="vacancy"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="requiredSkills"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
              <label
                htmlFor="recruitmentStages"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
                    <br />
                    <input
                      type="text"
                      placeholder="Description"
                      value={stage.description}
                      onChange={(e) =>
                        handleStageChange(index, "description", e.target.value)
                      }
                    />
                    <br />
                  </div>
                ))}
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    className="add-btn"
                    type="button"
                    style={{ marginTop: 10, marginBottom: 10 }}
                    onClick={handleAddStage}
                  >
                    <PlusIcon />
                  </button>
                  {recruitmentStages.length > 1 && (
                    <button
                      className="add-btn"
                      type="button"
                      style={{ marginTop: 10, marginBottom: 10 }}
                      onClick={handleRemoveStage.bind(
                        null,
                        recruitmentStages.length - 1
                      )}
                    >
                      <MinusIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="field-container">
              <label
                htmlFor="experienceRequired"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
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
            <div className="field-container" style={{ display: "flex", gap: 20 }}>
              <label
                htmlFor="isOpen"
                className="field-label"
                style={{  fontWeight: "400" }}
              >
                Is Open
              </label>
  
              <div style={{ display: "flex", gap: 10 }}>
                <input
                  type="radio"
                  id="yes"
                  name="isOpen"
                  value="true"
                  checked={isOpen}
                  onChange={() => setIsOpen(true)}
                />
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="isOpen"
                  value="false"
                  checked={!isOpen}
                  onChange={() => setIsOpen(false)}
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
            <button type="submit" className="submit-button">
              Post Job
            </button>
          </form>
        </div>
      </div>
    );
  }


}



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


export default withAuth(PostJob);