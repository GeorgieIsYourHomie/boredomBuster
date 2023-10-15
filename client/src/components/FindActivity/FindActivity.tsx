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
      <div className="border-2 border-black p-2">
        {/* Components */}
        <FindActivityButton />
        <Categories />
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivity;
