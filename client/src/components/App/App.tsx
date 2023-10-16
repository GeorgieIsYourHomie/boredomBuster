// * - IMPORTING -
// React
import React from "react";
// CSS
import "./App.css";
// Components
import FindActivity from "../FindActivity/FindActivity";
import ShowActivity from "../ShowActivity/ShowActivity";
import NavBar from "../NavBar/NavBar";

// * - App COMPONENT -
const App: React.FC = () => {
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
        <FindActivity />
        <ShowActivity />
      </main>
    </div>
  );
}; // * - END App COMPONENT -

// * Exporting App Component
export default App;
