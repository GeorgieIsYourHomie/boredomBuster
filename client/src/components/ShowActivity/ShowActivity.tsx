// * - IMPORTING -
// React
import React from "react";
// Redux
import { useAppSelector } from "../../hooks/reduxHook/reduxHook";

// * - ShowActivity COMPONENT -
const ShowActivity: () => JSX.Element = () => {
  // * - DECLARATIONS -
  // Random activity reducer
  const randomActivity = useAppSelector(
    (store) => store.randomActivityReducer.randomActivity
  );
  // Recreation activity reducer
  const recreationActivity = useAppSelector(
    (store) => store.recreationActivityReducer.recreationActivity
  );
  // Recreation activity reducer
  const socialActivity = useAppSelector(
    (store) => store.socialActivityReducer.socialActivity
  );

  // * - RENDERING -
  return (
    <React.Fragment>
      <div className="mt-8  flex max-w-xl flex-col justify-center rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        <h2 className="text-3xl">Activities</h2>
        {/* Displaying Activities */}
        {!randomActivity && !recreationActivity && !socialActivity && (
          <p className="text-lg">Find a fun activity to do!</p>
        )}
        {/* Random */}
        {randomActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-rose-600">
              Random:
            </h3>
            <p className="text-xl">{randomActivity.activity}.</p>
          </div>
        )}
        {/* Recreation */}
        {recreationActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-orange-600">
              Recreational:
            </h3>
            <p className="text-xl">{recreationActivity.activity}.</p>
          </div>
        )}
        {/* Social */}
        {socialActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-green-600">
              Social:
            </h3>
            <p className="text-xl">{socialActivity.activity}.</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}; // * - END ShowActivity COMPONENT -

// * Exporting ShowActivity Component
export default ShowActivity;
