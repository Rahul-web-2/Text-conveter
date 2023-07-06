import Navbar from './Components/navbar';
import TextConvert from './Components/TextConvert';
import Alert from './Components/Alert';
import About from './Components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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

          <Route exact path="/">
            <TextConvert showAlert={showAlert} heading="Enter the Text" mode={mode} />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>

        </div>
      </Router>
    </>
  );
}