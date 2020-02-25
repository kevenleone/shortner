import React from 'react';
import PropTypes from 'prop-types';
import md5 from '../../utils/md5';

export default function Avatar(props) {
  const { photo, email = '' } = props.me;
  const gravatar = `https://www.gravatar.com/avatar/${md5(email)}?s=200`;
  return (
    <div>
      <img
        alt="from gravatar"
        style={{ width: 120, height: 120, borderRadius: 60 }}
        src={props.img || photo || gravatar}
        {...props}
      />
    </div>
  );
}

Avatar.propTypes = {
  img: PropTypes.string,
  me: PropTypes.objectOf(PropTypes.object)
}

Avatar.defaultProps = {
  img: '',
  me: {
    photo: '',
    email: '',
  }
}