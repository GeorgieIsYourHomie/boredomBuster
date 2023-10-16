// * - Category Button Styling -
export const getCategoryStyles = (
  category: string,
  categoryIsSelected: boolean
) => {
  let baseStyle =
    "h-10 px-5 text-black border-2 rounded-full transition-colors duration-150";

  let clickedCategoryStyle: string = "";

  switch (category) {
    case "Random":
      clickedCategoryStyle = "bg-rose-600 text-white";
      baseStyle +=
        "border-2 border-rose-600 hover:bg-rose-600 hover:text-white";
      break;
    case "Recreation":
      clickedCategoryStyle = "bg-orange-600 text-white";
      baseStyle +=
        " border-2 border-orange-600 hover:bg-orange-600 hover:text-white";
      break;
    case "Social":
      clickedCategoryStyle = "bg-green-600 text-white";
      baseStyle +=
        " border-2 border-green-600 hover:bg-green-600 hover:text-white";
      break;
    case "Education":
      clickedCategoryStyle = "bg-indigo-600 text-white";
      baseStyle +=
        " border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white";
      break;
    case "DIY":
      clickedCategoryStyle = "bg-rose-600 text-white";
      baseStyle +=
        " border-2 border-rose-600 hover:bg-rose-600 hover:text-white";
      break;
    case "Cooking":
      clickedCategoryStyle = "bg-orange-600 text-white";
      baseStyle +=
        " border-2 border-orange-600 hover:bg-orange-600 hover:text-white";
      break;
    case "Charity":
      clickedCategoryStyle = "bg-green-600 text-white";
      baseStyle +=
        " border-2 border-green-600 hover:bg-green-600 hover:text-white";
      break;
    case "Busywork":
      clickedCategoryStyle = "bg-rose-600 text-white";
      baseStyle +=
        " border-2 border-rose-600 hover:bg-rose-600 hover:text-white";
      break;
    case "Music":
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
