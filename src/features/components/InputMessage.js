import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../conversationsSlice';

export const InputMessage = ({match, ownBox, isOpActive, setIsOpActive}) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    setIsOpActive(true);
    return () => setIsOpActive(false);
  });
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if(message) {
      dispatch(sendMessage({
        userId: match.params.userId,
        friendId: match.params.friendId,
        message,
        fromMe: ownBox ? true : false
      }));
      setMessage('');
    }
  };
  return (
    <div className='input-message'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button>
          <span className='icon-span'>
            <i className="fas fa-angle-double-right"></i>
          </span>
        </button>
      </form>
    </div>
  );
};