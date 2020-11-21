import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({userName}) => {
  const trimName = (name) => {
    let index;
    const firstIndex = name.indexOf(' ');
    const secondIndex = name.indexOf(' ', firstIndex + 1);
    const thirdIndex = name.indexOf(' ', secondIndex + 1);
    if(secondIndex > 0 && secondIndex < 15 && thirdIndex > 0) {
      index = thirdIndex;
    } else if(secondIndex > 0 && thirdIndex < 0) {
      index = secondIndex;
    } else if(firstIndex > 0 && secondIndex < 0) {
      index = name.length;
    }
    return name.substring(0, index);
  };
  return (
    <div className='header'>
      <h1>{trimName(userName)}</h1>
      <Link to='/'>
        <button>
          <span className='icon-span'>
            <i className="fas fa-sign-out-alt"></i>
          </span>
        </button>
      </Link>
    </div>
  );
};