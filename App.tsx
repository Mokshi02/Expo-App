//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: '#aed'}}>Welcome To My App!</Text>
      <Text style={styles.myBackground}>Proceed Further</Text>
      <Text style={styles.myBackground}>Proceed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myBackground: {
    backgroundColor: '#ffaaee',
    margin: 18
  }
});
