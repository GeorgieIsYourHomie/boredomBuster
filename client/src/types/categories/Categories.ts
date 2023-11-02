// * Selected categories state
export type SelectedCategoriesState = {
  [key: string]: boolean;
};

// * Array of all categories
export type AllCategories = string[];

// * Categories State Hook Type
export type CategoriesStateHookProps = {
  selectedCategories: SelectedCategoriesState;
  chosenCategories: string[];
  toggleCategory: (category: string) => void;
};

export default {}