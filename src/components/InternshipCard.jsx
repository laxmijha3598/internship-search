import React from 'react';
import '../styles/InternshipCard.css';

const InternshipCard = ({ internship }) => {
  return (
    <div className="internship-card">
      <h4>{internship.profile}</h4>
      <p><strong>Company:</strong> {internship.title}</p>
      <p><strong>Location:</strong> {internship.location}</p>
      <p><strong>Duration:</strong> {internship.duration} months</p>
    </div>
  );
};

export default InternshipCard;
