import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setNickName, removeNickName } from '../conversationsSlice';

export const Options = ({match}) => {
  const [nName, setNName] = useState('');
  const friend = useSelector(state => state.conversations)
    .find(user => user.userId.toString() === match.params.userId).friends
    .find(friend => friend.friendId.toString() === match.params.friendId);
  const dispatch = useDispatch();
  const setOnClick = () => {
    if(nName) {
      dispatch(setNickName({
        userId: match.params.userId, friendId: match.params.friendId, nName
      }));
      setNName('');
    }
  };
  const removeOnClick = () => {
    dispatch(removeNickName({
      userId: match.params.userId, friendId: match.params.friendId
    }));
  };
  return (
    <div className='options'>
      <div className='first'>
        <div>
          <p>Nick Name</p>
          <p>Status</p>
          <p>Gender</p>
          <p>Age</p>
        </div>
        <div className='bold'>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div>
          <p>{!friend.nickName ? 'Notset' : friend.nickName}</p>
          <p>{friend.isOnline ? 'Online' : 'Offline'}</p>
          <p>{friend.gender === 'male' ? 'Male' : 'Female'}</p>
          <p>{friend.age}</p>
        </div>
      </div>
      <div className='last'>
        <p>Set Nick Name</p>
        <div>
          <input
            type='text'
            value={nName}
            onChange={e => setNName(e.target.value)}
          />
          <button onClick={setOnClick}>Set</button>
          <button onClick={removeOnClick}>Clear</button>
        </div>
      </div>
    </div>
  );
};