// * - IMPORTING -
// React
import React from "react";
import { NavBarButtonStyle } from "../../Types/navBarTypes";

// * - TechStack COMPONENT -
const TechStack: React.FC<NavBarButtonStyle> = ({ navBarButtonStyle }) => {
  return (
    <React.Fragment>
      <div>
        <button className={navBarButtonStyle}>Tech Stack</button>
      </div>
    </React.Fragment>
  );
}; // * - END TechStack COMPONENT -

// * Exporting TechStack Component
export default TechStack;
