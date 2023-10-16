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
      <h2 className="mb-6 text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
        Select a Category
      </h2>
      <div className=" flex justify-center flex-wrap gap-4">
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
