// * - IMPORTING -
// React
import React from "react";
// Types
import { NavBarButtonStyle } from "../../Types/navBarTypes";

// * - GitHub COMPONENT -
const GitHub: React.FC<NavBarButtonStyle> = ({ navBarButtonStyle }) => {
  return (
    <React.Fragment>
      <div>
        <button className={navBarButtonStyle}>
          <a
            href="https://github.com/GeorgieIsYourHomie"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </button>
      </div>
    </React.Fragment>
  );
}; // * - END GitHub COMPONENT -

// * Exporting GitHub Component
export default GitHub;
