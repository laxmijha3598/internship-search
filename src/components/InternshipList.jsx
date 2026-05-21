import React from 'react';
<<<<<<< HEAD
import InternshipCard from './InternshipCard';
import '../styles/InternshipList.css';

const InternshipList = ({ internships }) => {
  return (
    <div className="internship-list">
      {internships.map((intern, index) => (
        <InternshipCard key={index} internship={intern} />
      ))}
=======
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
>>>>>>> f9197274a0c5d8dea99099048fbf4b8ea41b0c6c
    </div>
  );
};

<<<<<<< HEAD
export default InternshipList;
=======
export default InternshipList; 
>>>>>>> f9197274a0c5d8dea99099048fbf4b8ea41b0c6c
