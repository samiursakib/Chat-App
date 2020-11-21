import React from 'react';
import { useSelector } from 'react-redux';
import { SentMessage } from './SentMessage';
import { ReceivedMessage } from './ReceivedMessage';

export const MessageBox = ({match, ownBox}) => {
  const messageList = useSelector(state => state.conversations)
    .find(user => user.userId.toString() === match.params.userId).friends
    .find(friend => friend.friendId.toString() === match.params.friendId).conversation;
  return (
    <div className='message-box'>
      {
        messageList.map(item =>
          ownBox
            ? item.fromMe
              ? <SentMessage key={item.messageId} message={item.message}/>
              : <ReceivedMessage key={item.messageId} message={item.message}/>
            : item.fromMe
              ? <ReceivedMessage key={item.messageId} message={item.message}/>
              : <SentMessage key={item.messageId} message={item.message}/>
        )
      }
    </div>
  );
};