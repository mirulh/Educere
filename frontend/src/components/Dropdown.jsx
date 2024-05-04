import React from 'react';

export default function Dropdown({ prop }) {
  console.log(categories);

  const { categories } = prop;

  return (
    <div>
      {categories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </div>
  );
}
