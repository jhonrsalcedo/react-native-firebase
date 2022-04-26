import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import UsersList from './screens/UsersList';
import UserDetail from './screens/UserDetail';
import CreateUsers from './screens/CreateUsers';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ headersShow: false }}
        initialRouteName="CreateUsers"
      >
        <Stack.Screen name="CreateUsers" component={CreateUsers} />
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
