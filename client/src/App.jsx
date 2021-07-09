import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar.jsx';
import GameCard from './components/GameCard.jsx';
import PeerPanel from './components/PeerPanel.jsx';
import { io } from "socket.io-client";
import Peer from 'peerjs';
import axios from 'axios';

const socket = io();
const myPeer = new Peer(undefined, {
  host: '/', port: '3001'
});

function App() {
  const [playerCount, setPlayerCount] = useState(1);
  // const [adventureId, setAdventureId] = useState(1);
  // const [adventure, setAdventure] = useState();
  // const [] = useState();

  useEffect(() => {
    const hostVideo = document.createElement('video');
    hostVideo.muted= true;
    hostVideo.id = 'host-video'
    hostVideo.classList.add('callerVideo')

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false, // set to false for demo to avoid feedback
    })
    .then(stream => {
      addVideoStream(hostVideo, stream);

      myPeer.on('call', call => {
        call.answer(stream)
        let video = document.createElement('video');
        video.classList.add('guest-video'); // is this necessary?

        call.on('stream', callerStream =>{
          addVideoStream(video, callerStream);
        });
      });

      socket.on('user-connected', userId => {
        connectToNewUser(userId, stream);
      });
    });

    socket.on('user-disconnected', userId => {
      if (userId) {
        userId.close();
      }
    });
  },[]);

  const addVideoStream = (video, stream) => {
    console.log('adding video stream');
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',() => {
      video.play();
    });
    document.getElementById('video-grid').append(video)
  }

  const connectToNewUser = (userId, stream) => {
    console.log('a new user is attempting a connection');
    const call = myPeer.call(userId, stream);
    let guestVideo = document.createElement('video');
    guestVideo.muted = true;
    guestVideo.id = 'guest-video';
    call.on('stream', userVideoStream =>{
      console.log('receiving video stream from new user');
      addVideoStream(guestVideo, userVideoStream)
    });

    call.on('close', ()=> {
      guestVideo.remove();
      // let obj = {};
      // obj[userId]= undefined;
      // setState(obj);
    });

    // let obj = {}
    // obj[userId] = call;
    // setState(obj);
  }

  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
      <Container >
          <Row>
            <Col>
              <GameCard/>
            </Col>
            <Col >
              {/* <div id='video-grid'></div> */}
              <PeerPanel playerCount={playerCount}/>
            </Col>
          </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
