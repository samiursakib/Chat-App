import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const FriendList = ({match, userId}) => {
  const user = useSelector(state => state.conversations)
    .find(user => user.userId.toString() === userId);
  const friends = user !== undefined && 'friends' in user ? user.friends : null;
  return (
    <div className='friend-list'>
      {friends
        ? friends.map(friend =>
            <Link
              className='link'
              to={`${match.url}/messages/${friend.friendId}`}
              key={friend.friendId}
            >
              <li>{friend.nickName ? friend.nickName : friend.friendName}
                <span className={friend.isOnline ? 'offline online' : 'offline'}></span>
              </li>
            </Link>)
        : <p>Make some friends first.</p>
      }
    </div>
  );
};