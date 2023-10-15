// * - IMPORTING -
// React
import React from "react";
// Nav bar button style type
import { NavBarButtonStyle } from "../../Types/navBarTypes";

// * - GitHub COMPONENT -
const GitHub: React.FC<NavBarButtonStyle> = ({ navBarButtonStyle }) => {
  return (
    <React.Fragment>
      <div>
        <button className={navBarButtonStyle}>GitHub</button>
      </div>
    </React.Fragment>
  );
}; // * - END GitHub COMPONENT -

// * Exporting GitHub Component
export default GitHub;
