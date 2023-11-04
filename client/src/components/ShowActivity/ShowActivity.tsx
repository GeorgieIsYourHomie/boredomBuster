// * - IMPORTING -
// React
import React from "react";
// Redux
import { useAppSelector } from "../../hooks/reduxHook/reduxHook";

// * - ShowActivity COMPONENT -
const ShowActivity: () => JSX.Element = () => {
  // Access the nested randomActivity property from the reducer's state
  const randomActivity = useAppSelector(
    (store) => store.randomActivityReducer.randomActivity
  );

  return (
    <React.Fragment>
      <div className="mt-8  flex max-w-xl flex-col justify-center rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        <h2 className="text-3xl">Activity</h2>

        {randomActivity && (
          <div>
            <h3 className="text-rose-600 mt-3 text-2xl font-semibold">
              Random Activity:
            </h3>
            <p className="text-xl">{randomActivity.activity}.</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}; // * - END ShowActivity COMPONENT -

// * Exporting ShowActivity Component
export default ShowActivity;
