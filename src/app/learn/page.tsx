"use client"
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function Learn() {


  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (id: any) => {
    setSelectedLink(id);
  };

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
            <h1 className=" MuiTypography-h2 mui-1uh8lp">Introduction</h1>
            <p className=" MuiTypography-body2 mui-93fisi">
              A no-nonsense guide covering all the essentials needed to pass a
              system design interview. It's based on data from hundreds of
              interviews and was written by FAANG engineers and hiring managers.
            </p>
          </div>
          <p className="mui-5fo979">
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
          <br />
          <p className="mui-5fo979">
            The intent here is to cover the last and most impactful 20%, not to
            teach you from scratch. While ‘System Design in a Hurry’ won’t build
            mastery, it’s still high-leverage. The key concepts we cover are
            relevant for system design in the real world - and interviewers
            generally will try to align their interviews with these concepts
            because they’re practical, not strictly academic.
          </p>
          <br />
          <p className="mui-5fo979">
            Other system design materials are either ChatGPT spew or go to a
            level of depth that you’ll never possibly cover in an interview (and
            might be a yellow flag if you do). We aimed to make ‘System Design
            in a Hurry’ dense, practical, and efficient. Moreover, it's 100%
            free forever. While we could charge for this material we think it's
            far more important to level the playing field of system design
            interviews. If you want to support us, our{" "}
            <a
              className="  mui-pvpazu"
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
          <br />
          <p className="mui-5fo979">Let's go.</p>
          <br />
          <h1 className=" MuiTypography-h2 mui-1uh8lp" id="how-to-use">
            How to Use This Guide
          </h1>
          <p className="mui-5fo979">
            We recommend that you read this guide in order, skipping any
            sections you already know. While we link off to additional material
            where relevant, we’ve tried to make this guide as self-contained as
            possible. Don't worry if you don't have time to read the additional
            material.
          </p>
          <br />
          <div className="my-6">
            <div className="mui-1u846gp">
              <div className="mui-zvu67g">
                <BulbIcon />
              </div>
              <div style={{ overflow: "hidden", maxHeight: 250 }}>
                Throughout the guide we've layered in commentary in these Tips
                and Warnings for common mistakes or things people tend to
                overlook in the interview. <em>Pay attention to these</em> as
                they're the most likely things to end up as yellow flags in your
                interview.
              </div>
            </div>
          </div>
          <p className=" mui-5fo979">
            If you're <em>really</em> short on time, we recommend covering the{" "}
            <a
              className="  mui-pvpazu"
              href="delivery"
              target="_blank"
              rel="noopener noreferrer"
              style={design}
            >
              Delivery
            </a>{" "}
            section, skimming the{" "}
            <a
              className="  mui-pvpazu"
              href="key-technologies"
              target="_blank"
              rel="noopener noreferrer"
              style={design}
            >
              Key Technologies
            </a>
            , and spending any remaining time studying the{" "}
            <a
              className="  mui-pvpazu"
              href="core-concepts"
              target="_blank"
              rel="noopener noreferrer"
              style={design}
            >
              Core Concepts
            </a>{" "}
            section.
          </p>
          <br />
          <h1 className=" MuiTypography-h2 mui-1uh8lp" id="type-of-system">
            Types of System Design Interviews
          </h1>
          <p className="mui-5fo979">
            Each company (and sometimes, each interviewer) will conduct a system
            design interview a little differently. Often, the differences are
            not important and you can prepare for all of them with the same
            material. But some interview types require different preparation.
          </p>
          <br />
          <img
            alt="Oop Design in a Hurry"
            loading="lazy"
            width="2304"
            height="1050"
            decoding="async"
            data-nimg="1"
            className="w-full h-auto rounded-xl mb-4"
            src=" https://www.hellointerview.com/api/excalidraw?id=4d4b52a0840ee518a35858f2646ab1ce"
          />
          <br />
          <h1 className=" mui-1uh8lp" id="product-design">
            Product Design
          </h1>
          <p className="mui-5fo979">
            Product design interviews (sometimes called "Product Architecture"
            interviews, or ambiguously "System Design" interviews) are the most
            common type of system design interview. In these interviews, you'll
            be asked to design a system behind a product. For example, you might
            be asked to design the backend for a chat application, or the
            backend for a ride sharing application. Often these interviews are
            described in terms of a "use case" - for example, "design the
            backend for a chat application that supports 1:1 and group chats"
            and frequently referred to by the most noteworthy company that uses
            that use case. For example, "design the backend for a chat
            application like Slack".
          </p>
          <br />
          <p className="mui-5fo979">
            This guide <strong>will</strong> be useful for Product Design
            interviews.
          </p>
          <br />
          <p className="mui-5fo979">
            <em>Example Questions:</em>
          </p>
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>Design a ride-sharing service like Uber</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Design a chat application like Slack</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Design a social network like Facebook</div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="infrastructe-design">
            Infrastructure Design
          </h1>
          <p className="mui-5fo979">
            Infrastructure design interviews are less common than product design
            interviews, but still relatively common. In these interviews, you'll
            be asked to design a system that supports a particular
            infrastructure use case. For example, you might be asked to design a
            message broker or a rate limiter. Since these interviews are deeper
            in the stack, your interviewer will be looking for more emphasis on
            system-level mastery (e.g. consensus algorithms, durability
            considerations) than high-level design.
          </p>
          <p className="mui-5fo979">
            This guide <strong>will</strong> be useful for Infrastructure Design
            interviews, with a stronger emphasis on the Concepts section.
          </p>{" "}
          <p className="mui-5fo979">
            <em>Example Questions:</em>
          </p>
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>Design a rate limiter</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Design a message broker</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Design a key-value store</div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="oop-design">
            Object Oriented Design
          </h1>
          <p className="mui-5fo979">
            Object oriented design (sometimes called "Low Level Design")
            interviews are less common than product design interviews, but still
            occur at particularly at companies that use an object-oriented
            language like Java (Amazon is notable for these interviews). In
            these interviews, you'll be asked to design a system that supports a
            particular use-case, but the emphasis on the interview is assembling
            the correct class structure, adhering to{" "}
            <a
              className="mui-pvpazu"
              href="https://en.wikipedia.org/wiki/SOLID"
              target="_blank"
              rel="noopener noreferrer"
              style={design}
            >
              SOLID principles
            </a>
            , coming up with a sensible entity design, etc. For example, you
            might be asked to design a Parking Lot reservation system or a
            Vending Machine, but rather than breaking this problem down into
            services and describing the backend database you're instead asked to
            describe the class structure of a solution.
          </p>
          <br />
          <p className="mui-5fo979">
            This guide is <strong>not</strong> as useful for an Object Oriented
            Design interview. We instead recommend (until we get to it!){" "}
            <a
              className="mui-pvpazu"
              href="https://www.educative.io/courses/grokking-the-low-level-design-interview-using-ood-principles"
              target="_blank"
              rel="noopener noreferrer"
              style={design}
            >
              Grokking the Low Level Design Interview
            </a>
            .
          </p>
          <br />
          <p className="mui-5fo979">
            <em>Example Questions:</em>
          </p>
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>Design a parking lot reservation system</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Design a vending machine</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Design an elevator control system</div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="frontend-design">
            Frontend Design
          </h1>
          <p className="mui-5fo979">
            Frontend design interviews are focused on the architecture of a
            complex frontend application. These interviews are most common with
            specialized frontend engineering roles at larger companies. For
            example, you might be asked to design the frontend for a spreadsheet
            application or a video editor.
          </p>
          <br />
          <p className="MuiTypography-root MuiTypography-body1 mui-5fo979">
            This guide is <strong>not</strong> as useful for a Frontend Design
            interview. We instead recommend you{" "}
            <a
              className="mui-pvpazu"
              href="https://www.greatfrontend.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={design}
            >
              try Great Frontend for both material and practice problems for
              frontend design interviews
            </a>
            .
          </p>
          <br />
          <p className="mui-5fo979">
            <em>Example Questions:</em>
          </p>
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>Design the frontend for a spreadsheet application</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Design the frontend for a video editor</div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="interview-assesment">
            {" "}
            Interview Assessment
          </h1>
          <p className="mui-5fo979">
            {" "}
            Each company will have a different rubric for system design, but
            these rubrics are often similar and simply specifying the same
            overall competencies but with more specificity. System design
            interviews will vary by level. Most entry-level software engineering
            roles will not have a system design interview (though there are
            plenty of exceptions). Once you've reached mid-level, system design
            interviews become more common. At the senior level, system design
            interviews are the norm.{" "}
          </p>{" "}
          <br />
          <p className="mui-5fo979">
            The difference in levelling is most frequently the depth of the
            solution and your knowlege. While all candidates are expected to
            complete a full design satisfying the requirements, a mid-level
            engineer might only do this with 80% breadth and 20% depth, while a
            senior engineer might do this with 60% breadth and 40% depth.
          </p>
          <div className="my-6">
            <div className="mui-1u846gp">
              <div className="mui-zvu67g">
                <BulbIcon />
              </div>
              <div style={{ overflow: "hidden", maxHeight: 250 }}>
                Remember that the top-level goal for your interview is to give
                your interviewer sufficient confidence to advocate for a hire
                decision. While the mechanics of your interview are important,
                they are ultimately in service of signaling to your interviewer
                that you are a strong candidate.
              </div>
            </div>
          </div>
          <h1 className=" mui-1uh8lp" id="problem-navigation"> Problem Navigation </h1>
          <p className="mui-5fo979">
            Your interviewer is looking to assess your ability to navigate a
            complex problem. This means that you should be able to break down
            the problem into smaller, more manageable pieces, prioritize the
            most important ones, and then navigate through those pieces to a
            solution. This is often the most important part of the interview,
            and the part that most candidates (especially those new to system
            design) struggle with.{" "}
          </p>
          <br />
          <p className="mui-5fo979">
            The most common ways that candidates fail with this competency are:
          </p>
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>
                Insufficiently exploring the problem and gathering requirements.
              </div>
            </li>
            <li className=" mui-ioa8ei">
              <div>
                Focusing on uninteresting/trivial aspects of the problem vs the
                most important ones.
              </div>
            </li>
            <li className=" mui-ioa8ei">
              <div>
                Getting stuck on a particular piece of the problem and not being
                able to move forward.
              </div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="high-level"> High-Level Design </h1>
          <p className="mui-5fo979">
            With a problem broken down, your interviewer wants to see how you
            can solve each of the constituent pieces. This is where your
            knowledge of the Core Concepts comes into play. You should be able
            to describe how you would solve each piece of the problem, and how
            those pieces fit together into a cohesive whole.
          </p>
          <br />
          <p className="mui-5fo979">
            The most common ways that candidates fail with this competency are:
          </p>
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>
                Not having a strong enough understanding of the core concepts to
                solve the problem.
              </div>
            </li>
            <li className=" mui-ioa8ei">
              <div>Ignoring scaling and performance considerations.</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>
                "Spaghetti design" - a solution that is not well-structured and
                difficult to understand.
              </div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="technical"> Technical Excellence </h1>
          <p className="mui-5fo979">
            To be able to design a great system, you'll need to know about best
            practices, current technologies, and how to apply them. This is
            where your knowledge of the Key Technologies is important. You
            should be able to describe how you would use current technologies,
            with well-recognized patterns, to solve the problems.
          </p>
          <br />
          <p className="mui-5fo979">
            The most common ways that candidates fail with this competency are:
          </p>
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>Not knowing about available technologies.</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>
                {" "}
                Not knowing how to apply those technologies to the problem at
                hand.
              </div>
            </li>
            <li className=" mui-ioa8ei">
              <div> Not recognizing common patterns and best practices.</div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="communication"> Communication and Collaboration </h1>
          <p className="mui-5fo979">
            {" "}
            Technical interviews are also a way to get to know what it would be
            like to work with you as a colleague. Interviews are frequently
            collaborative, and your interviewer will be looking to see how you
            work with them to solve the problem. This will include your ability
            to communicate complex concepts, respond to feedback and questions,
            and in some cases work together with the interviewer to solve the
            problem.
          </p>{" "}
          <br />
          <p className="mui-5fo979">
            {" "}
            The most common ways that candidates fail with this competency are:{" "}
          </p>{" "}
          <br />
          <ul className="mui-sedpvs">
            <li className=" mui-ioa8ei">
              <div>Not being able to communicate complex concepts clearly.</div>
            </li>
            <li className=" mui-ioa8ei">
              <div>
                {" "}
                Being defensive or argumentative when receiving feedback.
              </div>
            </li>
            <li className=" mui-ioa8ei">
              <div>
                {" "}
                Getting lost in the weeds and not being able to work with the
                interviewer to solve the problem.
              </div>
            </li>
          </ul>
          <br />
          <h1 className=" mui-1uh8lp" id="feedback"> Feedback and Suggestions </h1>
          <p className="mui-5fo979">
            {" "}
            We're constantly updating our content based on your feedback. If you
            have questions, comments, or suggestions please send them our way
            via email. And thanks in advance!
          </p>{" "}
          <br />
        </div>

        <div className="left">
      <strong> On This Page</strong>

      <div className="menu-ul">
        <button
          className="menu-right"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <a
            href="#how-to-use"
            style={{
              color: selectedLink === 'how-to-use' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'how-to-use' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('how-to-use')}
          >
            How to Use This Guide
          </a>
        </button>

        <button className="menu-right" style={{ fontSize: 16 }}>
          <a
            href="#type-of-system"
            style={{
              color: selectedLink === 'type-of-system' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'type-of-system' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('type-of-system')}
          >
            Type of system design interview
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#product-design"
            style={{
              color: selectedLink === 'product-design' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'product-design' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('product-design')}
          >
            Product Design
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#infrastructe-design"
            style={{
              color: selectedLink === 'infrastructe-design' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'infrastructe-design' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('infrastructe-design')}
          >
            Infrastructure Design
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#oop-design"
            style={{
              color: selectedLink === 'oop-design' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'oop-design' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('oop-design')}
          >
            Object Oriented Design
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#frontend-design"
            style={{
              color: selectedLink === 'frontend-design' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'frontend-design' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('frontend-design')}
          >
            Frontend Design
          </a>
        </button>
      </div>

      <div className="menu-ul">
        <button className="menu-right" style={{ fontSize: 16 }}>
          <a
            href="#interview-assesment"
            style={{
              color: selectedLink === 'interview-assesment' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'interview-assesment' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('interview-assesment')}
          >
            Interview Assessment
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#problem-navigation"
            style={{
              color: selectedLink === 'problem-navigation' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'problem-navigation' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('problem-navigation')}
          >
            Problem Navigation
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#high-level"
            style={{
              color: selectedLink === 'high-level' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'high-level' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('high-level')}
          >
            High-Level Design
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#technical"
            style={{
              color: selectedLink === 'technical' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'technical' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('technical')}
          >
            Technical Excellence
          </a>
        </button>

        <button className="menu-right-link">
          <a
            href="#communication"
            style={{
              color: selectedLink === 'communication' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'communication' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('communication')}
          >
            Communication and Collaboration
          </a>
        </button>

        <button className="menu-right" style={{ fontSize: 16 }}>
          <a
            href="#feedback"
            style={{
              color: selectedLink === 'feedback' ? 'seagreen' : 'inherit',
              fontWeight: selectedLink === 'feedback' ? 'bold' : 'normal',
            }}
            onClick={() => handleLinkClick('feedback')}
          >
            Feedback and Suggestion
          </a>
        </button>
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

const BulbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
    data-slot="icon"
    className="w-6 h-6 heroicon-sw-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    ></path>
  </svg>
);

const design = {
  color: "#637381",
  cursor: "pointer",
  fontWeight: 600,
  textDecoration: "underline",
};
