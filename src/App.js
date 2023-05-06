
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    /* <div className=="App">
      <header className=="App-header">
        <img src={logo} className=="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className=="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Aniq
        </a>
      </header>
    </div> */

    <>
      {/* <navar title = "Bookify" About = "About Bookify" />*/}
      {/* <navbar/> */}
      <Navbar title="Bookify" about="About Bookify" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/*<About/> */}
      </div>
    </>
  );
}

export default App;
