import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userProfile from './path/user.json';
import statisticalData from './path/statistical-data.json';
import friends from './path/friends.json';
import transactions from './path/transactions.json';

const App = () => (
  <>
    <Profile
      user={userProfile}
      name={userProfile.name}
      tag={userProfile.tag}
      location={userProfile.location}
      avatar={userProfile.avatar}
      stats={userProfile.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </>
);

export default App;
