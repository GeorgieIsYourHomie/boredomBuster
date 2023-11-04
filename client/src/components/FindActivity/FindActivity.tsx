// * - IMPORTING -
// React
import React from "react";
// Components
import FindActivityButton from "./FindActivityButton/FindActivityButton";
import Categories from "./Categories/Categories";
// Hooks
import { useCategoryState } from "../../hooks/categoryStateHook/categoryStateHook";

// * - FindActivityButton COMPONENT -
const FindActivity: () => JSX.Element = () => {
  // * - DECLARATIONS -
  // Categories state hook function and state
  const { selectedCategories, chosenCategories, toggleCategory } =
    useCategoryState();

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
        <FindActivityButton chosenCategories={chosenCategories} />
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivity;
