// * - IMPORTING -
// React
import React, { useState } from "react";
// Category Style
import { getCategoryStyles } from "./Styles/Styles";

// Expected category prop type
type CategoryProp = {
  category: string;
};

// * - CategoryItem COMPONENT -
const CategoryItem: React.FC<CategoryProp> = ({ category }) => {
  // * - STATE -
  // For setting the category style on click
  const [categoryIsSelected, setCategoryIsSelected] = useState(false);

  // * - DECLARATIONS -
  // Category class
  const categoryClass: string = getCategoryStyles(category, categoryIsSelected);

  // * FUNCTIONS
  const selectCategory = () => {
    setCategoryIsSelected(!categoryIsSelected);
  };
  console.log("categoryIsSelected is:", categoryIsSelected);

  // * - RENDERING -
  return (
    <React.Fragment>
      {/* Category */}
      <button className={categoryClass} onClick={selectCategory}>
        {category}
      </button>
    </React.Fragment>
  );
}; // * - END CategoryItem COMPONENT -

// * Exporting CategoryItem Component
export default CategoryItem;
