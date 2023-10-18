// * - IMPORTING -
import { useCategoryState } from "../../hooks/category/categoryState";
import { CategoryProp } from "../../types/categories/CategoryProp";

// * Toggling category selected state
export const useSetCategorySelectedState: (
  event: React.MouseEvent<HTMLElement>,
  category: CategoryProp
) => void = (event: React.MouseEvent<HTMLElement>, category: CategoryProp) => {
  // Prevent default event
  event.preventDefault();

  // Declaring category states
  const selectedCategories = useCategoryState();

  // Toggling category selected state
  switch (category) {
    case "Random":
      // Toggle true/false random
      selectedCategories.setRandomSelected(!selectedCategories.randomSelected);
      break;
    case "Recreation":
      // Toggle true/false recreation
      selectedCategories.setRecreationSelected(
        !selectedCategories.recreationSelected
      );
      break;
    case "Social":
      // Toggle true/false social
      selectedCategories.setSocialSelected(!selectedCategories.socialSelected);
      break;
    case "Education":
      // Toggle true/false education
      selectedCategories.setEducationSelected(
        !selectedCategories.educationSelected
      );
      break;
    case "DIY":
      // Toggle true/false DIY
      selectedCategories.setDIYSelected(!selectedCategories.DIYSelected);
      break;
    case "Cooking":
      // Toggle true/false cooking
      selectedCategories.setCookingSelected(
        !selectedCategories.cookingSelected
      );
      break;
    case "Charity":
      // Toggle true/false charity
      selectedCategories.setCharitySelected(
        !selectedCategories.charitySelected
      );
      break;
    case "Relaxation":
      // Toggle true/false relaxation
      selectedCategories.setRelaxationSelected(
        !selectedCategories.relaxationSelected
      );
      break;
    case "Busywork":
      // Toggle true/false relaxation
      selectedCategories.setBusyworkSelected(
        !selectedCategories.busyworkSelected
      );
      break;
    case "Music":
      // Toggle true/false relaxation
      selectedCategories.setMusicSelected(!selectedCategories.musicSelected);
      break;

    default:
      break;
  }
};
