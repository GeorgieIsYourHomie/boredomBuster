// * - IMPORTING -
// React
import React from "react";
// Components
import FindActivityButton from "./FindActivityButton/FindActivityButton";
import Categories from "./Categories/Categories";
// Hooks
import { useCategoryState } from "../../hooks/category/categoryState";

// * - FindActivityButton COMPONENT -
const FindActivity: () => JSX.Element = () => {
  // * 1. Categories data structure(in Categories or module)
  // 1. Need states of all categories for checking selected ones that will be default false
  // 2. States will be stored in object with functions to set
  // - Object of all category states with set functions
  // # Stretch(Refactoring States): Can possibly use this for the styles instead of the single state being used in CategoryItem

  // * 2. Sending dispatch for selected categories (find activity button)
  // 1. Object properties (categories) will be looped through then switch statement, checking if they're true (selected)
  // 2. If true, will send dispatch for their info

  // * 3. Create type for categories data structure

  // * - DECLARATIONS -
  // Categories state hook function and state
  const { selectedCategories, chosenCategories, toggleCategory } = useCategoryState();

  // * - RENDERING -
  return (
    <React.Fragment>
      <div className="max-w-xl rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        {/* Components */}
        <Categories
          selectedCategories={selectedCategories}
          chosenCategories={chosenCategories}
          toggleCategory={toggleCategory}
        />
        <FindActivityButton
        // chosenCategories={chosenCategories}
        />
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivity;
