import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import Nav from "../Nav"
import './ProfileScreen.css';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt="" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>

              <PlansScreen/>
            </div>

            <button
              onClick={() => auth.signOut()}
             className="profileScreen_signOut">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;