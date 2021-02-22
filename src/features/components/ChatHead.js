import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ChatHead = ({match, url, ownBox, userName}) => {
  const friend = useSelector(state => state.conversations)
    .find(user => user.userId.toString() === match.params.userId).friends
    .find(friend => friend.friendId.toString() === match.params.friendId);
  return (
    ownBox
    ? <div className='chat-head'>
        <div>
          <Link
            to={match.url.match(/options/g) ? match.url.replace(/\/options/g, '') : url}
            className='link'
          >
            <span className='icon-span'>
              <i className="fas fa-arrow-left"></i>
            </span>
          </Link>
        </div>
        <div className='name'>{friend.nickName ? friend.nickName : friend.friendFullName}</div>
        <div className=''>
          {!match.url.match(/options/g)
            ? <Link
                to={`${match.url}/options`} className='link'>
                <span className='icon-span'>
                  <i className="fas fa-bars"></i>
                </span>
              </Link>
            : <span className='icon-span blank-span'>
                <i className='fas fa-bars blank-icon'></i>
              </span>
          }
        </div>
      </div>
    : <div className='chat-head'>
        <div className="name">{userName}</div>
      </div>
  );
};