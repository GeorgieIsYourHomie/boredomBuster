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
    "transform rounded-full border border-black bg-black px-3 text-xs text-black text-white shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transition-colors transition-transform duration-150 hover:bg-white hover:text-black hover:shadow-[0px_9px_30px_-4px_rgba(20,20,20)] active:scale-75  md:text-lg md:shadow-none";

  // * - RENDERING -
  return (
    <React.Fragment>
      {/* Components */}
      <div className="mb-8 flex flex-row justify-center gap-8">
        <TechStack navBarButtonStyle={navBarButtonStyle} />
        <LinkedIn navBarButtonStyle={navBarButtonStyle} />
        <GitHub navBarButtonStyle={navBarButtonStyle} />
      </div>
    </React.Fragment>
  );
}; // * - END NavBar COMPONENT -

// * Exporting Navbar Component
export default NavBar;
