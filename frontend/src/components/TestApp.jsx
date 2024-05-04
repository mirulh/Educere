import React, { useState } from 'react';
import DropdownFilter from './DropdownFilter';

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (selectedOptions) => {
    setSelectedFilters(selectedOptions);
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="App">
      <DropdownFilter options={options} onChange={handleFilterChange} />
      <div>Selected Filters: {selectedFilters.join(', ')}</div>
    </div>
  );
};

export default App;
