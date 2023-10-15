// * - IMPORTING -
// React
import React from "react";

// * - FindActivityButton COMPONENT -
const FindActivityButton: () => JSX.Element = () => {
  return (
    <React.Fragment>
      <div className="mb-2">
        <button className="h-10 px-5 m-2 text-indigo-100 rounded-e-xl transition-colors duration-150 bg-indigo-700 hover:bg-indigo-800">
          Find Activity
        </button>
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivityButton;
