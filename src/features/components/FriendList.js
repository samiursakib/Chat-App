import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { thumbnailStyle } from './Header';

export const FriendList = ({match}) => {
	const user = useSelector(state => state.conversations).find(user => user.userId === match.params.userId);
	return (
    <div className='friend-list'>
      {user.friends.length
        ? user.friends.map((friend, index) =>
            <Link
              key={index}
              className='link'
              to={`${match.url}/messages/${friend.friendId}`}
            >
              <li key={index}>
              	<div style={{display: 'flex', alignItems: 'center'}}>
									<div style={{
										...thumbnailStyle,
										width: '40px',
										height: '40px',
										backgroundImage: `url(${friend.image})`
									}}></div>
									<div>
										<div style={{fontSize: '16px'}}>{friend.nickName ? friend.nickName : friend.friendFullName}</div>
										{findLastMessage(friend) ? <div style={{fontWeight: 'bold', fontSize: '12px', width: '150px', whiteSpace:'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textWrap: 'no-wrap'}}>{findLastMessage(friend)}</div> : null}
									</div>
            		</div>
                {friend.isOnline ? <div className='dot-container'><span className='dot'></span>Active</div> : null}
              </li>
            </Link>)
        : <p style={{textAlign: 'center', marginTop: '250px', color: '#000', fontSize: '18px'}}>Make some friends first!<br/>Add people.</p>
      }
    </div>
  );
};

export const findLastMessage = (friend) => {
	let lastMessage = null, length = friend.conversation.length;
	if(length) {
		lastMessage = friend.conversation[length - 1].message;
		if(friend.conversation[length - 1].fromMe) lastMessage = 'You: ' + lastMessage;
	}
	return lastMessage;
}