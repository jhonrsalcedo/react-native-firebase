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
import {
  NativeBaseProvider,
  Pressable,
  Box,
  HStack,
  Badge,
  Flex,
  Spacer,
  Input,
  Button
} from 'native-base';
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
    <NativeBaseProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          <FocusedStatusBar
            backgroundColor="#fff"
            barStyle={Platform.OS === 'ios' ? 'dark-content' : null}
          />
          <View>
            <Box alignItems="center">
              <Input
                mx="3"
                w="75%"
                mt="10"
                size="xl"
                maxWidth="300px"
                placeholder="Name User"
                onChangeText={value => handleChangeText('name', value)}
                // clearTextOnFocus
                value={state.name}
              />
              <Input
                mx="3"
                w="75%"
                mt="5"
                size="xl"
                maxWidth="300px"
                placeholder="Email User"
                onChangeText={value => handleChangeText('email', value)}
                // clearTextOnFocus
                value={state.email}
              />
              <Input
                mx="3"
                w="75%"
                mt="5"
                size="xl"
                maxWidth="300px"
                placeholder="Phone User"
                keyboardType="numeric"
                onChangeText={value => handleChangeText('phone', value)}
                // clearTextOnFocus
                value={state.phone}
              />
            </Box>
          </View>
          <View style={tw`flex h-full items-center w-100 h-40`}>
            <TouchableOpacity
              style={tw`bg-blue-500 py-3 px-6 rounded mt-10`}
              onPress={saveNewUser}
            >
              <Text style={tw`text-white text-lg`}>Save User</Text>
            </TouchableOpacity>
            <Box alignItems="center" mt="2">
              <Button size="lg" onPress={() => console.log('hello world')}>
                Click Me
              </Button>
            </Box>
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
      <Box alignItems="center">
        <Pressable onPress={() => console.log("I'm Pressed")}>
          <Box
            maxW="96"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg="coolGray.100"
            p="5"
            rounded="8"
          >
            <HStack alignItems="center">
              <Badge
                colorScheme="darkBlue"
                _text={{
                  color: 'white'
                }}
                variant="solid"
                rounded="4"
              >
                Business
              </Badge>
              <Spacer />
              <Text fontSize={10} color="coolGray.800">
                1 month ago
              </Text>
            </HStack>
            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
              Marketing License
            </Text>
            <Text mt="2" fontSize="sm" color="coolGray.700">
              Unlock powerfull time-saving tools for creating email delivery and
              collecting marketing data
            </Text>
            <Flex>
              <Text
                mt="2"
                fontSize={12}
                fontWeight="medium"
                color="darkBlue.600"
              >
                Read More
              </Text>
            </Flex>
          </Box>
        </Pressable>
      </Box>
    </NativeBaseProvider>
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
