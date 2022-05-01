import React from 'react';
import './subscription.css';
import startLogo from '../../images/Netflix_logo_PNG1.png';
import polygonLogo from '../../images/polygon-matic-logo.png'

const Subscription = () => {
  return (
    <div className='gradient-background'>
        <img className='startLogo' src = {startLogo} alt = 'netflix_logo' />
        
        <div className='gradient-background-text'>
            <h1 className='gradient-background-title'>You´re only one step away from streaming.</h1>
            <div className='gradient-background-subtitle'>
                <img className='polygonLogo' src = {polygonLogo} alt = 'polygon_logo' />
                <h2>1.00</h2>
                <p>/mo. (Polygon Mumbai Tesnet)</p>
            </div>
            <h3 className='gradient-background-wallet'>Ready to watch? Connect your wallet to subscribe or restart your membership.</h3>
        </div>
    </div>
  )
}

export default Subscription;