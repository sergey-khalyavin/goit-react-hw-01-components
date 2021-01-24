import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{`@${tag}`}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
