import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterPanel from './components/FilterPanel';
import InternshipList from './components/InternshipList';
import './App.css';

function App() {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    profile: '',
    location: '',
    duration: ''
  });

  useEffect(() => {
    fetchInternships();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, internships]);

  const fetchInternships = async () => {
    try {
      const response = await axios.get('https://internshala.com/hiring/search');
      // Convert the object of internships to an array
      const internshipsArray = Object.values(response.data.internships_meta);
      setInternships(internshipsArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching internships:', error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...internships];

    if (filters.profile) {
      filtered = filtered.filter(internship => 
        internship.profile_name.toLowerCase().includes(filters.profile.toLowerCase())
      );
    }

    if (filters.location) {
      filtered = filtered.filter(internship =>
        internship.location_names.some(location => 
          location.toLowerCase().includes(filters.location.toLowerCase())
        )
      );
    }

    if (filters.duration) {
      filtered = filtered.filter(internship => {
        const duration = parseInt(internship.duration);
        return duration === parseInt(filters.duration);
      });
    }

    setFilteredInternships(filtered);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
    // In a real application, you would fetch more data here
    // For now, we'll just simulate the end of data
    if (page >= 3) {
      setHasMore(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Internship Search</h1>
      </header>
      <main className="app-main">
        <FilterPanel filters={filters} setFilters={setFilters} />
        <InternshipList 
          internships={filteredInternships} 
          hasMore={hasMore} 
          loadMore={loadMore}
        />
      </main>
    </div>
  );
}

export default App; 