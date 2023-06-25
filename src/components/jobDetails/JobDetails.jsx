import React, { useEffect, useState } from "react";
import LoaderSpinner from "../loaderSpinner/LoaderSpinner";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Frame from "../../assets/Icons/Frame.png";
import FrameTitle from "../../assets/Icons/Frame-1.png";
import FramePhone from "../../assets/Icons/Frame-2.png";
import FrameEmail from "../../assets/Icons/Frame-3.png";
import FrameLocation from "../../assets/Icons/Frame-4.png";
import { addToDb, getShoppingCart } from "../../fakeData/fakedb";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const JobDetails = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoaderSpinner />;
  }

  // Fetching data according to id
  const details = useParams();
  const jobDetails = useLoaderData();
  const [jDetails, setJDetails] = useState([]);

  useEffect(() => {
    const matchedData = jobDetails.find(
      (jDetails) => jDetails.id === details.id
    );
    setJDetails(matchedData);
  }, [jobDetails, details]);

  const {
    id,
    logo,
    jobTitle,
    companyName,
    jobLocation,
    salary,
    jobDescription,
    responsibility,
    educational_requirement,
    experiences,
    contact_informationPhone,
    contact_informationEmail,
  } = jDetails;

  const handleAddToCart = (id) => {
    const storedCartData = getShoppingCart();
    if (id in storedCartData) {
      MySwal.fire({
        icon: "error",
        title: "Sorry",
        text: "You have already applied!",
        footer: "Try another job",
      });
      console.log("Matched");
    } else {
      addToDb(id);
      MySwal.fire({
        icon: "success",
        title: "Good job",
        text: "Your application is complete!!!",
        footer: "SUCCESSFUL!!!",
      });
    }
  };
  return (
    <div className="md:px-36 md:my-10 p-2">
      <h2 className="md:text-4xl text-2xl font-bold text-center">
        Job Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-3 mt-12">
        {/*  */}
        <div className="md:col-span-2 p-3">
          <p>
            <span className="font-bold">Job Description:</span> {jobDescription}
          </p>
          <p className="mt-4">
            <span className="font-bold">Job Responsibility:</span>{" "}
            {responsibility}
          </p>
          <p className="font-bold mt-4">Educational Requirement:</p>
          <p>{educational_requirement}</p>
          <p className="font-bold mt-4">Experiences:</p>
          <p>{experiences}</p>
        </div>
        {/* Right side */}
        <div>
          <div className="bg-zinc-100 p-3 rounded-md shadow-md">
            <div className="divide-y divide-solid">
              <h2 className="text-2xl font-bold">Job details</h2>
              <p></p>
            </div>
            <div className="my-4">
              <div className="md-flex">
                <img src={logo} alt="" className="object-cover w-1/4" />
                <h4 className="font-bold text-2xl my-2">
                  Company: {companyName}
                </h4>
              </div>
              <div className="flex space-x-2">
                <img src={Frame} alt="" />
                <p>
                  <span className="font-bold">Salary: </span>
                  {salary} per/month{" "}
                </p>
              </div>
              <div className="flex mt-2 space-x-2">
                <img src={FrameTitle} alt="" />
                <p>
                  <span className="font-bold">Job Title: </span> {jobTitle}{" "}
                </p>
              </div>
            </div>
            <div className="divide-y divide-solid">
              <h2 className="font-bold text-2xl">Contact Information:</h2>
              <p></p>
            </div>
            <div className="mt-4">
              <div className="flex space-x-2">
                <img src={FramePhone} alt="" />
                <p> Phone: {contact_informationPhone}</p>
              </div>

              <div className="flex space-x-2 mt-2">
                <img src={FrameEmail} alt="" />
                <p> Email: {contact_informationEmail}</p>
              </div>
              <p></p>
            </div>
            <div className="flex space-x-2 mt-2">
              <img src={FrameLocation} alt="" />
              <p className="mt-4">Address: {jobLocation}</p>
            </div>
          </div>
          <div className="mt-4 w-full">
            <button
              onClick={() => handleAddToCart(id)}
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white font-bolder p-2"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
