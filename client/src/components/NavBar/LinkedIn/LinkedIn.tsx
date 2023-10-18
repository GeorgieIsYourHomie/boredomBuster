// * - IMPORTING -
// React
import React from "react";
// Nav bar button styling
import { NavBarButtonStyle } from "../../../types/navBar/navBarTypes";

// * - LinkedIn COMPONENT -
const LinkedIn: React.FC<NavBarButtonStyle> = ({ navBarButtonStyle }) => {
  return (
    <React.Fragment>
      <div>
        <a
          href="https://www.linkedin.com/in/georgio-harris-82370a239/"
          rel="noreferrer"
          target="_blank"
        >
          <button className={navBarButtonStyle}>LinkedIn</button>
        </a>
      </div>
    </React.Fragment>
  );
}; // * - END LinkedIn COMPONENT -

// * Exporting LinkedIn Component
export default LinkedIn;
