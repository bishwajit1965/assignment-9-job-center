import React from "react";
import Frame from "../../assets/Icons/Frame.png";
import FrameLocation from "../../assets/Icons/Frame-4.png";
import { Link } from "react-router-dom";

const AppliedJob = ({ jobs }) => {
  const { id, logo, jobTitle, companyName, jobType, jobLocation, salary } =
    jobs;
  return (
    <div className="md:mt-8 md:flex justify-between items-center border border-slate-200 shadow-sm p-4 rounded-md">
      <div className="md:flex items-center md:space-x-4">
        <div className="bg-slate-100 md:p-6 w-36 h-36 flex p-2 place-items-center rounded-md">
          <img src={logo} alt="" className="object-fit w-3/2" />
        </div>
        <div className="">
          <div className="px-2">
            <h2 className="font-bold space-x-2">{jobTitle}</h2>
            <h4 className="text-2xl font-bold">{companyName}</h4>
          </div>
          <div className="md:flex md:space-x-2 md:my-2">
            {jobType.map((jt) => (
              <div
                className="border border-indigo-200 px-2 mr-2 my-3 rounded-sm text-indigo-700"
                key={jt.id}
              >
                {" "}
                {jt.type}
              </div>
            ))}
          </div>
          <div className="md:flex md:space-x-2 mt-2">
            <div className="flex">
              <img src={FrameLocation} alt="" />
              <p>{jobLocation}</p>
            </div>
            <div className="flex">
              <img src={Frame} alt="" />
              <p>Salary:{salary}/per month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-2 mt-2">
        <Link to={`/job-details/${id}`}>
          <button className="p-2 text-white rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            {" "}
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
