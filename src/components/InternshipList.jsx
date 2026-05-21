import React from 'react';
import InternshipCard from './InternshipCard';
import '../styles/InternshipList.css';

const InternshipList = ({ internships }) => {
  return (
    <div className="internship-list">
      {internships.map((intern, index) => (
        <InternshipCard key={index} internship={intern} />
      ))}
    </div>
  );
};

export default InternshipList;
