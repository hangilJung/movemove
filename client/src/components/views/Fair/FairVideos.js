import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
function FairVideos() {
  const customStyles = {
    content: {
      top: 730,
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        controls
        muted
        style={{ borderRadius: 10, padding: '5px 5px 1px 5px' }}
      >
        <source src="videos/info.mov" type="video/mp4" />
      </video>
     
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ width: 80, position: 'relative', top: -8 }}
          alt="profile"
          src="img/city.png"
        />
        <img
          style={{ width: 150, position: 'relative', top: -10 }}
          alt="profile"
          src="img/jeo.png"
        />
        <img
          style={{ width: 80, position: 'relative', top: -10 }}
          alt="profile"
          src="img/ium.png"
        />
        <img
          style={{ width: 65, position: 'relative', top: -8 }}
          alt="profile"
          src="img/sooin.png"
        />

        <img
          style={{ width: 80, position: 'relative', top: -10 }}
          alt="profile"
          src="img/beyond.png"
        />
      </div>
    </div>
  );
}

export default FairVideos;
