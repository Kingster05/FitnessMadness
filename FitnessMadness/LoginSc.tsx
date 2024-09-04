import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

const LoginScreen = ({ navigation   
}) => {
 const [username, setUsername] = useState('');
 const [password,   
setPassword] = useState('');

 const handleLogin = () => {
   // Implement your login logic here
   // If login is successful, navigate to the desired   
screen
   // Otherwise, handle login errors appropriately
   console.log('Logging in...');

   navigation.navigate('HomeScreen'); // Replace 'HomeScreen' with your desired screen name
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>   

      {/* Add other login options or navigation links here */}
    </View>
  );
};

const styles = StyleSheet.create({
    // Your styles here
  });
export default LoginSc;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginSc" component={LoginScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;