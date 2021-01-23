import React from 'react';

import Profile from './Profile/Profile';
import Container from './Container/Container';
import StatisticList from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/Transactions';

import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

const App = () => {
  return (
    <Container>
      <Profile {...user} />
      <StatisticList stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
