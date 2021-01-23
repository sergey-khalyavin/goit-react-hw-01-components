import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          isOnline={isOnline}
          name={name}
          avatar={avatar}
          key={id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
};

FriendListItem.defaultProps = {
  avatar: 'https://dummyimage.com/120x160/000000/fff',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
