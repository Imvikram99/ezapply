"use client"
import { useRouter } from "next/navigation";
import React from "react";

const SearchType = () => {
  const router = useRouter();
  return (
    <div id="nav-bar">
      <div id="nav-header">
        {" "}
        <a className="navbar-brand" href="index.html">
          Ezapply<span>.co</span>
        </a>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-buttom" onClick={() => router.push("/user", { scroll: false })}>
          <i className="fa fa-user"></i>
          <span>Home</span>
        </div>
        <div className="nav-buttom" onClick={() => router.push("/user/jobs", { scroll: false })}>
          <i className="fa fa-list"></i>
          <span>All Jobs</span>
        </div>
        <div className="nav-buttom" onClick={() => router.push("/user/applied-jobs", { scroll: false })}>
          <i className="fa fa-heart"></i>
          <span>Applied Jobs</span>
        </div>
        <hr />
        <div className="nav-buttom">
          <i className="fa fa-cog"></i>
          <span>Setting</span>
        </div>

        <div id="nav-content-highlight"></div>
      </div>
      <div
        id="nav-footer"
        style={{cursor: 'pointer'}}
        onClick={() => {
          localStorage.clear();
          router.push('/login', { scroll: false })
        }}
      >
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
          </div>
          <div id="nav-footer-titlebox">
            <a
              id="nav-footer-title"
              href="https://codepen.io/uahnbu/pens/public"
              target="_blank"
            >
              Logout
            </a>
            <span id="nav-footer-subtitle">User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchType;
