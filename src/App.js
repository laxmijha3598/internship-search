import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterPanel from './components/FilterPanel';
import InternshipList from './components/InternshipList';
import './index.css';

const App = () => {
  const [internships, setInternships] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ profile: '', location: '', duration: '' });

  useEffect(() => {
    axios.get('https://internshala.com/hiring/search')
      .then((res) => {
        setInternships(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleFilterChange = (filterData) => {
    setFilters(filterData);
    const newFiltered = internships.filter(intern =>
      intern.profile.toLowerCase().includes(filterData.profile.toLowerCase()) &&
      intern.location.toLowerCase().includes(filterData.location.toLowerCase()) &&
      (filterData.duration ? intern.duration >= filterData.duration : true)
    );
    setFiltered(newFiltered);
  };

  return (
    <div className="container">
      <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
      <InternshipList internships={filtered} />
    </div>
  );
};

export default App;
