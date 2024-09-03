import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar';
import TextConvert from './Components/TextConvert';
import Alert from './Components/Alert';
import About from './Components/About';
import Form from './Components/form';
//import './App.css';

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert(" : Dark mode enable", "success");
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode('light');
      showAlert(" : Light mode enable", "success");
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
<Navbar title="Text Converter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
            
            
            
<Routes>

          <Route exact path="/" element={<TextConvert showAlert={showAlert} heading="Enter the Text" mode={mode} />}>
          </Route>
          <Route exact path="/form" element={<Form />} >
          </Route>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>

</Routes>
        </div>
       
      </Router>
    </>
  );
}