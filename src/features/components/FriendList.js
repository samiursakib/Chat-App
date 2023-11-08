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
										width: '30px',
										height: '30px',
										backgroundImage: `url(${friend.image})`
									}}></div>
									<div style={{marginLeft: '8px'}}>
										<div style={{fontSize: '12px', marginBottom: '4px', color: '#eee'}}>{friend.nickName ? friend.nickName : friend.friendFullName}</div>
										{findLastMessage(friend) ? <div style={{fontWeight: 'bold', fontSize: '11px', width: '180px', whiteSpace:'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textWrap: 'no-wrap', color: '#bbb'}}>{findLastMessage(friend)}</div> : null}
									</div>
									{friend.isOnline ? <div className='dot-container' style={{alignSelf: 'center'}}><span className='dot'></span>Active</div> : null}
            		</div>
              </li>
            </Link>)
        : <p style={{textAlign: 'center', marginTop: '250px', color: '#eee', fontSize: '18px'}}>Make some friends first!<br/>Add people.</p>
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