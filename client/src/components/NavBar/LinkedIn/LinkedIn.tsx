// * - IMPORTING -
// React
import React from "react";
// Nav bar button styling
import { NavBarButtonStyle } from "../../Types/navBarTypes";

// * - LinkedIn COMPONENT -
const LinkedIn: React.FC<NavBarButtonStyle> = ({ navBarButtonStyle }) => {
  return (
    <React.Fragment>
      <div>
        <button className={navBarButtonStyle}>LinkedIn</button>
      </div>
    </React.Fragment>
  );
}; // * - END LinkedIn COMPONENT -

// * Exporting LinkedIn Component
export default LinkedIn;
