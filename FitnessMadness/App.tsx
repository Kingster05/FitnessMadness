import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
<LinearGradient
        colors={['#000000', '#FF0000']}
        style={styles.background}
      />
      <Image
        source={require('./Logo/FitnessMADNESS.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.signUpButton]}>
        <Text style={[styles.buttonText, styles.signUpButtonText]}>Sign Up</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  logo: {
    width: 200, // Adjust this based on the size of your image
    height: 200, // Adjust this based on the size of your image
    marginBottom: 50,
  },

  button: {
    width: 250,
    height: 50,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  signUpButtonText: {
    color: '#f5f5f5',
  },
});