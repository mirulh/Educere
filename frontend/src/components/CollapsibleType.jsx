import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function CollapsibleType({
  types,
  type,
  onTypeChange,
  collapsedType,
  toggleType,
}) {
  const actionType = (e) => {
    const selectedValue = e.target.value;
    onTypeChange(selectedValue);
  };

  console.log('type: ', type);

  return (
    <div className="dropdownFilter mb-3">
      <Button onClick={toggleType} className="filterBtn" variant="dark">
        <div>
          <i className="fa-solid fa-layer-group me-2"></i>
          Types
        </div>
        <i
          className={
            collapsedType ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up'
          }
        ></i>
      </Button>
      {!collapsedType && (
        <div className="filterOptions">
          <li>
            <label>
              <input
                className="me-2"
                type="checkbox"
                value="all"
                checked={type === 'all'}
                onChange={actionType}
              />
              All
            </label>
          </li>
          {types.map((t, index) => (
            <li key={index}>
              <label>
                <input
                  className="me-2"
                  type="checkbox"
                  value={t.value}
                  checked={type === t.value}
                  onChange={actionType}
                />
                {t.label}
              </label>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
