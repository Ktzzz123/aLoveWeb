import React from 'react';
import { useEffect, useState } from 'react';
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

    //useEffect
    useEffect(()=>{
      if (props.click===1)
      setText('Anh có yêu em hong?')
      if (props.click === 2)
      setToggle(true)
     
      if(answer ===1){
  
        setContext('NOOOOOOOO');
        setIsFalse(true)
        
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
            alert('Thôi thấy tội quá, tha đó')
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
            <button onClick={(()=>setAnswer(2))}>Khồng</button>:''
        }
        <>
        
        </>

        {toggle?
        <>

        <button className='YesBtn' onMouseOver={()=>setRandom()} 
        
        style={isFalse?myStyle:my2Style} 
        onClick={()=>{setAnswer(1)}}
        
        
        >{context}</button>

        
        <br/>
       
        <h1>Text h1</h1>
        </>
        
        :''}
        
        </div>
        {isFalse?
        <a href='/loveVan'>Có!!</a>:''}
  
      </div>
  
    
    )
  
}
