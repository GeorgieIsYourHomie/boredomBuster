// * - IMPORTING -
import React, { useState } from "react";
// Category Style
import { setCategoryButtonStyle } from "../../../../Styles/category/categoryButtonStyle";
// Types
import { CategoryItemProps } from "../../../../types/categories/CategoryProp";
import { useCategoryState } from "../../../../hooks/category/categoryState";

// * - CategoryItem COMPONENT -
const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  // * - STATE -
  // For setting the category style on click
  const [categoryButtonStyling, setCategoryButtonStyling] = useState(false);

  // * - DECLARATIONS -
  // Category class assignment for styling
  const categoryClass: string = setCategoryButtonStyle(
    category,
    categoryButtonStyling
  );

  // Categories that were selected
  const toggleCategory = useCategoryState().toggleCategory;

  // * FUNCTIONS
  // Selecting category
  const selectCategory = (event: React.MouseEvent<HTMLElement>) => {
    // Prevent default event
    event.preventDefault();

    // Set the selected category as previous state (true/false)
    setCategoryButtonStyling(!categoryButtonStyling);

    // Function called here to toggle selected category state
    toggleCategory(category);
  };

  // * - RENDERING -
  return (
    <React.Fragment>
      {/* Category */}
      <button type="button" className={categoryClass} onClick={selectCategory}>
        {category}
      </button>
    </React.Fragment>
  );
};

// * Exporting CategoryItem Component
export default CategoryItem;
