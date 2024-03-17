"use client"

import { useState } from "react";
import withAuth from "@/components/Auth";
import toast, { Toaster } from "react-hot-toast";
import { baseUrl } from "@/utils/constants";

const Resume = () => {
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileUpload = async (event: any) => {
    event.preventDefault();

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem('authenticated')

    try {
      const response = await fetch(
        `${baseUrl}/api/jobseekers/upload-resume`,
        {
          method: "POST",
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
          body: formData,
        }
      );

      console.log(response)
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file");
    }
  };

  return (
    <div className="comtainer">
      <Toaster />
      <div className="box">
        <h1 style={{ textAlign: "center" }}>Resume Upload</h1>
        <form>
          <input
            id="demo1"
            className="demo1"
            type="file"
            multiple
            placeholder="Select Files"
            name="demo1[]"
            onChange={handleFileUpload}
          />
          <br />
        </form>
        {uploadStatus && <p>{uploadStatus}</p>}
        <ul className="plugin-setting-list">
          <li>
            For placeholder change you need to add <code>placeholder</code> in
            input
          </li>
          <li>
            For change pin icon to btn add input
            <code>data_btn_text="Browse"</code>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withAuth(Resume);
