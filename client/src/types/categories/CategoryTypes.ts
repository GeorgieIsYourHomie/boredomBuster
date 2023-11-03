// * Selected categories state
export type SelectedCategoriesState = {
  [key: string]: boolean;
};

// * Array of all categories
export type AllCategories = string[];

// * -  CATEGORIES STATE HOOK TYPES -
// Categories state hook chosen categories
export type ChosenCategories = string[];
// Categories state hook prop type
export type CategoriesStateHookProps = {
  selectedCategories: SelectedCategoriesState;
  chosenCategories: ChosenCategories;
  toggleCategory: (category: string) => void;
};

// * - PROP TYPES -
// For expected category string prop
export type CategoryProp = string;
// Define the prop type for CategoryItem
export type CategoryItemProps = {
  category: string;
};
