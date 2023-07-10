import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="App">

    <Router>
    {!user ?(
      <LoginScreen />
    ): (
      <Routes>
      
      <Route path="/" element={<Homescreen />} />
    
    </Routes>
    )}
    
    </Router>
    </div>
  );
}

export default App;
