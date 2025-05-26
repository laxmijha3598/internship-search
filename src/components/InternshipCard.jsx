import React from 'react';
import '../styles/InternshipCard.css';

const InternshipCard = ({ internship }) => {
  return (
    <div className="internship-card">
      <div className="company-info">
        <img 
          src={`https://internshala.com/uploads/logo/${internship.company_name}`}
          alt={internship.company_name}
          className="company-logo"
        />
        <div className="company-details">
          <h3 className="profile-name">{internship.profile_name}</h3>
          <h4 className="company-name">{internship.company_name}</h4>
        </div>
      </div>

      <div className="internship-details">
        <div className="detail-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>{internship.location_names.join(', ')}</span>
        </div>
        
        <div className="detail-item">
          <i className="far fa-clock"></i>
          <span>{internship.duration}</span>
        </div>

        <div className="detail-item">
          <i className="fas fa-rupee-sign"></i>
          <span>{internship.stipend.salary}</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="posted-date">
          Posted: {internship.posted_on}
        </div>
        <div className="deadline">
          {internship.expiring_in}
        </div>
      </div>
    </div>
  );
};

export default InternshipCard; 