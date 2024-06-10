// React
import React, { useState } from "react";
import { NavBarButtonStyle } from "../../../types/navBar/navBarTypes";

// * - TechStack COMPONENT -
const TechStack: React.FC<NavBarButtonStyle> = ({ navBarButtonStyle }) => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Event handler to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <React.Fragment>
      <div>
        <button className={`${navBarButtonStyle}`} onClick={toggleDropdown}>
          Technologies
        </button>

        {/* Dropdown Menu; rendered conditionally based on isDropdownOpen */}
        {isDropdownOpen && (
          <ul className=" w-44max-w-full absolute z-50 mt-2 rounded-2xl border-4 border-black bg-white p-7 ">
            <li className="transition-transform hover:scale-110">JavaScript</li>
            <li className="transition-transform hover:scale-110">TypeScript</li>
            <li className="transition-transform hover:scale-110">React</li>
            <li className="transition-transform hover:scale-110">NodeJS</li>
            <li className="transition-transform hover:scale-110">TailwindCSS</li>
            <li className="transition-transform hover:scale-110">HTML/CSS</li>
            <li className="transition-transform hover:scale-110">Redux</li>
            <li className="transition-transform hover:scale-110">BoredAPI</li>
          </ul>
        )}
      </div>
    </React.Fragment>
  );
}; // * - END TechStack COMPONENT -

// * Exporting TechStack Component
export default TechStack;
