// * - IMPORTING -
// React
import React from "react";

// Expected category prop type
type CategoryProp = {
  category: string;
};

// * - CategoryItem COMPONENT -
const CategoryItem: React.FC<CategoryProp> = ({ category }) => {
  // * Determining class name depending on category
  // Declaring base category styling
  let categoryClass: string =
    "h-10 px-5 text-black border-2 rounded-full transition-colors duration-150 hover:text-white";
  // Magenta border and bg hover
  let addMagenta: string =
    "border-2 border-rose-600 hover:bg-rose-600 hover:text-white";
  // Orange border and bg hover
  let addOrange: string =
    "border-2 border-orange-600 hover:bg-orange-600 hover:text-white";
  // Green border and bg hover
  let addGreen: string =
    "border-2 border-green-600 hover:bg-green-600 hover:text-white";
  // Indigo border and bg hover
  let addIndigo: string =
    "border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white";

  // Determine class upon depending on category
  switch (category) {
    case "Random":
      categoryClass += addMagenta;
      break;
    case "Recreation":
      categoryClass += addOrange;
      break;
    case "Social":
      categoryClass += addGreen;
      break;
    case "Education":
      categoryClass += addIndigo;
      break;
    case "DIY":
      categoryClass += addMagenta;
      break;
    case "Cooking":
      categoryClass += addOrange;
      break;
    case "Charity":
      categoryClass += addGreen;
      break;
    case "Relaxation":
      categoryClass += addIndigo;
      break;
    case "Busywork":
      categoryClass += addMagenta;
      break;
    case "Music":
      categoryClass += addOrange;
      break;
    default:
      categoryClass += "border-2 border-indigo-600 hover:border-indigo-800";
      break;
  } // * End determining class

  // * - RENDERING -
  return (
    <React.Fragment>
      {/* Category */}
      <button className={categoryClass}>{category}</button>

    </React.Fragment>
  );
}; // * - END CategoryItem COMPONENT -

// * Exporting CategoryItem Component
export default CategoryItem;
