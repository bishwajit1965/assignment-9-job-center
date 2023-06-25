import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";

const Header = () => {
  const [openNavMenu, setNavMenuOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Statistics",
      path: "/statistics",
    },
    {
      id: 3,
      name: "Applied Jobs",
      path: "/applied-jobs",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className="md:flex md:justify-between sm:h-28 bg-gray-100 md:px-36 shadow-lg md:py-3 header-content sticky top-0">
      <div className="invisible lg:visible uppercase md:mt-5">
        <Link to="/">
          <h1 className="font-bold">Job center</h1>
        </Link>
      </div>
      <nav className="md:mt-5">
        <div onClick={() => setNavMenuOpen(!openNavMenu)} className="md:hidden">
          <span className="">
            {openNavMenu === true ? (
              <XMarkIcon className="h-10 w-10 text-purple-600" />
            ) : (
              <Bars4Icon className="h-10 w-10 text-purple-600" />
            )}
          </span>
        </div>
        <ul
          className={`grid bg-gray-100 md:flex font-bold md:justify-between md:space-x-10 md:items-center lg:items-center absolute md:static duration-1000 w-full ${
            openNavMenu ? "top-20" : "-top-48"
          }`}
        >
          {routes.map((route) => (
            <NavLink
              key={route.id}
              to={route.path}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {route.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="invisible md:visible lg:visible md:mt-5">
        <NavLink to="/applied-jobs">
          <button className="nav-bar-btn">Start Applying</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
