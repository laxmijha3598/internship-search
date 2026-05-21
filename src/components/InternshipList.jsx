import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import InternshipCard from './InternshipCard';
import '../styles/InternshipList.css';

const InternshipList = ({ internships, hasMore, loadMore }) => {
  return (
    <div className="internship-list">
      <InfiniteScroll
        dataLength={internships.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>No more internships to load.</b>
          </p>
        }
      >
        {internships.map((internship) => (
          <InternshipCard 
            key={internship.id} 
            internship={internship} 
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InternshipList; 
