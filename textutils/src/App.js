
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {
   const [mode, setMode] = useState('light')
   const [alert, setAlert] = useState(null)

   const showAlert=(message, type)=>{
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);

   }
   

   const toggleMode =() =>{
     if (mode=== 'light')
     {
       setMode('dark');
       document.body.style.backgroundColor='#042743';
       showAlert("Dark Mode Has been enabled","success");
       document.title = 'Textutils - Dark mode';
     }
     else
     {
       setMode ('light');
       document.body.style.backgroundColor='white';
       showAlert("Light Mode Has been enabled","success")
       document.title = 'Textutils - Light mode';

     }
   }


   return (
     <>
  {/* <Router> */}
  <Navbar title="TEXTUTILS" aboutText="ABOUT US" mode={mode} toggleMode={toggleMode}/>
   
   <Alert alert={alert}/>
   <div className="container my-3" >
  

  </div> 
  


  {/* <Switch>
          <Route path="/about"> */}
          {/* <About/> */}
          {/* </Route>
          <Route path="/"> */}
          <TextForm showAlert={showAlert}heading="Enter the Text to analyze" mode={mode}/>
          {/* </Route>
        </Switch>
  </Router> */}

  </>
  );
}

export default App;
