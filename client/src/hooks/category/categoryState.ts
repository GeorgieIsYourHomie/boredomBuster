// * - IMPORTING -
// React
import { useState } from "react";
// Types
import { SelectedCategoriesState } from "../../types/categories/SelectedCategoriesState";

// * Function for handling category states
export const useCategoryState = () => {
  // State of all categories, selected or not
  const [randomSelected, setRandomSelected] = useState(false); // Random
  const [recreationSelected, setRecreationSelected] = useState(false); // Recreation
  const [socialSelected, setSocialSelected] = useState(false); // Social
  const [educationSelected, setEducationSelected] = useState(false); // Education
  const [DIYSelected, setDIYSelected] = useState(false); // DIY
  const [cookingSelected, setCookingSelected] = useState(false); // Cooking
  const [charitySelected, setCharitySelected] = useState(false); // Charity
  const [relaxationSelected, setRelaxationSelected] = useState(false); // Relaxation
  const [busyworkSelected, setBusyworkSelected] = useState(false); // Busywork
  const [musicSelected, setMusicSelected] = useState(false); // Music

  // * All categories, selected or not with setting function
  const categoryStates: SelectedCategoriesState = {
    // Random
    randomSelected,
    setRandomSelected,
    // Recreation
    recreationSelected,
    setRecreationSelected,
    // Social
    socialSelected,
    setSocialSelected,
    // Education
    educationSelected,
    setEducationSelected,
    // DIY
    DIYSelected,
    setDIYSelected,
    // Cooking
    cookingSelected,
    setCookingSelected,
    // Charity
    charitySelected,
    setCharitySelected,
    // Relaxation
    relaxationSelected,
    setRelaxationSelected,
    // Busywork
    busyworkSelected,
    setBusyworkSelected,
    // Music
    musicSelected,
    setMusicSelected,
  };

  return { ...categoryStates };
};
