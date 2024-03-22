import React from 'react';

const SearchType = () => {
  return (
    <div className="search-type">
      <div className="job-time">
        <div className="job-time-title">Type of Employment</div>
        <div className="job-wrapper">
          <div className="type-container">
            <input type="checkbox" id="job1" className="job-style" checked />
            <label htmlFor="job1">Full Time Jobs</label>
            <span className="job-number">56</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job2" className="job-style" />
            <label htmlFor="job2">Part Time Jobs</label>
            <span className="job-number">43</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job3" className="job-style" />
            <label htmlFor="job3">Remote Jobs</label>
            <span className="job-number">24</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job4" className="job-style" />
            <label htmlFor="job4">Internship Jobs</label>
            <span className="job-number">27</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job5" className="job-style" />
            <label htmlFor="job5">Contract</label>
            <span className="job-number">76</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job6" className="job-style" />
            <label htmlFor="job6">Training Jobs</label>
            <span className="job-number">28</span>
          </div>
        </div>
      </div>
      <div className="job-time">
        <div className="job-time-title">Seniority Level</div>
        <div className="job-wrapper">
          <div className="type-container">
            <input type="checkbox" id="job7" className="job-style" />
            <label htmlFor="job7">Student Level</label>
            <span className="job-number">98</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job8" className="job-style" />
            <label htmlFor="job8">Entry Level</label>
            <span className="job-number">44</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job9" className="job-style" checked />
            <label htmlFor="job9">Mid Level</label>
            <span className="job-number">35</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job10" className="job-style" checked />
            <label htmlFor="job10">Senior Level</label>
            <span className="job-number">29</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job11" className="job-style" />
            <label htmlFor="job11">Directors</label>
            <span className="job-number">26</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job12" className="job-style" />
            <label htmlFor="job12">VP or Above</label>
            <span className="job-number">56</span>
          </div>
        </div>
      </div>
      <div className="job-time">
        <div className="job-time-title">Salary Range</div>
        <div className="job-wrapper">
          <div className="type-container">
            <input type="checkbox" id="job13" className="job-style" />
            <label htmlFor="job13">$700 - $1000</label>
            <span className="job-number">49</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job14" className="job-style" />
            <label htmlFor="job14">$1000 - $1200</label>
            <span className="job-number">67</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job15" className="job-style" />
            <label htmlFor="job15">$1200 - $1400</label>
            <span className="job-number">24</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job16" className="job-style" />
            <label htmlFor="job16">$1500 - $1800</label>
            <span className="job-number">27</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job17" className="job-style" checked />
            <label htmlFor="job17">$2000 - $3000</label>
            <span className="job-number">76</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job18" className="job-style" checked />
            <label htmlFor="job18">$3000 - $4000</label>
            <span className="job-number">22</span>
          </div>
          <div className="type-container">
            <input type="checkbox" id="job19" className="job-style" />
            <label htmlFor="job19">$4000 - $5000</label>
            <span className="job-number">18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchType;
