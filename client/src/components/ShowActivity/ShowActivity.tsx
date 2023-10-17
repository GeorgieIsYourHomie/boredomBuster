// * - IMPORTING -
// React
import React from "react";

// * - ShowActivity COMPONENT -
const ShowActivity: () => JSX.Element = () => {
  return (
    <React.Fragment>
      <div className="mt-8  flex max-w-xl flex-col justify-center rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        <h2 className="text-3xl">Activity</h2>
        <p className=" text-xl">Learn a new language</p>
      </div>
    </React.Fragment>
  );
}; // * - END ShowActivity COMPONENT -

// * Exporting ShowActivity Component
export default ShowActivity;
