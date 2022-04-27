import React from 'react';
import './start.css';
import bg from '../../images/netflixStart.jpeg';
import startLogo from '../../images/Netflix_logo_PNG1.png';

import {ConnectButton } from 'web3uikit';
import { useMoralis  } from 'react-moralis';

const Start = () => {
  return (
    <>
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className='containerGradient'>
          <div className='start-navBar'>
            <img className='startLogo' src = {startLogo} alt = 'netflix_logo' />
            <ConnectButton />
          </div>
          <div className='our-story-card-text'>
            <h1 className='our-story-card-title'>Unlimited movies, TV shows, and more.</h1>
            <h2 className='our-story-card-subtitle'>Watch anywhere. Cancel anytime. </h2>
            <h3 className='wallet-title'>Ready to watch? Connect your wallet to subscribe or restart your membership.</h3>
          </div>
        </div>
    </div>

    </>
  )
}

export default Start;