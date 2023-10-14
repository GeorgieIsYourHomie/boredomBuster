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
      <div style={{ border: "solid black 3px" }}>
        {/* Components */}
        <FindActivityButton />
        <Categories />
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivity;
