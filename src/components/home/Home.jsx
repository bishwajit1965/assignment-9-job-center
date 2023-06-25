import React, { useEffect, useState } from "react";
import Hero from "../../assets/AllImages/P3OLGJ1 copy 1.png";
import Categories from "../categories/Categories";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoaderSpinner from "../loaderSpinner/LoaderSpinner";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoaderSpinner />;
  }

  const [showMore, setShowMore] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json").then((response) =>
      response.json().then((data) => setCategories(data))
    );
  }, []);

  const jobs = useLoaderData();
  const [allJobs, setAllJobs] = useState([]);
  const [toggle, setToggle] = useState(true);

  const handleShowMoreShowLess = () => {
    setShowMore(!showMore);
  };

  const handleShowAll = () => {
    setAllJobs(jobs);
    setToggle(!toggle);
    handleShowMoreShowLess(!showMore);
  };
  return (
    <div className="md:px-36 my-10 p-2">
      {/* Hero area begins */}
      <div className="md:flex justify-between items-center">
        <div className="md:my-12">
          <h2 className="text-5xl font-bold mb-10">
            One Step Close to Your <br />{" "}
            <span className="text-teal-500 leading-loose">Dream Job</span>
          </h2>
          <p className=" mb-10">
            Explore thousands of job opportunities with all the information you
            need. It's your future. Come find it. Manage all your job
            application from start to finish.
          </p>
          <button className="default-btn">Get started</button>
        </div>
        <div className="">
          <img src={Hero} alt="" className="object-cover" />
        </div>
      </div>
      {/* ./Hero area ends */}

      {/* Job category begins */}
      <div className="md:my-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">Job Category List</h2>
          <p className="mb-5 text-center">
            Explore thousands of job opportunities with all the information you
            need. It's your future builder. Explore and enjoy life to the
            lees...
          </p>
        </div>
        <div className="grid grid-cols-1 g-4 w-full  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:justify-between md:items-center">
          {categories.map((category) => (
            <Categories key={category.id} category={category} />
          ))}
        </div>
      </div>
      {/* ./Job category end */}

      {/* Featured jobs begins */}
      <div className="md:my-12">
        <div className="">
          <h4 className="text-4xl text-center font-bold mb-10">
            Featured Jobs
          </h4>
          <p className="mb-5 text-center">
            Some featured jobs are here for you. Explore thousands of job
            opportunities with all the information you need. It can be your
            future builder.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {toggle === true
            ? jobs
                .slice(0, 4)
                .map((job) => <FeaturedJobs key={job.id} job={job} />)
            : allJobs.map((job) => <FeaturedJobs key={job.id} job={job} />)}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => handleShowAll(!showMore)}
            className="default-btn inline-flex"
          >
            {showMore ? (
              <span className="text-1xl font-bold">Show More</span>
            ) : (
              <span className="text-1xl font-bold">Show Less</span>
            )}
          </button>
        </div>
      </div>
      {/* Featured jobs ends */}
    </div>
  );
};

export default Home;
