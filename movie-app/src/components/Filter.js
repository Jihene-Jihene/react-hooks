// src/components/Filter.js
import React from "react";

const Filter = ({
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter,
}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
