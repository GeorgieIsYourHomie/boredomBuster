// * - IMPORTING -
// React
import React, { useState } from "react";
// Category Style
import { settingCategoryStyles } from "./Styles/Styles";

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
  // Category class assignment
  const categoryClass: string = settingCategoryStyles(
    category,
    categoryIsSelected
  );

  // * FUNCTIONS
  const selectCategory = () => {
    setCategoryIsSelected(!categoryIsSelected);
  };

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
