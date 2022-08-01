import { useEffect, useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondScreen from "./components/SecondScreen";
import {Route, Routes} from 'react-router-dom'

function App() {
  const [click, setClick] = useState(0)
  const [toggle, setToggle] = useState(false);


return(
  <div className="App">
    <Routes>
      <Route path="/" element={<FirstComponent click = {click} setClick={setClick} setToggle = {setToggle} />}/>
      <Route path="/loveVan" element={<SecondScreen/>}/>
    </Routes>
    
 
  </div>
)

 
}

export default App;
