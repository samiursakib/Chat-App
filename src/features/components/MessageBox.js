import React from 'react';
import { useSelector } from 'react-redux';
import { SentMessage } from './SentMessage';
import { ReceivedMessage } from './ReceivedMessage';

export const MessageBox = ({match, ownBox}) => {
  const messageList = useSelector(state => state.conversations)
		.find(user => user.userId === match.params.userId).friends
    .find(friend => friend.friendId.toString() === match.params.friendId).conversation;
  return (
    <div className='message-box'>
      { 
				messageList.length
					?	messageList.map(item =>
							ownBox
								? item.fromMe
									? <SentMessage key={item.messageId} message={item.message} time={item.time}/>
									: <ReceivedMessage key={item.messageId} message={item.message} time={item.time}/>
								: item.fromMe
									? <ReceivedMessage key={item.messageId} message={item.message} time={item.time}/>
									: <SentMessage key={item.messageId} message={item.message} time={item.time}/>
						)
					: <p style={{textAlign: 'center', marginBottom: '200px'}}>No message yet!<br/>Send a message to your friend.</p>
      }
    </div>
  );
};