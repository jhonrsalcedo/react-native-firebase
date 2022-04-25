import { View, Text, SafeAreaView, Platform, StyleSheet } from 'react-native';

import FocusedStatusBar from '../components/FocusedStatusBar';

const Home = () => {
  return (
    <SafeAreaView
      styles={{
        flex: 1,
        zIndex: 0
      }}
    >
      <FocusedStatusBar
        backgroundColor="#fff"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : null}
      />
      <View>
        <Text>This is Home</Text>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

export default Home;
