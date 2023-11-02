// * - IMPORTING -
// React
import React from "react";
// Category custom hook
import { useCategoryState } from "../../../hooks/category/categoryState";

// * - FindActivityButton COMPONENT -
const FindActivityButton: () => JSX.Element = () => {
  // * - DECLARATIONS -
  // All chosen categories state
  const { chosenCategories } = useCategoryState();

  // * - FUNCTIONS -
  // Function to loop through chosenCategories
  //  If value matches any category, send dispatch
  const handleFindActivityButton = () => {
    console.log("chosenCategories are:", chosenCategories);
  };

  // * - RENDERING -
  return (
    <React.Fragment>
      <div className="mb-2">
        <button
          onClick={handleFindActivityButton}
          className=" m-6 mb-8 mt-12 transform rounded-full bg-indigo-700 px-10 py-2 text-2xl text-white shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transition-transform duration-150 hover:scale-110 hover:border hover:border-black hover:bg-white hover:text-black hover:shadow-[0px_9px_30px_-4px_rgba(74,63,205)] active:scale-75"
        >
          Find Activity
        </button>
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivityButton;
