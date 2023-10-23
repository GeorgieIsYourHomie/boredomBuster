// * - IMPORTING -
// React
import { useState } from "react";
// Types
import { CategoryProp } from "../../types/categories/CategoryProp";
import { SelectedCategoriesState } from "../../types/categories/SelectedCategoriesState";

// * Custom hook for managing category state
export const useCategoryState = () => {
  // * - STATE -
  // All categories
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategoriesState>({
      Random: false,
      Recreation: false,
      Social: false,
      Education: false,
      DIY: false,
      Cooking: false,
      Charity: false,
      Relaxation: false,
      Busywork: false,
      Music: false,
    });

  // * Function to toggle selected category
  const toggleCategory = (category: CategoryProp) => {
    // Targeting category by argument and setting it to the opposite value
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  // * Returning category state and state toggle function
  return {
    selectedCategories,
    toggleCategory,
  };
};
