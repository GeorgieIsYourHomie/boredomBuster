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
  // Educational activity reducer
  const educationalActivity = useAppSelector(
    (store) => store.educationalActivityReducer.educationalActivity
  );
  // DIY activity reducer
  const DIYActivity = useAppSelector(
    (store) => store.DIYActivityReducer.DIYActivity
  );
  // Cooking activity reducer
  const cookingActivity = useAppSelector(
    (store) => store.cookingActivityReducer.cookingActivity
  );
  // Charity activity reducer
  const charityActivity = useAppSelector(
    (store) => store.charityActivityReducer.charityActivity
  );
  // Relaxation activity reducer
  const relaxationActivity = useAppSelector(
    (store) => store.relaxationActivityReducer.relaxationActivity
  );
  // Busywork activity reducer
  const busyworkActivity = useAppSelector(
    (store) => store.busyworkActivityReducer.busyworkActivity
  );
  // Music activity reducer
  const musicActivity = useAppSelector(
    (store) => store.musicActivityReducer.musicActivity
  );

  // * - RENDERING -
  return (
    <React.Fragment>
      <div className="mt-8  flex max-w-xl flex-col justify-center rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]">
        <h2 className="text-3xl">Activities</h2>
        {/* Displaying Activities */}
        {!randomActivity &&
          !recreationActivity &&
          !socialActivity &&
          !educationalActivity &&
          !DIYActivity &&
          !cookingActivity &&
          !charityActivity &&
          !relaxationActivity &&
          !busyworkActivity &&
          !musicActivity && (
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
        {/* Education */}
        {educationalActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-indigo-600">
              Educational:
            </h3>
            <p className="text-xl">{educationalActivity.activity}.</p>
          </div>
        )}
        {/* DIY */}
        {DIYActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-rose-600">DIY:</h3>
            <p className="text-xl">{DIYActivity.activity}.</p>
          </div>
        )}
        {/* Cooking */}
        {cookingActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-orange-600">
              Cooking:
            </h3>
            <p className="text-xl">{cookingActivity.activity}.</p>
          </div>
        )}
        {/* Charity */}
        {charityActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-green-600">
              Charity:
            </h3>
            <p className="text-xl">{charityActivity.activity}.</p>
          </div>
        )}
        {/* Relaxation */}
        {relaxationActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-indigo-600">
              Relaxation:
            </h3>
            <p className="text-xl">{relaxationActivity.activity}.</p>
          </div>
        )}
        {/* Busywork */}
        {busyworkActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-rose-600">
              Busywork:
            </h3>
            <p className="text-xl">{busyworkActivity.activity}.</p>
          </div>
        )}
        {/* Music */}
        {musicActivity && (
          <div>
            <h3 className="mt-3 text-2xl font-semibold text-orange-600">
              Music:
            </h3>
            <p className="text-xl">{musicActivity.activity}.</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}; // * - END ShowActivity COMPONENT -

// * Exporting ShowActivity Component
export default ShowActivity;
