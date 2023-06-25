import React from "react";
import Frame from "../../assets/Icons/Frame.png";
import Location from "../../assets/Icons/Location Icon.png";
import { Link } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
  const { id, logo, jobTitle, companyName, jobType, jobLocation, salary } = job;

  return (
    <div className="border border-slate-100 p-5 rounded-md shadow-md">
      <div className="mb-4">
        <img src={logo} alt="" className="object-cover w-1/4" />
      </div>
      <h2 className="font-bold">{jobTitle}</h2>
      <h4 className="font-bold">{companyName}</h4>
      <div className="flex mt-4">
        {jobType.map((jt) => (
          <div
            className="border border-indigo-200 px-2 mr-2 rounded-sm text-indigo-700"
            key={jt.id}
          >
            {" "}
            {jt.type}
          </div>
        ))}
      </div>
      <div className="mt-4 inline-flex">
        <div className="inline-flex">
          <img src={Location} alt="" />
          <p> {jobLocation}</p>
        </div>
        <div className="inline-flex ml-4">
          <img src={Frame} alt="" />
          <p>Salary: {salary}</p>
        </div>
      </div>
      <div className="mt-4">
        <Link to={`/job-details/${id}`}>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm px-2 text-white font-bolder h-8">
            View Job Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobs;
