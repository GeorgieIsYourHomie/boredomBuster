// * - IMPORTING -
// React
import React, { useState } from "react";
// Category Style
import { setCategoryButtonStyle } from "../../../../Styles/category/categoryButtonStyle";
// Types
import { CategoryProp } from "../../../../types/categories/CategoryProp";
// Utils
import { useSetCategorySelectedState } from "../../../../utils/categories/setCategory";

// * - CategoryItem COMPONENT -
const CategoryItem: React.FC<CategoryProp> = (category: CategoryProp) => {
  // * - STATE -
  // For setting the category style on click
  const [categoryButtonStyling, setCategoryButtonStyling] = useState(false);

  // * - DECLARATIONS -
  // Category class assignment
  const categoryClass: string = setCategoryButtonStyle(
    category,
    categoryButtonStyling
  );

  // Categories that were selected
  const setCategorySelectedState = useSetCategorySelectedState;

  // * FUNCTIONS
  // Selecting category
  const selectCategory = (event: React.MouseEvent<HTMLElement>) => {
    // Set the selected category as pervious state(true/false)
    setCategoryButtonStyling(!categoryButtonStyling);

    // Function called here to toggle selected category state
    // 1. Switch statement
    //  1 - check for category name
    //  2 - case category name, run relevant function to set (toggle on/off) state of category
    setCategorySelectedState(event, category);
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
}; // * - END CategoryItem COMPONENT -

// * Exporting CategoryItem Component
export default CategoryItem;
