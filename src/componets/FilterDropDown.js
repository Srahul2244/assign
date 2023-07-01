import PropTypes from "prop-types";
import React from "react";
import "./FilterDropDown.css";

const FilterDropdown = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <select className="filter-dropdown" value={value} onChange={handleChange}>
      <option value="All">All</option>
      <option value="burner">Burner</option>
      <option value="subscription">Subscription</option>
    </select>
  );
};


export default FilterDropdown;
