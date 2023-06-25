import React from "react";

const Categories = ({ category }) => {
  const { category_logo, category_name, available_jobs } = category;
  return (
    <div>
      <div className="bg-gray-100 p-5 rounded-md shadow-md mb-4">
        <img src={category_logo} alt="" className="mb-4" />
        <h4 className="font-bold text-gray-500">{category_name}</h4>
        <p className="text-gray-500">
          <small>{available_jobs}</small>
        </p>
      </div>
    </div>
  );
};

export default Categories;
