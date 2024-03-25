"use client"
import withAuth from '@/components/Auth';
import SearchType from '@/components/SearchType'
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { LoaderIcon, Toaster } from 'react-hot-toast'

const Layout = ({children}: any) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const token: any = localStorage.getItem("authenticated");
    const decoded: any = jwtDecode(token);

    console.log(decoded);
    setLoading(false)

    // Check if the user role includes "ROLE_JOBSEEKER"
    if (!decoded.roles.includes("ROLE_JOBSEEKER")) {
      window.location.href = "/login";
      return;
    }
  }, []);

  if(loading){
    return <LoaderIcon/>
  }

  return (
    <div className="job">
      <Toaster />
      <div className="wrapper">
        <div className="main-container">
        <SearchType />
        {children}
        </div>
      </div>
    </div>
  )
}

export default withAuth(Layout)
