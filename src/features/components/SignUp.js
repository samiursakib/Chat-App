import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'; 
import { nanoid } from 'nanoid';

import { userAdded } from '../usersSlice';
import { setProfile } from '../conversationsSlice'; 

export const SignUp = () => {
	const userImage = 'absent';
  const history = useHistory();
  const users = useSelector(state => state.users);
  const [note, setNote] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setNote('');
  }, [userName, userFullName, password]);
  const onSubmit = (e) => {
    e.preventDefault();
		const userId = nanoid();
    if(userName && userFullName && password) {
      dispatch(userAdded({
        userId, userName, userFullName, password, userImage
      }));
      setUserName('');
      setUserFullName('');
      setPassword('');
      history.push(`/`);
    } else {
      setNote('Please fill up every blanks!');
    }
		dispatch(setProfile({userId}));
  }
  return (
		<div className='container'>
			<div className='login-signup'>
				<form onSubmit={onSubmit}>
					<h3 className='center'>Signup</h3>
					<label>Username</label>
					<input
						type='text'
						value={userName}
						onChange={e => setUserName(e.target.value)}
					/>
					<label>Fullname</label>
					<input
						type='text'
						value={userFullName}
						onChange={e => setUserFullName(e.target.value)}
					/>
					<label>Password</label>        
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className='but-holder'><button onClick={onSubmit}>Signup</button></div>
				</form>
				<Link to='/' className='link center'><p>Already have an account?</p></Link>
				{note && <p className='center note'>{note}</p>}
			</div>
		</div>
  );
}