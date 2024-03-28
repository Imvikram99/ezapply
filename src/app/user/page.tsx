"use client"

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserDashboard = () => {

  const [link, setLink] = useState('')

  useEffect(() => {
   setLink(`http://localhost:3000/signup?refralcode=${localStorage.getItem('referralCode')}`)
  }, [])


  const copyToClipboard = async (event: any) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(link);
      toast.success('Copied to clipboard')
    } catch (error) {
      console.error('Failed to copy:', error);
 
    }
  };
  

  return (
    <div
      style={{
        height: "70vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="shortcuts-zone">
        <form id="jq_search">
          <input type="search" value={link} />
          <input type="submit" value="Copy" onClick={copyToClipboard} />
        </form>
        <p style={{textAlign: 'center'}}>
          This is a refferal link to be shared with your friends to join ezapply
        </p>
      </div>
    </div>
  );
};

export default UserDashboard;
