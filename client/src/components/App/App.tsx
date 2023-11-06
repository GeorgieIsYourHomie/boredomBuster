// * - IMPORTING -
// React
import React from "react";
// Redux
// import { useAppDispatch } from "../../hooks/reduxHook/reduxHook";
// CSS
import "./App.css";
// Hooks
import { useCategoryState } from "../../hooks/categoryStateHook/categoryStateHook";
import { useAppSelector } from "../../hooks/reduxHook/reduxHook";
// Utils
// import handleClearCategoryReducerState from "../../utils/handleClearCategoryReducerState";
// Components
import FindActivity from "../FindActivity/FindActivity";
import ShowActivity from "../ShowActivity/ShowActivity";
import NavBar from "../NavBar/NavBar";

// * - App COMPONENT -
const App: React.FC = () => {
  // * - DECLARATIONS -
  // Categories state hook function and state
  const { selectedCategories, chosenCategories, toggleCategory } =
    useCategoryState();

  // toggleShowActivity reducer
  const toggleShowActivity = useAppSelector(
    (store) => store.toggleShowActivityReducer.toggleShowActivity
  );

  // * - RENDERING -
  return (
    <div className="max-w-80 mx-auto my-3 flex w-full flex-col justify-center px-6 md:max-w-xl">
      <header>
        <div>
          {/* NavBar Component */}
          <NavBar />
        </div>

        <div className="w-100 my-2.5">
          <img
            className="floating max-w-6xl"
            src="images/boredom-buster-logo.svg"
            alt="Logo design of Boredom Buster app, sans-serif font with outlined symbol of explosion."
          />
        </div>
      </header>

      <main className="mt-9 text-center">
        {/* Components */}
        <FindActivity
          selectedCategories={selectedCategories}
          chosenCategories={chosenCategories}
          toggleCategory={toggleCategory}
        />
        {/* Conditional to show below component */}
        {/* If chosenCategories true and has length after button was clicked */}
        {toggleShowActivity && chosenCategories.length > 0 && <ShowActivity />}
      </main>
    </div>
  );
}; // * - END App COMPONENT -

// * Exporting App Component
export default App;
