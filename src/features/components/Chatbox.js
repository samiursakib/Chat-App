import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { InputMessage } from './InputMessage';
import { Header } from './Header';
import { MessageBox } from './MessageBox';
import { FriendList } from './FriendList';
import { ChatHead } from './ChatHead';
import { Options } from './Options';

export const Chatbox = ({match, ownBox}) => {
  const [isOpActive, setIsOpActive] = useState(false);
  const url = match.url;
  const userId = match.params.userId;
  const user = useSelector(state => state.users)
    .find(user => user.userId.toString() === userId);
  return (
    <div className='chatbox' style={ isOpActive || ownBox ? {display: 'flex'} : {display: 'none'}}>
      {ownBox && <Header userName={user.fullName} ownBox={ownBox} />}
      <Route exact path={`${match.path}`} render={({match}) =>
        <FriendList userId={userId} match={match}/>
      } />
      <Route exact path={`${match.path}/messages/:friendId`} render={({match}) => (
        <React.Fragment>
          <ChatHead match={match} url={url} ownBox={ownBox} userName={user.fullName} />
          <MessageBox match={match} ownBox={ownBox} />
          <InputMessage
            match={match}
            ownBox={ownBox}
            isOpActive={isOpActive}
            setIsOpActive={setIsOpActive}
          />
        </React.Fragment>
      )} />
      <Route path={`${match.path}/messages/:friendId/options`} render={({match}) => (
        <React.Fragment>
          <ChatHead match={match} url={url} ownBox={ownBox} userName={user.fullName} />
          <Options match={match} />
        </React.Fragment>
      )} />
    </div>
  );
};