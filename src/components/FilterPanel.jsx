import React from 'react';
import '../styles/FilterPanel.css';

const FilterPanel = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      <input type="text" name="profile" placeholder="Profile" value={filters.profile} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={filters.location} onChange={handleChange} />
      <input type="number" name="duration" placeholder="Duration (months)" value={filters.duration} onChange={handleChange} />
    </div>
  );
};

export default FilterPanel;
