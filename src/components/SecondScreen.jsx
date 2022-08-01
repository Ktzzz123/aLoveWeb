import React, { Component, useEffect } from 'react';
import '../App.css';
import Gif from '../assests/heartgif.gif'
import Dance from '../assests/dance.gif'
import ReactSound from 'react-sound';
import Music from '../assests/music.mp3'

const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

    

const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}
const setBackgroundColor = () => {
    const randomColor = getRandomColor();
    document.getElementById("background").style.backgroundColor = randomColor;
    // document.getElementById("background").style.color = randomColor;

}
setInterval(() => {
    setBackgroundColor();
  }, 300);
class SecondScreen extends Component {
 
    render() {
        return (
            <div className='App' id="background" style={{backgroundColor:'#ff6ccd'}}>
                {document.title = 'Đương nhiên là yêu rồi!!! 💗'}
                <div className='loveText'>Em cũng Yêu anh lắm lắm</div>
                <img src={Gif} />
                <img src={Dance}/>
                <ReactSound url={Music} 
                playStatus={ReactSound.status.PLAYING}
                loop={true}
                
        />
            </div>
            
        );
    }
}

export default SecondScreen;