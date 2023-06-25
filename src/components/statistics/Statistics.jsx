import React from "react";
import { PieChart, Pie, Tooltip, Sector, Cell } from "recharts";
import { useNavigation } from "react-router-dom";
import LoaderSpinner from "../loaderSpinner/LoaderSpinner";

const Statistics = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoaderSpinner />;
  }
  const data01 = [
    { name: "Milestone A", value: 1 },
    { name: "Milestone B", value: 1 },
    { name: "Milestone C", value: 1 },
    { name: "Milestone D", value: 1 },
    { name: "Milestone E", value: 1 },
    { name: "Milestone F", value: 1 },
    { name: "Milestone G", value: 1 },
    { name: "Milestone H", value: 1 },
  ];
  const statistics = [
    { id: 1, assignment_name: "Assignment_1", marks: 60 },
    { id: 2, assignment_name: "Assignment_2", marks: 60 },
    { id: 3, assignment_name: "Assignment_3", marks: 60 },
    { id: 4, assignment_name: "Assignment_4", marks: 60 },
    { id: 5, assignment_name: "Assignment_5", marks: 56 },
    { id: 6, assignment_name: "Assignment_6", marks: 48 },
    { id: 7, assignment_name: "Assignment_7", marks: 50 },
    { id: 8, assignment_name: "Assignment_8", marks: 60 },
  ];
  return (
    <div className="md:px-96 grid grid-cols-1 md-grid-cols-1 lg:grid-cols-1 mx-auto   md:my-5 items-center p-2  ">
      <div className=" mx-auto">
        <h1 className="text-4xl font-bold mt-16">
          Assignment Marks Statistics
        </h1>
        <PieChart width={300} height={380}>
          <Pie
            data={data01}
            dataKey="value"
            cx="60%"
            cy="60%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={statistics}
            dataKey="marks"
            cx="60%"
            cy="60%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Tooltip />
          <Sector />
          <Cell />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
