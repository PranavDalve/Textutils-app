import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); //State Variable
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark Mode is Enabled', "success")
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
      <Alert alert = {alert}/>
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={ <TextForm  showAlert = {showAlert} heading="Enter the Text to Analyse"/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
