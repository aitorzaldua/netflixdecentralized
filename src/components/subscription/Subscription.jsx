import React from 'react';
import './subscription.css';
import startLogo from '../../images/Netflix_logo_PNG1.png';
import Start from '../start/Start';
import { MoralisProvider, useMoralis, useWeb3Transfer  } from 'react-moralis';
import { Link } from 'react-router-dom';


import {ConnectButton, Icon, Card, Button, CryptoLogos, Illustration, NotificationProvider } from 'web3uikit';

const Subscription = () => {


   
    const { isAuthenticated, Moralis, chainId} = useMoralis();

    console.log ("chainid es", chainId, NotificationProvider);

    //Rinkeby
    const { fetch, error, isFetching } = useWeb3Transfer({
        type: "native",
        amount: Moralis.Units.ETH(0.01),
        receiver: "0xb4Fa8fBd2B88cb0229F2ABD15F32CA99cEE1D472",
    });

    const rinkebyNetwork = async () => {
        await Moralis.enableWeb3();
        await Moralis.transfer({native: "native", amount: Moralis.Units.ETH("0.0004"), receiver: "0xb4Fa8fBd2B88cb0229F2ABD15F32CA99cEE1D472"})
      };

      const mumbayNetwork = async () => {
        await Moralis.enableWeb3();
        await Moralis.transfer({native: "native", amount: Moralis.Units.ETH("1.00"), receiver: "0xb4Fa8fBd2B88cb0229F2ABD15F32CA99cEE1D472"})
      };


  return (
      <>
      {
        isAuthenticated
        ?
        <div className='gradient-background'>
        <img className='startLogo' src = {startLogo} alt = 'netflix_logo' />
        <ConnectButton />

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
                    <span style={{color: '#000000', fontWeight: 800}}>Payment:    0,0004</span>
                    <Icon fill="#000000" size={14} svg="eth"/>
                    <span>/mo.</span>
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Every Trailer with the subscription.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Decentralized video storage. 
                </div>
                <div style={{ color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    See anywhere, anytime.
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
                <Button isFullWidth text="Subscribe" theme="primary" onClick={
                    chainId === "0x4" ?
                    () => rinkebyNetwork()
                    :console.log ("chain Id =", chainId)
                }/>
            </Card>

            <Card onClick={null} setIsSelected={null}>
                <CryptoLogos chain="polygon" /* onClick={function noRefCheck(){}} */ size="48px"></CryptoLogos>
                <div>
                    <p>Polygon Mumbai Network.</p>
                </div>
                <div style={{alignItems: 'center',display: 'flex', gap: '5px'}}>
                    <span style={{color: '#000000', fontWeight: 800}}>Payment:    1.00</span>
                    <Icon fill="#000000" size={14} svg="matic"/>
                    <span>/mo.</span>
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Every Trailer with the subscription.
                </div>
                <div style={{color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    Decentralized video storage. 
                </div>
                <div style={{ color: '#68738D', display: 'flex', fontSize: '12px'}}>
                    <Icon fill="green" svg="checkmark"/>
                    See anywhere, anytime.
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
                <Button isFullWidth text="Subscribe" theme="primary" onClick={ 
                     chainId === "0x13881" ?
                     () => mumbayNetwork()
                     :console.log ("chain Id =", chainId)
                 }/>
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
        :
        <Link to='/'>{<Start />}</Link>
    }
    </>

)
}

export default Subscription;