
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import About from './componants/About';
import Navbar1 from './componants/Navbar1';
import Textarea from './componants/Textarea';
import Alertarea from './componants/Alertarea';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [mode,setMode] = useState('light');
const [alert,setAlert] = useState(null)

const showAlert = (message,type) =>
{
 setAlert({
  msg : message,
  type: type 
 })
 setTimeout(() => {
  setAlert(null)
 },1500);
}

const togglemode = () =>
{
  if(mode === 'light')
  {
    setMode('dark');
    document.body.style.backgroundColor = 'black'
    showAlert("Dark Mode Enabled" , "light")
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode Enabled" , "dark")
  }
}

const togglemode1 = () =>
{
  if(mode === 'light')
  {
    setMode('primary');
    document.body.style.backgroundColor = '#bde0fe'
    showAlert("Dark Mode Enabled" , "primary")
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode Enabled" , "dark")
  }
}


  return (
  <>

      <Navbar1 title='TextUtils' aboutText='About' mode={mode} togglemode={togglemode} togglemode1={togglemode1}/>
      <div className='alertarea'><Alertarea alert={alert}/></div>
    <Routes>
        <Route path="/" element={ 
        <Textarea hed="Enter Text For Analyze"  mode={mode} showAlert={showAlert}/> 
          } /> 
        <Route path="about" element={ <About/> } />
      </Routes>
  </>
  );
}

export default App;
