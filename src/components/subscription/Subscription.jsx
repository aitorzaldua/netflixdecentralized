import React from 'react';
import './subscription.css';
import startLogo from '../../images/Netflix_logo_PNG1.png';

import {Icon, Card, Button, CryptoLogos, Avatar, Illustration } from 'web3uikit';

const Subscription = () => {
  return (
    <div className='gradient-background'>
        <img className='startLogo' src = {startLogo} alt = 'netflix_logo' />

        <div className='gradient-background-text'>
            <h1 className='gradient-background-text-title'>You´re only one step away from streaming.</h1>
            <h3 className='gradient-background-text-subtitle'>This is a Test App. Only official trailers are shown, never licensed material. The payment is always with test cryptocurrencies.</h3>
            
    
        </div>

        <div className='cards'>
            <Card onClick={null} setIsSelected={null}>
                <CryptoLogos chain="ethereum" /* onClick={function noRefCheck(){}} */ size="48px"></CryptoLogos>
                <div>
                    <p>Ethereum Rinkeby Network.</p>
                </div>
                <div style={{alignItems: 'center',display: 'flex', gap: '5px'}}>
                    <span style={{color: '#000000', fontWeight: 800}}>Payment:    0,0002</span>
                    <Icon fill="#000000" size={14} svg="eth"/>
                    <span>/mo.</span>
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Every Trailer from the beggining.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Always excelent quality.
                </div>
                <div style={{ color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    All devices.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Subscription through NFT.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Sell or give away whenever you want.
                </div>
                <br />
                <Button isFullWidth text="Subscribe" theme="primary"/>
            </Card>

            <Card onClick={null} setIsSelected={null}>
                <CryptoLogos chain="polygon" /* onClick={function noRefCheck(){}} */ size="48px"></CryptoLogos>
                <div>
                    <p>Polygon Mumbai Network.</p>
                </div>
                <div style={{alignItems: 'center',display: 'flex', gap: '5px'}}>
                    <span style={{color: '#000000', fontWeight: 800}}>Payment:    0.3</span>
                    <Icon fill="#000000" size={14} svg="matic"/>
                    <span>/mo.</span>
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Every Trailer from the beggining.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Always excelent quality.
                </div>
                <div style={{ color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    All devices.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Subscription through NFT.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Sell or give away whenever you want.
                </div>
                <br />
                <Button isFullWidth text="Subscribe" theme="primary" onClick={function noRefCheck(){}}/>
            </Card>

            <Card onClick={null} setIsSelected={null}>
            <Illustration height="60px" logo="confirmed" width="60px"/>
                <div>
                    <p>Just Take a Look.</p>
                </div>
                <div style={{alignItems: 'center',display: 'flex', gap: '5px'}}>
                    <span style={{color: '#000000', fontWeight: 800}}>Payment:    FREE</span>
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    It is not possible to watch the trailers.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Check out the App.
                </div>
                <div style={{ color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    All devices.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    No NFT.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Visit the subscription tab.
                </div>
                <br />
                <Button isFullWidth text="Subscribe" theme="primary" onClick={function noRefCheck(){}}/>
            </Card>

            </div>
    </div>

)
}

export default Subscription;