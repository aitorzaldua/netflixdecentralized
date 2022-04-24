import React from 'react';
import './start.css';
import bg from '../../images/netflixStart.jpeg';

const Start = () => {
  return (
    <>
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className='containerGradient'></div>
        <div className='frontText'>Unlimited movies, TV shows, and more.</div>
    </div>

    </>
  )
}

export default Start;