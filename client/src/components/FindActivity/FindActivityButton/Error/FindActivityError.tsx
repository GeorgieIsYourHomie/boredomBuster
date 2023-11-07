// * - IMPORTING -
// React
import React from "react";
// Hooks
import { useAppSelector } from "../../../../hooks/reduxHook/reduxHook";

// * - FindActivityError COMPONENT -
const FindActivityError: React.FC = () => {
  // * - DECLARATIONS -
  const errorPrompt = useAppSelector((store) => store.errorReducer.errorPrompt);

  // * - RENDERING -
  return (
    <React.Fragment>
      {errorPrompt && (
        <p className="mt-8 font-sans text-lg text-rose-600">{errorPrompt}</p>
      )}
    </React.Fragment>
  );
};

// * Exporting FindActivityError
export default FindActivityError;
