import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../database/firebase';

import FocusedStatusBar from '../components/FocusedStatusBar';
// const [users, setUsers] = useState([]);

const UsersList = () => {
  useEffect(() => {
    const q = query(collection(db, 'users'));
    onSnapshot(q, querySnapshot => {
      const users = [];
      querySnapshot.forEach(doc => {
        const { name, email, phone } = doc.data();
        users.push({ id: doc.id, name, email, phone });
      });
      setUsers(users);
    });
  }, []);
  return (
    <SafeAreaView
      styles={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <FocusedStatusBar
        backgroundColor="#001F2D"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : null}
      />
      <View>
        <Text>This is UsersList</Text>
      </View>
    </SafeAreaView>
  );
};

export default UsersList;
