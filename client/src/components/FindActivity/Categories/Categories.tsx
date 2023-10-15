// * - IMPORTING -
// React
import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";

// * - Categories COMPONENT -
const Categories: () => JSX.Element = () => {
  // Array of all categories
  const Categories: string[] = [
    "Random",
    "Recreation",
    "Social",
    "Education",
    "DIY",
    "Cooking",
    "Charity",
    "Relaxation",
    "Busywork",
    "Music",
  ];
  // * - RENDERING -
  return (
    <React.Fragment>
      <div 
      className=" flex gap-4 overflow-auto"
      >
        {/* Mapping through categories here, rendering a button for each category */}
        {Categories.map((category: string): JSX.Element => {
          return <CategoryItem key={category} category={category} />;
        })}
      </div>
    </React.Fragment>
  );
}; // * - END Categories COMPONENT -

// * Exporting Categories Component
export default Categories;
