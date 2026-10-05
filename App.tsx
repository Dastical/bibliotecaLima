import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ENTROU!!</Text>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTEM4qqlI68qAB57FeDLS1yKsVaGF26zTLCUHPC7fng&s=10" alt="Image" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
