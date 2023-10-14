// * - IMPORTING -
// React
import React from "react";

// Expected category prop type
type CategoryProp = {
  category: string;
};

// * - CategoryItem COMPONENT -
const CategoryItem: React.FC<CategoryProp> = ({ category }) => {
  // * - RENDERING -
  return (
    <React.Fragment>
      {/* Category */}
      <p>{category}</p>
    </React.Fragment>
  );
}; // * - END CategoryItem COMPONENT -

// * Exporting CategoryItem Component
export default CategoryItem;
