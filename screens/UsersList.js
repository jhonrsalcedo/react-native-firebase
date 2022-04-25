import { View, Text, SafeAreaView, Platform } from 'react-native';

import FocusedStatusBar from '../components/FocusedStatusBar';

const UsersList = () => {
  return (
    <SafeAreaView
      styles={{
        flex: 1,
        zIndex: 0
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
