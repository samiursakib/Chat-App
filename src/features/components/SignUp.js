import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'; 
import { nanoid } from 'nanoid';

import { userAdded } from '../usersSlice';

export const SignUp = () => {
  const history = useHistory();
  const users = useSelector(state => state.users);
  const [note, setNote] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setNote('');
  }, [userName, fullName, password]);
  const onSubmit = (e) => {
    e.preventDefault();
    if(userName && fullName && password) {
      dispatch(userAdded({
        userId: nanoid(), userName, fullName, password
      }));
      setUserName('');
      setFullName('');
      setPassword('');
      history.push(`/`);
    } else {
      setNote('Please fill every blanks.');
    }
  }
  return (
    <div className='login-signup'>
      <form onSubmit={onSubmit}>
        <h1 className='center'>Signup Form</h1>
        <label>User Name:</label>
        <input
          type='text'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <label>Full Name:</label>
        <input
          type='text'
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <label>Password:</label>        
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
  );
}