"use client"

import withAuth from '@/components/Auth'
import SearchMenu from '@/components/SearchMenu'
import SearchType from '@/components/SearchType'
import { baseUrl } from '@/utils/constants'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'

const JobListing =() => {


  const [jobs, setJobs] = useState([
    {
      title: "UI / UX Designer",
      description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      requiredSkills: ["Full Time", "Min. 1 Year", "Senior Level"],
    
      headerColor: '#2e2882'
    },
    {
      title: "Sr. Product Designer",
      description: "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      requiredSkills: ["Full Time", "Min. 1 Year", "Senior Level"],
     
      headerColor: '#f76754'
    },
    // Add more jobs as needed
  ]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token : any = localStorage.getItem('authenticated');
        const decoded : any = jwtDecode(token);

        console.log(decoded)

        // Check if the user role includes "ROLE_RECUITER"
        if (!decoded.roles.includes('ROLE_RECUITER')) {
          window.location.href = '/login';
          return;
        }

        const response = await axios.get(`${baseUrl}/api/recruitment/job-postings`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log(response)

        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job">
    <div className="wrapper">
     <SearchMenu/>
     <div className="main-container">
      <SearchType/>
      <div className="searched-jobs">
       <div className="searched-bar">
        <div className="searched-show">Showing {jobs.length} Jobs</div>
        <div className="searched-sort">Sort by: <span className="post-time">Newest Post </span><span className="menu-icon">▼</span></div>
       </div>
       <div>
      <h2>Available Jobs</h2>
      <JobCardList jobs={jobs} />
    </div>
      </div>
     </div>
    </div>
   </div>
  )
}


const JobCardList = ({ jobs } : any) => {
  return (
    <div className="job-cards">
      {jobs.map((job : any, index: number) => (
        <div className="job-card" key={index}>
           <div className="job-card-header">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{backgroundColor:'#f76754'}}>
        <path xmlns="http://www.w3.org/2000/svg" d="M0 .5h4.2v23H0z" fill="#042b48" data-original="#212121" />
        <path xmlns="http://www.w3.org/2000/svg" d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z" fill="#fefefe" data-original="#f4511e" /></svg>
          <div className="menu-dot"></div>
         </div>
          <div className="job-card-title">{job.title}</div>
          <div className="job-card-subtitle">{job.description}</div>

          <div className="job-detail-buttons">
            {job.requiredSkills.map((button: any, buttonIndex: number) => (
              <button className="search-buttons detail-button" key={buttonIndex}>{button}</button>
            ))}
          </div>
          <div className="job-card-buttons">
            {["Apply Now", "Messages"].map((button: any, buttonIndex: number) => (
              <button className={`search-buttons card-buttons${buttonIndex === 1 ? ' card-buttons-msg' : ''}`} key={buttonIndex}>{button}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default withAuth(JobListing);