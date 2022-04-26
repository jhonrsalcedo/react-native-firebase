import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text
} from 'react-native';

const CreateUsers = () => {
  return (
    <ScrollView>
      <View>
        <TextInput style={styles.input} placeholder="Name User" />
        <TextInput style={styles.input} placeholder="Email User" />
        <TextInput
          style={styles.input}
          placeholder="Phone User"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff' }}>Save User</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10
  }
});

export default CreateUsers;
