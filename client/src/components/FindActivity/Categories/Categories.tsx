// * - IMPORTING -
// React
import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";

// * - Categories COMPONENT -
const Categories: () => JSX.Element = () => {
  // Array of all categories
  const Categories: string[] = [
    "Random",
    "Education",
    "Recreational",
    "Social",
    "DIY",
    "Charity",
    "Cooking",
    "Relaxation",
    "Music",
    "Busywork",
  ];
  // * - RENDERING -
  return (
    <React.Fragment>
      <div 
      style={{display: "flex", flexDirection: "row", gap: "20px"}}
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
