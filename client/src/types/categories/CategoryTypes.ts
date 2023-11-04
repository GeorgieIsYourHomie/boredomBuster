// * - IMPORTING -
// Types
import { Activity } from "../../../../shared/models/activity";

// * Selected categories state
export type SelectedCategoriesState = {
  [key: string]: boolean;
};

// * Array of all categories
export type AllCategories = string[];

// * -  CATEGORIES STATE HOOK TYPES -
// Categories state hook chosen categories
export type ChosenCategories = string[] | undefined | string;
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

// * - DISPATCH ACTION TYPE -
// Type for chosenCategory action and payload
export interface DispatchedActivityType {
  type: string;
  payload?: ChosenCategories | string | Activity;
}
