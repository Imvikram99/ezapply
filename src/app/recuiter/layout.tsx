"use client"
import withAuth from '@/components/Auth';
import SearchRecuiter from '@/components/SearchRecuiter';
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

    // Check if the user role includes "ROLE_RECUITER"
    if (!decoded.roles.includes("ROLE_RECUITER")) {
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
        <SearchRecuiter />
        {children}
        </div>
      </div>
    </div>
  )
}

export default withAuth(Layout)
