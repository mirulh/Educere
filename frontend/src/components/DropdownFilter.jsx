import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DropdownFilter = ({ categories, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleApplyFilter = () => {
    setIsOpen(false);
    onChange(selectedOptions);
  };

  return (
    <div className="dropdownFilter">
      <Button className="btnFilter" onClick={toggleDropdown}>
        <i className="fa-solid fa-star"></i>
        Categories
        <i className="fa-solid fa-caret-down"></i>
      </Button>
      {isOpen && (
        <div className="filterBoxActive">
          <ul className="subFilter list-unstyled">
            Main Categories
            {categories.map((option, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionToggle(option)}
                >
                  {option}
                </input>
              </li>
            ))}
          </ul>
          <button onClick={handleApplyFilter}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
