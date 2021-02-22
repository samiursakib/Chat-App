import React from 'react';

export const ReceivedMessage = ({message, time}) => {
  return (
    <div className='received-message' title={time.toISOString()}>{message}</div>
  );
};