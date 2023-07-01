import React from "react";
import "./SearchInput.css";

const SearchInput = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <input
      className="input-search"
      type="text"
      placeholder="Search by card name"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
