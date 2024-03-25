import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from 'next/head'

export default function Home() {
  return (
    <>
       <Head>
        <title>My page title</title>
      </Head>
      <Navbar />
      <Hero />
      <div className="comtainer start">
        <div className="box">
          <h1 style={{ textAlign: "center" }}>Enroll now</h1>

          <ul className="plugin-setting-list-2" style={{ maxWidth: "70vw" }}>
            <li>
              In today's fiercely competitive job market, making a mark can be
              challenging - especially if you have a gap year(s) in your resume
              or lacking relevant work experience as a fresher. Many companies
              view this extends period of unemployment or lack of practical
              experience with skepticism, often considering these gaps as red
              flags. And let's face it; they might just be right!
            </li>
            <li>
              Imagine walking into an interview having not worked for months or
              even years, how could you compete with candidates showcasing
              continuous career growth? Even worse still, freshers competing
              head-on for their dream roles face fierce competition due to the
              sheer numbers of qualified aspirants vying for limited
              opportunities. Unfortunately, some recruiters may use this
              opportunity these perceived weaknesses to lower expectations,
              settle for less committed hires and reduce overall cost-to-hire.
              The truth hurts, but denial doesn't help either. Hence, faking it
              until you make it isn't enough anymore; instead, arm yourself with
              tools that truly bridge those daunting knowledge and skills chasm.
              We offer specific training modules meticulously designed to fill
              in essential skillsets missing from self improvement endeavors
              when building resumes from scratch. It’s time to take matters into
              our own hands. Stop pretending and start proving your worth
              through stellar course completion certificates., No more excuses –
              close one chapter and open another by investing in ours
              professionally accredited digital cert
            </li>
          </ul>
          <p>
            <a
              className="remgister py-3 pr-2"
              style={{
                color: "#fff",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            >
              Enroll Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
