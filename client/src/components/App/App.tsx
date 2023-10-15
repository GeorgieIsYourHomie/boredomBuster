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
    <div className="border-8 w-100 my-3 mx-auto">
      <header>
        <div>
          {/* NavBar Component */}
          <NavBar />
        </div>

        <div className="my-2.5">
          <h1 className="border-4 border-indigo-500 text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl">
            Boredom Buster
          </h1>
        </div>
      </header>

      <main className="flex flex-col gap-5 text-center">
        <FindActivity />
        <ShowActivity />
      </main>
    </div>
  );
}; // * - END App COMPONENT -

// * Exporting App Component
export default App;
