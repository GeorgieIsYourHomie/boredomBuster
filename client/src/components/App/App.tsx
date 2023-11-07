// * - IMPORTING -
// React
import React from "react";
// Redux
// import { useAppDispatch } from "../../hooks/reduxHook/reduxHook";
// CSS
import "./App.css";
// Hooks
import { useCategoryState } from "../../hooks/categoryStateHook/categoryStateHook";
// Utils
// import handleClearCategoryReducerState from "../../utils/handleClearCategoryReducerState";
// Components
import FindActivity from "../FindActivity/FindActivity";
import NavBar from "../NavBar/NavBar";

// * - App COMPONENT -
const App: React.FC = () => {
  // * - DECLARATIONS -
  // Categories state hook function and state
  const { selectedCategories, chosenCategories, toggleCategory } =
    useCategoryState();

  // * - RENDERING -
  return (
    <div className="max-w-100 mx-auto my-6 p-8 flex w-full flex-col justify-center px-6 md:max-w-4xl">
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

      <main className="mt-9 flex w-full flex-col justify-center text-center">
        {/* Components */}
        <FindActivity
          selectedCategories={selectedCategories}
          chosenCategories={chosenCategories}
          toggleCategory={toggleCategory}
        />
      </main>
    </div>
  );
}; // * - END App COMPONENT -

// * Exporting App Component
export default App;
