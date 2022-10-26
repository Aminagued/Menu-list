import React from "react";

const Categories = ({ filterItem, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="btn-filter"
            onClick={() => filterItem(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
