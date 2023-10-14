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
    <React.Fragment>
      <header>
        <div
        style={{border: "solid black 2px"}}
        >
          {/* NavBar Component */}
          <NavBar />
        </div>
        <h1>Boredom Buster</h1>
      </header>

      <main>
        <FindActivity />
        <ShowActivity />
      </main>
    </React.Fragment>
  );
}; // * - END App COMPONENT -

// * Exporting App Component
export default App;
