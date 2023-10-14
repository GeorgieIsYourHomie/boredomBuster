// * - IMPORTING -
// React
import React from "react";
import TechStack from "./TechStack/TechStack";
import LinkedIn from "./LinkedIn/LinkedIn";
import GitHub from "./GitHub/GitHub";
// Components

// * - NavBar COMPONENT -
const NavBar: () => JSX.Element = () => {
  return (
    <React.Fragment>
      {/* Components */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TechStack />
        <LinkedIn />
        <GitHub />
      </div>
    </React.Fragment>
  );
}; // * - END NavBar COMPONENT -

// * Exporting Navbar Component
export default NavBar;
