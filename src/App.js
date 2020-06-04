import React from 'react';
import './App.css';
import Title from './components/Title'
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="Title">
        <Title/>
    </div>
    // <div className='App'>
    //   <ReactPlayer url='./Android Application Development Tutorial - 1 - Download and Install the Java JDK.flv'
    //     controls
    //     onReady={() => console.log('onReady callback')}
    //     onStart={() => console.log('onStart callback')}
    //     onPause={() => console.log('onPause callback')}
    //     onEnded={() => console.log('onEnded callback')}
    //     onError={() => console.log('onError callback')}
    //   />
    // </div>
  )
}

export default App;
