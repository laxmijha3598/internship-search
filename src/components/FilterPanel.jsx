import React from 'react';
import '../styles/FilterPanel.css';

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="filter-panel">
      <h2>Filters</h2>
      <div className="filter-section">
        <div className="filter-group">
          <label htmlFor="profile">Profile</label>
          <input
            type="text"
            id="profile"
            name="profile"
            value={filters.profile}
            onChange={handleFilterChange}
            placeholder="Search by profile"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Search by location"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="duration">Duration (months)</label>
          <select
            id="duration"
            name="duration"
            value={filters.duration}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="4">4 Months</option>
            <option value="6">6 Months</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 