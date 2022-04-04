import React from 'react';
import { Link } from 'react-router-dom';
import './player.css';
import {TabList, Tab  } from 'web3uikit';

const Player = () => {
  return (
    <>
    <div className='container'>
        <Link to='/' className='link'>Home Page</Link>
    </div>
    <div className='topBanner'>
    <TabList defaultActiveKey={1} tabStyle="bar">
      <Tab tabKey={1} tabName={'Movies'}></Tab>
      <Tab tabKey={2} tabName={'Series'} isDisabled={true}></Tab>
      <Tab tabKey={3} tabName={'MyList'}></Tab>
    </TabList>
   </div>
    </>
    
  )
}

export default Player;