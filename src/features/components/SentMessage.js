import React from 'react';

export const SentMessage = ({message, time}) => {
  return (
    <div className='sent-message' title={time.toISOString()}>{message}</div>
  );
};