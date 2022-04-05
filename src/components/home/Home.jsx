import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { Logo } from '../../images/Netflix';
import {ConnectButton, Icon, TabList, Tab, Button, Modal, useNotification  } from 'web3uikit';
import { movies } from '../../helpers/library';
import { useState, useEffect } from 'react';
import { useMoralis  } from 'react-moralis';




const Home = () => {

  const [visible, setVisible] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState();
  const [myMovies, setMyMovies] = useState();
 
  const { isAuthenticated, Moralis, account } = useMoralis();


 useEffect(() => {
    async function fetchMyList() {
      await Moralis.start({ serverUrl:'https://ytloyiwqs4ap.usemoralis.com:2053/server', appId: '0iRwPzoqum8zGC9GCbZPDP2rJvZ1tBCkYQwl8vfl',}); 
      const theList = await Moralis.Cloud.run('getMyList', {addrs: account})

      const filterdA = movies.filter(function (e) {
        return theList.indexOf(e.Name) > -1;
      })

      setMyMovies(filterdA);
    }
    fetchMyList();

  }, [account]) 

  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type:'error',
      message:'Please, Connect Your Crypto Wallet',
      title:'Not Authenticated',
      position:'topL'
    });
  };

  const handleAddNotification = () => {
    dispatch({
      type:'success ',
      message:'Movie Added to List',
      title:'Success',
      position:'topL'
    });
  };
 

  return (
    <>
    <div className='logo'>
      <Logo />
    </div>
    <div className='connect'>
    <Icon fill="#ffffff" size={24} svg="bell" />
      <ConnectButton />
    </div>
     <div className='topBanner'>
     <TabList defaultActiveKey={1} tabStyle="bar" >
       <Tab tabKey={1} tabName={'Movies'}>
         <div className='scene'>
           <img src={movies[0].Scene}  alt='' className='sceneImg'></img>
           <img src={movies[0].Logo} alt='' className='sceneLogo'></img>
           <p className='sceneDesc'>{movies[0].Description}</p>
           <div className='playButton'>
              <Button
                icon='chevronRightX2'
                onClick={function noRefCheck(){}}
                text='Play'
                theme="secondary"
                type="button"
              />

            <Button
              icon='plus'
              onClick={()=>console.log(myMovies)}
              text='Add to My List'
              theme="translucent"
              type="button"
            />
           </div>
         </div>

         <div className='title'>
              Movies
          </div>
          <div className='thumbs'>
            {movies && 
            movies.map((e) => {
                return (
                  <img
                    src={e.Thumnbnail}
                    className="thumbnail"
                    onClick={() => {
                      setSelectedFilm(e);
                      setVisible(true);
                    }
                    }
                  alt=''></img>
                )
              })
            }
          </div>
      
       </Tab>
       <Tab tabKey={2} tabName={'Series'} isDisabled={true}></Tab>
       <Tab tabKey={3} tabName={'My List'}>



         <div className='ownListContent'>
           
           {myMovies && isAuthenticated ? (
             <>
              <div className='ownThumbs'>
              {
                myMovies.map((e) => {
                return (
                  <img
                    src={e.Thumnbnail}
                    className="thumbnail"
                    onClick={() => {
                      setSelectedFilm(e);
                      setVisible(true);
                    }
                    }
                  alt=''></img>
                )
              })
            }
          </div>

             </>
             ):(
                <div className='ownThumbs'>
                  You need to Authenticate to view your own List
                </div>
             )
           }

         </div>





       </Tab>
     </TabList>
     {selectedFilm &&  (
       <div className='modal'>
         <Modal
           onCloseButtonPressed={() => setVisible(false)}
           isVisible={visible}
           hasFooter={false}
           width='1000px'
          >
            <div className='modalContent'>
               <img src={selectedFilm.Scene}  alt='' className='modalImg'></img>
              <img src={selectedFilm.Logo} alt='' className='modalLogo'></img>

              <div className='modalPlayButton'>
                {isAuthenticated? (
                  <>
                  <Link to='/player' state={selectedFilm.Movie}>
                  <Button
                    icon='chevronRightX2'
                    text='Play'
                    theme="secondary"
                    type="button"
                  />
                  </Link>
                  
                  <Button
                    icon='plus'
                    text='Add to My List'
                    theme="translucent"
                    type="button"
                    onClick={async () => {
                      await Moralis.Cloud.run('updateMyList', {
                        addrs: account,
                        newFav: selectedFilm.Name,
                      });
                      handleAddNotification();
                    }}
                  />
                  </>
                ):(
                  <>
                  <Button
                    icon='chevronRightX2'
                    onClick={handleNewNotification}
                    text='Play'
                    theme="secondary"
                    type="button"
                  />
                  
                  <Button
                    icon='plus'
                    onClick={handleNewNotification}
                    text='Add to My List'
                    theme="translucent"
                    type="button"
                  />
                  </>
                )}
                
              </div>
            </div>
            
            <div className='movieInfo'>
                <div className='description'>
                  <div className='details'>
                    <span>{selectedFilm.Year}</span>
                    <span>{selectedFilm.Duration}</span>
                  </div>
                  {selectedFilm.Description}
                </div>
                <div className='detailedInfo'>
                  Genre:
                  <span className='deets'>{selectedFilm.Genre}</span>
                  <br />
                  Actors:
                  <span className='deets'>{selectedFilm.Actors}</span>
                </div>

              </div>


         </Modal>

       </div>
     )}
    </div>
    </>
  )
}

export default Home;