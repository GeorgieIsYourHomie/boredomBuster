// * - IMPORTING -
// React
import React from "react";
// Redux
import { useAppDispatch } from "../../../hooks/reduxHook/reduxHook";
// Types
import type { ChosenCategories } from "../../../types/categories/CategoryTypes";

// * - FindActivityButton COMPONENT -
const FindActivityButton: React.FC<{
  chosenCategories: ChosenCategories;
}> = ({ chosenCategories }) => {
  // * - DECLARATIONS -
  const dispatch = useAppDispatch();

  // * - FUNCTIONS -
  // * Function to loop through chosenCategories
  //  If value matches any category, send dispatch
  const handleFindActivityButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    console.log("chosenCategories are:", chosenCategories);

    // chosenCategories true, dispatch action,
    // otherwise toggle on prompt
    if (chosenCategories && chosenCategories.length > 0) {
      // Dispatching action and payload of chosenCategories for activities
      dispatch({
        type: "SEARCH_CHOSEN_CATEGORIES_ACTIVITY",
        payload: chosenCategories,
      });
      // Dispatching action to clear errors
      dispatch({
        type: "NO_ERRORS",
      });
    } else if (chosenCategories && chosenCategories?.length === 0) {
      // Error prompt dispatch here if no selected category
      dispatch({
        type: "SELECT_A_CATEGORY",
      });

      console.log("Please select a category.");
    } else {
      return;
    }
  }; // * end handleFindActivityButton

  // * - RENDERING -
  return (
    <React.Fragment>
      <div className="mb-2">
        <button
          onClick={handleFindActivityButton}
          className="mb-8 mt-14 transform rounded-full bg-indigo-700 px-10 py-2 text-2xl text-white shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transition-transform duration-150 hover:scale-110 hover:border hover:border-black hover:bg-white hover:text-black hover:shadow-[0px_9px_30px_-4px_rgba(74,63,205)] active:scale-75"
        >
          Find Activity
        </button>
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivityButton;
