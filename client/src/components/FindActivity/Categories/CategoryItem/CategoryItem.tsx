// * - IMPORTING -
import React from "react";
import { useState } from "react";
// Redux Hook
import { useAppDispatch } from "../../../../hooks/reduxHook/reduxHook";
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
  selectedCategories
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

  const dispatch = useAppDispatch();

  // * FUNCTIONS
  // Selecting category
  const selectCategory = (event: React.MouseEvent<HTMLElement>) => {
    // Prevent default event
    event.preventDefault();

    // Set the selected category as previous state (true/false)
    setCategoryButtonStyling(!categoryButtonStyling);

    // Function called here to toggle selected category state
    toggleCategory(category);

    dispatch({ type: "CLEAR_CATEGORY_REDUCERS", payload: selectedCategories });
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
