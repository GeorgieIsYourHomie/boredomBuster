// * - IMPORTING -
import React from "react";
// Components
import CategoryItem from "./CategoryItem/CategoryItem";
// Types
import { CategoryProp } from "../../../types/categories/CategoryProp";
import { AllCategories } from "../../../types/categories/Categories";
import { CategoriesStateHookProps } from "../../../types/categories/Categories";
// import { SelectedCategoriesState } from "../../../types/categories/Categories";

// * - Categories COMPONENT -
const Categories: React.FC<CategoriesStateHookProps> = ({
  selectedCategories,
  chosenCategories,
  toggleCategory,
}) => {
  // Array of all categories
  const categories: AllCategories = [
    "Random",
    "Recreation",
    "Social",
    "Education",
    "DIY",
    "Cooking",
    "Charity",
    "Relaxation",
    "Busywork",
    "Music",
  ];

  // * DECLARATIONS

  // * - RENDERING -
  return (
    <React.Fragment>
      <h2 className="mb-6 text-3xl">Select a Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Mapping through categories here, rendering a button for each category */}
        {categories.map(
          (category: CategoryProp): JSX.Element => (
            <CategoryItem
              key={category}
              category={category}
              selectedCategories={selectedCategories}
              chosenCategories={chosenCategories}
              toggleCategory={toggleCategory}
            />
          )
        )}
      </div>
    </React.Fragment>
  );
};

// * Exporting Categories Component
export default Categories;
