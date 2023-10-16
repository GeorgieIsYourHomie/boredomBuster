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
    <div className="w-100 px-6 my-3 mx-auto ">
      <header>
        <div>
          {/* NavBar Component */}
          <NavBar />
        </div>

        <div className="my-2.5">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl">
            Boredom Buster
          </h1>
        </div>
      </header>

      <main className="flex flex-col mt-9 gap-3 text-center">
        <FindActivity />
        <ShowActivity />
      </main>
    </div>
  );
}; // * - END App COMPONENT -

// * Exporting App Component
export default App;
