import Navbar from "@/components/Navbar";
import React from "react";

export default function Learn() {
  return (
    <div>
      <Navbar color={"black"} />
      <div
        style={{
          paddingTop: 120,
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        <div className="right">
          <div className="menu-ul">
            <button className="menu-open">
              Overview <UpArrow />
            </button>
            <button className="menu-link">Introduction </button>
            <button className="menu-link">Delivery Framework </button>
            <button className="menu-link">Core Concepts </button>
            <button className="menu-link">Key Technologies </button>
            <button className="menu-link">Patterns </button>
          </div>

          <div className="menu-ul">
            <button className="menu-open">
              Common Problems <UpArrow />
            </button>
            <button className="menu-link">Ticketmaster </button>
            <button className="menu-link">Dropbox </button>
            <button className="menu-link">Facebook Live Comments </button>
            <button className="menu-link">Facebook News Feed </button>
            <button className="menu-link">Local Delivery like Gopuff </button>
            <button className="menu-link">Tweet Search </button>
            <button className="menu-link">Uber </button>
          </div>

          <div className="menu-ul">
            <button className="menu-open">
              Deep Dive
              <UpArrow />
            </button>
            <button className="menu-link">Redis </button>
          </div>
        </div>

        <div className="mid">
          <img
            alt="System Design in a Hurry"
            loading="lazy"
            width="2304"
            height="1050"
            decoding="async"
            data-nimg="1"
            className="w-full h-auto rounded-xl mb-4"
            src="https://www.hellointerview.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fin-a-hurry.d909134f.png&w=3840&q=75"
          />
          <div className="flex flex-col gap-2">
            <h1 className="MuiTypography-root MuiTypography-h2 mui-1uh8lp">
              Introduction
            </h1>
            <p className="MuiTypography-root MuiTypography-body2 mui-93fisi">
              A no-nonsense guide covering all the essentials needed to pass a
              system design interview. It's based on data from hundreds of
              interviews and was written by FAANG engineers and hiring managers.
            </p>
          </div>

          <p className="MuiTypography-root MuiTypography-body1 mui-5fo979">
            While conducting 100's of mock system design interviews with Hello
            Interview, we frequently work with candidates who have an upcoming
            interview in a few days or even tomorrow. Let’s be real: no one is
            going to become a system design master overnight. Instead, what
            we’ve put together is ‘System Design in a Hurry’ - using data from
            hundreds of mock interview sessions across companies and
            interviewers, we’ve identified the most common flags and outlined
            the content to help you eliminate them. Wherever possible, we link
            to in-depth information should you wish to learn more.
          </p>
          <p className="MuiTypography-root MuiTypography-body1 mui-5fo979">
            The intent here is to cover the last and most impactful 20%, not to
            teach you from scratch. While ‘System Design in a Hurry’ won’t build
            mastery, it’s still high-leverage. The key concepts we cover are
            relevant for system design in the real world - and interviewers
            generally will try to align their interviews with these concepts
            because they’re practical, not strictly academic.
          </p>
          <p className="MuiTypography-root MuiTypography-body1 mui-5fo979">
            Other system design materials are either ChatGPT spew or go to a
            level of depth that you’ll never possibly cover in an interview (and
            might be a yellow flag if you do). We aimed to make ‘System Design
            in a Hurry’ dense, practical, and efficient. Moreover, it's 100%
            free forever. While we could charge for this material we think it's
            far more important to level the playing field of system design
            interviews. If you want to support us, our{" "}
            <a
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover mui-pvpazu"
              href="/mock/schedule"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#637381",
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              expert interviewers are available for mock interviews
            </a>{" "}
            and can pinpoint the primary areas for you to focus much better than
            any guide can!
          </p>
          <p className="MuiTypography-root MuiTypography-body1 mui-5fo979">
            Let's go.
          </p>
          <h2
            className="MuiTypography-root MuiTypography-h3 mui-1wmodsn"
            id="how-to-use-this-guide"
          >
            How to Use This Guide
          </h2>
          <p className="MuiTypography-root MuiTypography-body1 mui-5fo979">
            We recommend that you read this guide in order, skipping any
            sections you already know. While we link off to additional material
            where relevant, we’ve tried to make this guide as self-contained as
            possible. Don't worry if you don't have time to read the additional
            material.
          </p>
        </div>


        <div className="left">

            <strong>     On This Page</strong>

        <div className="menu-ul">
            <button className="menu-right" style={{marginTop: 10, marginBottom: 10}}>
            How to Use This Guide 
            </button>

            <button className="menu-right" style={{fontSize: 16}}>
            Type of system design interview
            </button>
 
            <button className="menu-right-link">Product Design </button>
            <button className="menu-right-link">Infrastructure Design </button>
            <button className="menu-right-link">Object Oriented Design </button>
            <button className="menu-right-link">Frontend Design </button>
          </div>


          <div className="menu-ul">
      

            <button className="menu-right" style={{fontSize: 16}}>
            How to Use This Guide
            </button>
 
            <button className="menu-right-link">
Types of System Design Interviews </button>
            <button className="menu-right-link">Product Design </button>
            <button className="menu-right-link">Infrastructure Design</button>
            <button className="menu-right-link">Object Oriented Design</button>
            <button className="menu-right-link">Frontend Design</button>
          </div>




          



















        



        </div>
      </div>
    </div>
  );
}

const UpArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
    data-slot="icon"
    className="h-4 w-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    ></path>
  </svg>
);
