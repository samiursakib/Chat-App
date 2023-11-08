import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({userName, userImage}) => {	
  return (
    <div className='header'>
    	<div style={{display: 'flex'}}>
    		<div style={{
					...thumbnailStyle,
					width: '40px',
					height: '40px',
					backgroundImage: `url(${userImage})`
				}}>
    		</div>
     		<h1 style={{fontSize: '16px', paddingLeft: '5px'}}>{userName}</h1>
     	</div>
      <Link to='/'>
        <button>
          <span className='icon-span'>
            <i className="fas fa-sign-out-alt" style={{ fontSize: '16px' }}></i>
          </span>
        </button>
      </Link>
    </div>
  );
};

export const thumbnailStyle = {
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	borderRadius: '50%',
	marginRight: '10px'
}
