import { CategoryProp } from "../../types/categories/CategoryTypes";

// * - Category Button Styling -
export const setCategoryButtonStyle = (
  category: CategoryProp,
  categoryIsSelected: boolean
) => {
  // Declaring base style
  let baseStyle =
    "h-10 px-5 text-black border-2 rounded-full transition-colors duration-150";
  // Declaring clicked category style
  let clickedCategoryStyle: string = "";

  // Declaring category style based on category
  switch (category) {
    case "Random":
      // Magenta
      clickedCategoryStyle = "bg-rose-600 text-white";
      baseStyle +=
        "border-2 border-rose-600 hover:bg-rose-600 hover:text-white";
      break;
    case "Recreation":
      // Orange
      clickedCategoryStyle = "bg-orange-600 text-white";
      baseStyle +=
        " border-2 border-orange-600 hover:bg-orange-600 hover:text-white";
      break;
    case "Social":
      // Green
      clickedCategoryStyle = "bg-green-600 text-white";
      baseStyle +=
        " border-2 border-green-600 hover:bg-green-600 hover:text-white";
      break;
    case "Education":
      // Indigo
      clickedCategoryStyle = "bg-indigo-600 text-white";
      baseStyle +=
        " border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white";
      break;
    case "DIY":
      // Magenta
      clickedCategoryStyle = "bg-rose-600 text-white";
      baseStyle +=
        " border-2 border-rose-600 hover:bg-rose-600 hover:text-white";
      break;
    case "Cooking":
      // Orange
      clickedCategoryStyle = "bg-orange-600 text-white";
      baseStyle +=
        " border-2 border-orange-600 hover:bg-orange-600 hover:text-white";
      break;
    case "Charity":
      // Green
      clickedCategoryStyle = "bg-green-600 text-white";
      baseStyle +=
        " border-2 border-green-600 hover:bg-green-600 hover:text-white";
      break;
    case "Relaxation":
      // Indigo
      clickedCategoryStyle = "bg-indigo-600 text-white";
      baseStyle +=
        " border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white";
      break;
    case "Busywork":
      // Magenta
      clickedCategoryStyle = "bg-rose-600 text-white";
      baseStyle +=
        " border-2 border-rose-600 hover:bg-rose-600 hover:text-white";
      break;
    case "Music":
      // Orange
      clickedCategoryStyle = "bg-orange-600 text-white";
      baseStyle +=
        " border-2 border-orange-600 hover:bg-orange-600 hover:text-white";
      break;
    default:
      clickedCategoryStyle = "bg-indigo-600 text-white";
      baseStyle += "border-2 border-indigo-600 hover:border-indigo-800";
      break;
  }

  if (categoryIsSelected) {
    baseStyle += ` ${clickedCategoryStyle}`;
  }

  return baseStyle;
};
