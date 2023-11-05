// * - IMPORTING -
// React
import React from "react";
// Redux
import { useAppSelector } from "../../hooks/reduxHook/reduxHook";

// * - ShowActivity COMPONENT -
const ShowActivity: () => JSX.Element = () => {
  // Random activity reducer
  const randomActivity = useAppSelector(
    (store) => store.randomActivityReducer.randomActivity
  );

  // Recreation activity reducer
  const recreationActivity = useAppSelector(
    (store) => store.recreationActivityReducer.recreationActivity
  );

  console.log("recreationActivity is:", recreationActivity);
  

  // * - RENDERING -
  return (
    <React.Fragment>
      <div className="mt-8  flex max-w-xl flex-col justify-center rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        <h2 className="text-3xl">Activity</h2>
        {/* Displaying Activities */}
        {/* Random */}
        {randomActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-rose-600">
              Random Activity:
            </h3>
            <p className="text-xl">{randomActivity.activity}.</p>
          </div>
        )}
        {/* Recreation */}
        {recreationActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-orange-600">
              Recreational Activity:
            </h3>
            <p className="text-xl">{recreationActivity.activity}.</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}; // * - END ShowActivity COMPONENT -

// * Exporting ShowActivity Component
export default ShowActivity;
