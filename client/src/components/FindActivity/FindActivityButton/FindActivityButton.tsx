// * - IMPORTING -
// React
import React from "react";

// * - FindActivityButton COMPONENT -
const FindActivityButton: () => JSX.Element = () => {
  return (
    <React.Fragment>
      <div className="mb-2">
        <button className="m-4 mt-10 transform rounded-full bg-indigo-700 px-10 py-2 text-3xl text-indigo-100 shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transition-transform duration-150 hover:shadow-[0px_9px_30px_-4px_rgba(74,63,205)]  active:scale-75">
          Find Activity
        </button>
      </div>
    </React.Fragment>
  );
}; // * - END FindActivityButton COMPONENT -

// * Exporting FindActivityButton Component
export default FindActivityButton;
