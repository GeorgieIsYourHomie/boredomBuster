import { useState } from "react";
import { CategoryProp } from "../../types/categories/CategoryTypes";
import { SelectedCategoriesState } from "../../types/categories/CategoryTypes";

// * - useCategoryState HOOK -
export const useCategoryState = () => {
  // * - STATE -
  // All categories selected/unselected
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

  // Chosen categories, selected/unselected
  const [chosenCategories, setChosenCategories] = useState<string[]>([]);

  // * - FUNCTIONS -
  // * Function to toggle chosen category
  const toggleChosenCategory = (category: CategoryProp) => {
    setChosenCategories((prevChosenCategories) => {
      const isCategorySelected = prevChosenCategories.includes(category);
      if (isCategorySelected) {
        // Return a new array without the category
        return prevChosenCategories.filter(
          (chosenCategory) => chosenCategory !== category
        );
      } else {
        // Return a new array with the added category
        return [...prevChosenCategories, category];
      }
    });
  };

  // * Function to toggle selected category
  const toggleCategory = (category: CategoryProp) => {
    // Updating the state for all categories
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));

    // Toggle chosen category in the array
    toggleChosenCategory(category);
  };

  return {
    selectedCategories,
    chosenCategories,
    toggleCategory,
  };
};
