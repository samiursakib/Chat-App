import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { LogIn } from './features/components/LogIn';
import { SignUp } from './features/components/SignUp';
import { Chatbox } from './features/components/Chatbox';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/user/:userId' render={({match}) => (
        <div className='container'>
          <Chatbox match={match} ownBox={true} />
          <Chatbox match={match} ownBox={false} />
        </div>
      )}></Route>
    </Router>
  );
};