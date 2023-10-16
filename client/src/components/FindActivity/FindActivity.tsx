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
      <div className="max-w-xl rounded-lg border border-black p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        {/* Components */}
        <Categories />
        <FindActivityButton />
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivity;
