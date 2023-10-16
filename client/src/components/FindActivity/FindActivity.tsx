// * - IMPORTING -
// React
import React from "react";
// Components
import FindActivityButton from "./FindActivityButton/FindActivityButton";
import Categories from "./Categories/Categories";

// * - FindActivityButton COMPONENT -
const FindActivity: () => JSX.Element = () => {
  return (
    <React.Fragment>
      <div className="p-4 border border-black rounded-lg shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        {/* Components */}
        <Categories />
        <FindActivityButton />
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivity;
