import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.scss';

function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <li className={styles['item']} key={friend.id}>
          <span
            className={friend.isOnline ? styles['status'] : styles['notActive']}
          ></span>
          <img
            className={styles['avatar']}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles['name']}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
