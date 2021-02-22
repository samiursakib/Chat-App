import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'; 

export const LogIn = () => {
  const [note, setNote] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    setNote('');
  }, [userName, password]);
  const users = useSelector(state => state.users);
  const history = useHistory();
  const userAuthentication = (users) => users.find(user => user.userName === userName);
  const passAuthentication = (user) => user.password === password;
  const onSubmit = (e) => {
    e.preventDefault();
    const user = userAuthentication(users);
    if(user) {
      if(passAuthentication(user)) {
        history.push(`/user/${user.userId}`);
      }
    } else {
      setNote(`Username or Password didn't match`);
    }
  };
  return (
		<div className='container'>
			<div className='login-signup'>
				<form onSubmit={onSubmit}>
					<h1 className='center'>Login Form</h1>
					<label>Username:</label>
					<input
						type='text'
						value={userName}
						onChange={e => setUserName(e.target.value)}
					/>
					<label>Password:</label>        
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className='but-holder'><button>Login</button></div>
				</form>
				<Link to='/signup' className='link center'><p>Haven't any account yet?</p></Link>
				{note && <p className='center note'>{note}</p>}
			</div>
		</div>
  );
};