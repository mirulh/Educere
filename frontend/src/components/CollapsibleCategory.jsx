import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function CollapsibleCategory({
  categories,
  category,
  onCategoryChange,
  collapsedCategory,
  toggleCategory,
}) {
  const actionCategory = (e) => {
    const selectedValue = e.target.value;
    onCategoryChange(selectedValue);
  };

  //console.log('category: ', category);

  return (
    <div className="dropdownFilter mb-3">
      <Button onClick={toggleCategory} className="filterBtn" variant="dark">
        <div>
          <i className="fa-solid fa-list me-2"></i>
          Subjects
        </div>
        <i
          className={
            collapsedCategory
              ? 'fa-solid fa-caret-down'
              : 'fa-solid fa-caret-up'
          }
        ></i>
      </Button>
      {!collapsedCategory && (
        <div className="filterOptions">
          <li>
            <label>
              <input
                className="me-2"
                type="checkbox"
                value="all"
                checked={category === 'all'}
                onChange={actionCategory}
              />
              All
            </label>
          </li>
          {categories.map((c, index) => (
            <li key={index}>
              <label>
                <input
                  className="me-2"
                  type="checkbox"
                  value={c.value}
                  checked={category === c.value}
                  onChange={actionCategory}
                />
                {c.label}
              </label>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
