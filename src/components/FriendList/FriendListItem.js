import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  const quantityClass = isOnline ? styles.online : styles.offline;
  return (
    <li key={id} className={styles.list}>
      <span className={quantityClass}></span>
      <img
        className={styles.avatar}
        src={styles.avatar}
        alt={name}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: 'https://dummyimage.com/120x160/000000/fff',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
