import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../database/firebase';
import tw from 'twrnc';

import FocusedStatusBar from '../components/FocusedStatusBar';

const CreateUsers = () => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async props => {
    if (state.name === '') {
      alert('Please provider a name');
    } else {
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          name: state.name,
          email: state.email,
          phone: state.phone
        });
        // alert('Saved User');
        Keyboard.dismiss();

        setState({ name: '', email: '', phone: '' });

        navigation.navigate('UsersList');

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <FocusedStatusBar
          backgroundColor="#fff"
          barStyle={Platform.OS === 'ios' ? 'dark-content' : null}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name User"
            onChangeText={value => handleChangeText('name', value)}
            // clearTextOnFocus
            value={state.name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email User"
            onChangeText={value => handleChangeText('email', value)}
            // clearTextOnFocus
            value={state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone User"
            keyboardType="numeric"
            onChangeText={value => handleChangeText('phone', value)}
            // clearTextOnFocus
            value={state.phone}
          />
        </View>
        <View style={tw`flex h-full items-center w-100 h-40`}>
          <TouchableOpacity
            style={tw`bg-blue-500 py-3 px-6 rounded mt-10`}
            onPress={saveNewUser}
          >
            <Text style={tw`text-white text-lg`}>Save User</Text>
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex h-full items-center w-100 h-50 shadow-opacity-150`}
        >
          <Image
            source={require('../assets/jhon-for.png')}
            style={tw`h-50 w-50 rounded-2xl`}
          />
        </View>
        <Text style={tw`text-center mt-5`}>By Jhonatan Salcedo</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  }
});

export default CreateUsers;
