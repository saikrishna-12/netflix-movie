import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/counter/userSlice';
import { selectuser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      }
      else{
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="App">

    <Router>
    {!user ?(
      <LoginScreen />
    ): (
      <Routes>
      
      <Route path="/" element={<Homescreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
    </Routes>
    )}
    
    </Router>
    </div>
  );
}

export default App;
