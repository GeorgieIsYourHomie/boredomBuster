// * - IMPORTING -
import React from "react";
import { useState } from "react";
// Category Style
import { setCategoryButtonStyle } from "../../../../Styles/category/categoryButtonStyle";
// Types
import { CategoryItemProps } from "../../../../types/categories/CategoryTypes";
import { CategoriesStateHookProps } from "../../../../types/categories/CategoryTypes";

// * - TYPES -
// * Toggle Type Prop
type CombinedCategoryItemProps = CategoriesStateHookProps & CategoryItemProps;

// * - CategoryItem COMPONENT -
const CategoryItem: React.FC<CombinedCategoryItemProps> = ({
  category,
  toggleCategory,
}) => {
  // * - STATE -
  // For setting the category style on click
  const [categoryButtonStyling, setCategoryButtonStyling] = useState(false);

  // * - DECLARATIONS -
  // Category class assignment for styling
  const categoryClass: string = setCategoryButtonStyle(
    category,
    categoryButtonStyling
  );

  // * FUNCTIONS
  // Selecting category
  const selectCategory = (event: React.MouseEvent<HTMLElement>) => {
    // Prevent default event
    event.preventDefault();

    // Set the selected category as previous state (true/false)
    setCategoryButtonStyling(!categoryButtonStyling);

    // Function called here to toggle selected category state
    toggleCategory(category);
  }; // * end selectCategory

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
