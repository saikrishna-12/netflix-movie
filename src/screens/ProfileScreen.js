import React from 'react'
import './profilescreen.css'
import Nav from '../NavBar'
import { useSelector } from 'react-redux';
import { selectuser } from '../features/counter/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
    
    const user = useSelector(selectuser);
    console.log(user);
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
         <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='' />
            <div className='profileScreen_details'>
             <h2>{user.email}</h2>
             <div className='profileScreen_plans'>
             <button onClick={() => {auth.signOut()}} className='profileScreen_signout'>
             Sign Out
             </button>
             </div>
            </div>
         </div>
         </div>
    </div>
  )
}

export default ProfileScreen
