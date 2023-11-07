// * - IMPORTING -
// React
import React from "react";
// Redux
import { useAppSelector } from "../../hooks/reduxHook/reduxHook";
// Types
import type { CategoriesStateHookProps } from "../../types/categories/CategoryTypes";
// Components
import FindActivityButton from "./FindActivityButton/FindActivityButton";
import Categories from "./Categories/Categories";
import FindActivityError from "./FindActivityButton/Error/FindActivityError";
import ShowActivity from "../ShowActivity/ShowActivity";

// * - FindActivityButton COMPONENT -
const FindActivity: React.FC<CategoriesStateHookProps> = ({
  selectedCategories,
  chosenCategories,
  toggleCategory,
}) => {
  // * - DECLARATIONS -
  // toggleShowActivity reducer
  const toggleShowActivity = useAppSelector(
    (store) => store.toggleShowActivityReducer.toggleShowActivity
  );

  // * - RENDERING -
  return (
    <React.Fragment>
      <div className="max-w-full rounded-2xl border-4 border-black bg-white p-7 shadow-[24px_32px_0px_2px_rgba(0,0,0,90)]">
        {/* Components */}
        <Categories
          selectedCategories={selectedCategories}
          chosenCategories={chosenCategories}
          toggleCategory={toggleCategory}
        />
        <FindActivityError />
        <FindActivityButton chosenCategories={chosenCategories} />
        {/* Conditional to show below component */}
        {/* If chosenCategories true and has length after button was clicked */}
        {toggleShowActivity && chosenCategories && chosenCategories.length > 0 && <ShowActivity />}
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivity;
