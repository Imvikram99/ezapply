import React from "react";
import Link from 'next/link'

export default function Navbar({color}: any) {
  return (
    <nav
      className="ftco-navbar-light"
     
    >
      <div className="container nav">
        <a className="navbar-brand" href="index.html">
          Ezapply<span style={color ? {color: 'orange'} : {}}>.co</span>
        </a>

        <div style={{display: 'flex'}}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="index.html" className="nav-link" style={color ? {color: 'black'} : {}}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link" style={color ? {color: 'black'} : {}}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="practice.html" className="nav-link" style={color ? {color: 'black'} : {}}>
                Practice Areas
              </a>
            </li>
            <li className="nav-item btn">
            <Link href={'/recuiter-signup'} className="nav-link">
                Recuiter Login
              </Link>
            </li>
            <li className="nav-item btn">
            <Link href={'/signup'} className="nav-link">
                JobSeeker Login
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
