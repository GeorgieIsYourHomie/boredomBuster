// * - IMPORTING -
// React
import React from "react";

// * - FindActivityButton COMPONENT -
const FindActivityButton: () => JSX.Element = () => {
  return (
    <React.Fragment>
      <div className="mb-2">
        <button className="h-10 px-10 m-4 bg-indigo-700 text-indigo-100 rounded-lg shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transform active:scale-75 transition-transform duration-150  hover:shadow-[0px_9px_30px_-4px_rgba(74,63,205)]">
          Find Activity
        </button>
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivityButton;
