import React from "react";

//Recieves the sorting functions as props
const SortControls = ({ onSortAlphabets, onSortDomain }) => {
  return (
    <div className="controls-section">
      <button onclick={onSortAlphabets}>Sort Alphabetically (A-Z)</button>
      <button onClick={onSortDomain}>Sort by Domain</button>
    </div>
  );
};

export default SortControls;
