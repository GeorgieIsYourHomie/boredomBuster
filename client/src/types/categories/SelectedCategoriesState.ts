// * All categories, selected or not with setting function
export type SelectedCategoriesState = {
  // Random
  randomSelected: boolean;
  setRandomSelected: (value: boolean) => void;
  // Recreation
  recreationSelected: boolean;
  setRecreationSelected: (value: boolean) => void;
  // Social
  socialSelected: boolean;
  setSocialSelected: (value: boolean) => void;
  // Education
  educationSelected: boolean;
  setEducationSelected: (value: boolean) => void;
  // DIY
  DIYSelected: boolean;
  setDIYSelected: (value: boolean) => void;
  // Cooking
  cookingSelected: boolean;
  setCookingSelected: (value: boolean) => void;
  // Charity
  charitySelected: boolean;
  setCharitySelected: (value: boolean) => void;
  // Relaxation
  relaxationSelected: boolean;
  setRelaxationSelected: (value: boolean) => void;
  // Busywork
  busyworkSelected: boolean;
  setBusyworkSelected: (value: boolean) => void;
  // Music
  musicSelected: boolean;
  setMusicSelected: (value: boolean) => void;
};
