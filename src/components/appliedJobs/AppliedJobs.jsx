import { useLoaderData, useNavigation } from "react-router-dom";
import LoaderSpinner from "../loaderSpinner/LoaderSpinner";
import { useEffect, useState } from "react";
import { getShoppingCart } from "../../fakeData/fakedb";
import AppliedJob from "../appliedJob/AppliedJob";

const AppliedJobs = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoaderSpinner />;
  }

  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [onsiteJobs, setOnsiteJobs] = useState([]);
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [jobCategoryOnSite, setJobCategoryOnSite] = useState(false);
  const [jobCategoryRemote, setJobCategoryRemote] = useState(false);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedJobs = [];
    for (let id in storedCart) {
      const appliedJobs = jobs.find((job) => job.id === id);
      if (appliedJobs) {
        savedJobs.push(appliedJobs);
      }
    }
    setAppliedJobs(savedJobs);
  }, [jobs]);

  const handleShowOnsiteJobs = () => {
    const onsiteJobsData = appliedJobs.filter(
      (job) => job.j_option === "onsite"
    );
    setOnsiteJobs(onsiteJobsData);
    setRemoteJobs([]);
    setJobCategoryOnSite(!jobCategoryOnSite);
    setJobCategoryRemote(false);
    const appliedJobsContainer = document.getElementById("all-jobs");
    appliedJobsContainer.classList.add("hidden");
  };

  const handleShowRemoteJobs = () => {
    const remoteJobsData = appliedJobs.filter(
      (job) => job.j_option === "remote"
    );
    setRemoteJobs(remoteJobsData);
    setOnsiteJobs([]);
    setJobCategoryRemote(!jobCategoryRemote);
    setJobCategoryOnSite(false);
    const appliedJobsContainer = document.getElementById("all-jobs");
    appliedJobsContainer.classList.add("hidden");
  };

  const handleDropDownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "onsite-job") {
      handleShowOnsiteJobs();
    } else if (selectedValue === "remote-job") {
      handleShowRemoteJobs();
    }
  };

  return (
    <div className="md:my-10">
      <div className="md:flex justify-between md:px-36 items-center p-2">
        <div className=""></div>
        <div className="">
          <h1 className="text-center text-4xl font-bold md:ml-20">
            Applied {jobCategoryOnSite === true ? "Onsite" : ""}
            {jobCategoryRemote === true ? "Remote" : ""} Jobs
          </h1>
        </div>

        <div className="md:mt-10 md:flex md:justify-end">
          <div className="">
            <select value={selectedOption} onChange={handleDropDownChange}>
              <option>Select an option</option>
              <option value="remote-job">Remote Job</option>
              <option value="onsite-job">Onsite Job</option>
            </select>
          </div>
        </div>
      </div>

      <div className="md:px-36  p-2">
        {onsiteJobs.length > 0 &&
          onsiteJobs.map((oj) => <AppliedJob key={oj.id} jobs={oj} />)}
        {remoteJobs.length > 0 &&
          remoteJobs.map((rj) => <AppliedJob key={rj.id} jobs={rj} />)}
        <div id="all-jobs">
          {appliedJobs.length > 0 &&
            appliedJobs.map((aj) => <AppliedJob key={aj.id} jobs={aj} />)}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
