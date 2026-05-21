import React from 'react';
import '../styles/FilterPanel.css';

<<<<<<< HEAD
const FilterPanel = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange({
      ...filters,
      [e.target.name]: e.target.value
    });
=======
const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
>>>>>>> f9197274a0c5d8dea99099048fbf4b8ea41b0c6c
  };

  return (
    <div className="filter-panel">
<<<<<<< HEAD
      <h3>Filters</h3>
      <input type="text" name="profile" placeholder="Profile" value={filters.profile} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={filters.location} onChange={handleChange} />
      <input type="number" name="duration" placeholder="Duration (months)" value={filters.duration} onChange={handleChange} />
=======
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
>>>>>>> f9197274a0c5d8dea99099048fbf4b8ea41b0c6c
    </div>
  );
};

<<<<<<< HEAD
export default FilterPanel;
=======
export default FilterPanel; 
>>>>>>> f9197274a0c5d8dea99099048fbf4b8ea41b0c6c
