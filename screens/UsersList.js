import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../database/firebase';

import FocusedStatusBar from '../components/FocusedStatusBar';

const UsersList = () => {
  useEffect(() => {
    const q = query(collection(db, 'users'));
    const queryUser = onSnapshot(q, querySnapshot => {
      // const cities = [];
      querySnapshot.forEach(doc => {
        // cities.push(doc.data().name);
        console.log(doc.data());
      });
      console.log(queryUser);
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
