import React from 'react';
import Avatar from '../../assets/images/unknown.png';

export default function index(props) {
  return (
    <div>
      <img
        alt="user avatar"
        style={{ width: 120, height: 120, borderRadius: 60 }}
        src={props.img || Avatar}
        {...props}
      />
    </div>
  );
}
