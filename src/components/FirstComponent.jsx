import React from 'react';
import { useEffect, useState } from 'react';
import ReactSound from 'react-sound';
import '../App.css';
import GIF from '../assests/giphy.gif'



export default function FirstComponent(props) {
    const [text, setText]= useState('hi anh yêu')
    const [toggle, setToggle] = useState(false)
    const [answer, setAnswer] = useState()
    const [context, setContext]=useState('Có!!')
    const [num,setNum] = useState()
    const [num2,setNum2] = useState()
    const [isFalse,setIsFalse] = useState(false);
    const [isBtn, setIsBtn] = useState(false)

    //useEffect
    useEffect(()=>{
      if (props.click===1)
      setText('Anh có yêu em hong?')
      if (props.click === 2)
      setToggle(true)
     
      if(answer ===1){
  
        setContext('Đương nhiên là không rồi nha!');
        setInterval(()=>{setIsBtn(true)},5000);
        
      }
      if(answer === 2)
      setContext('🥺🥺🥺🥺🥺🥺🥺🥺')
      switch(props.click){
        case 20:
            alert('Bấm cc gì?')
            break;
        case 30:
            alert('Đâu phải muốn là bấm được tui?')
            break;
        case 40:
            alert('Thôi thấy tội quá, tha đó');
            setIsFalse(true)
            break;
        default:
            break;
        }
    },[props.click,answer])
    
 
    const setRandom=()=>{
        setNum(Math.random()*300)

        setNum2(Math.random()*300)

        console.log(props.click)
        props.setClick(props.click+1)

    }
    
    const myStyle ={
        marginTop:num,
        marginLeft:num2,
    }
    const  my2Style={
        marginLeft:50
    }
    return(
      <div  onClick={()=>props.setClick(props.click+1)} >
        
        <h1>{text}</h1>
        <img src={GIF} className = 'Gif' onClick={()=>props.setClick(props.click+1)}/>
        <div>
        {toggle?
            <button className='Btn' onClick={(()=>setAnswer(2))}>Khồng</button>:''
        }
        <>
        
        </>

        {toggle?
        <>

        <button className='Btn' onMouseOver={()=>setRandom()} 
        
        // style={isFalse?my2Style:myStyle}    
        onClick={()=>{setAnswer(1)}}
        
        
        >{context}</button>

        
        <br/>
       
        
        </>
        
        :''}
        
        </div>
        {isBtn?
        <a className='BtnYes' href='/loveVan' >Có!!</a>:''}
       
      </div>
  
    
    )
  
}
