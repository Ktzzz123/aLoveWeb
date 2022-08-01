import React, { Component } from 'react';
import '../App.css';
import Gif from '../assests/heartgif.gif'
import Dance from '../assests/dance.gif'


class SecondScreen extends Component {
    render() {
        return (
            <div className='App' style={{backgroundColor:'#ff6ccd'}}>
                <div className='loveText'>Em cũng Yêu anh lắm lắm</div>
                <img src={Gif} />
                <img src={Dance}/>
            </div>
        );
    }
}

export default SecondScreen;