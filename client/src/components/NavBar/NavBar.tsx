// * - IMPORTING -
// React
import React from "react";
// Components
import TechStack from "./TechStack/TechStack";
import LinkedIn from "./LinkedIn/LinkedIn";
import GitHub from "./GitHub/GitHub";

// * - NavBar COMPONENT -
const NavBar: () => JSX.Element = () => {
  // * - DECLARATIONS -
  // Declaring nav bar button styling
  const navBarButtonStyle: string =
    "h-5 px-3 text-xs text-black border border-black rounded-full transition-colors duration-150 hover:bg-black hover:text-white";

  // * - RENDERING -
  return (
    <React.Fragment>
      {/* Components */}
      <div className="flex justify-center flex-row gap-8 mb-8">
        <TechStack navBarButtonStyle={navBarButtonStyle} />
        <LinkedIn navBarButtonStyle={navBarButtonStyle} />
        <GitHub navBarButtonStyle={navBarButtonStyle} />
      </div>
    </React.Fragment>
  );
}; // * - END NavBar COMPONENT -

// * Exporting Navbar Component
export default NavBar;
