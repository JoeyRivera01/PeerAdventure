import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar.jsx';
import GameCard from './components/GameCard.jsx';
// import PeerPanel from './components/PeerPanel.jsx';
import { io } from "socket.io-client";
import Peer from 'peerjs';

const socket = io();
const myPeer = new Peer(undefined, {
  host: '/', port: '3001'
});
const peers = {};

function App() {
  const [playerCount, setPlayerCount] = useState(1);

  useEffect(() => {
    const hostVideo = document.createElement('video');
    hostVideo.muted= true;
    hostVideo.id = 'host-video';
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false, // set to false for demo to avoid feedback
    })
    .then(stream => {
      addVideoStream(hostVideo, stream);

      socket.on('user-connected', userId => {
        connectToNewUser(userId, stream);
      });

      myPeer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
          addVideoStream(video, userVideoStream);
        });
      });
    });

    socket.on('user-disconnected', userId => {
      if (peers[userId]) {
        console.log('closing', peers[userId]);
        peers[userId].close();
      }
    });

    myPeer.on('open', userId => {
      socket.emit('join-room', ROOM_ID, userId, socket.id)
    });

  },[]);

  const addVideoStream = (video, stream) => {
    console.log('adding video stream');
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
    document.getElementById('video-grid').append(video)
  }

  const connectToNewUser = (userId, stream) => {
    if (playerCount < 4) {
      console.log('a new user is attempting a connection');
      let call = myPeer.call(userId, stream);
      let video = document.createElement('video');
      video.muted = true; // set to true just for demo to avoid feedback.
      video.id = 'guest-video';

      call.on('stream', userVideoStream =>{
        console.log('receiving video stream from new user');
        addVideoStream(video, userVideoStream);
      });

      call.on('close', () => {
        video.remove();
        peers[userId] = null;
      });

      peers[userId] = call;
      setPlayerCount(prevCount => prevCount + 1)
    } else {
      console.log('The room is full!');
    }
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
            <Col>
            <Card bg="dark" variant="dark" style={{ width: '35vw', height: '80vh' }}>
              <Card.Body>
                <Card.Title>Players</Card.Title>
                <div id='video-grid'></div>
              </Card.Body>
            </Card>
            </Col>
          </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
