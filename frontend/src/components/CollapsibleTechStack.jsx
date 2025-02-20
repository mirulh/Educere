import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function CollapsibleTechStack({
  techStacks,
  techStack,
  onTechStackChange,
  collapsedTechStack,
  toggleTechStack,
}) {
  const actionTechStack = (e) => {
    const selectedValue = e.target.value;
    onTechStackChange(selectedValue);
  };

  //console.log('techStack: ', techStack);

  return (
    <div className="dropdownFilter mb-3">
      <Button onClick={toggleTechStack} className="filterBtn" variant="dark">
        <div>
          <i className="fa-solid fa-cubes-stacked me-2"></i>
          Technologies
        </div>
        <i
          className={
            collapsedTechStack
              ? 'fa-solid fa-caret-down'
              : 'fa-solid fa-caret-up'
          }
        ></i>
      </Button>
      {!collapsedTechStack && (
        <div className="filterOptions">
          <li>
            <label>
              <input
                className="me-2"
                type="checkbox"
                value="all"
                checked={techStack === 'all'}
                onChange={actionTechStack}
              />
              All
            </label>
          </li>
          {techStacks.map((ts, index) => (
            <li key={index}>
              <label>
                <input
                  className="me-2"
                  type="checkbox"
                  value={ts.value}
                  checked={techStack === ts.value}
                  onChange={actionTechStack}
                />
                {ts.label}
              </label>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
