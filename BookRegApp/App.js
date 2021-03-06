import React from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddNewBook from './screens/AddNewBook';
import SignUpScreen from './screens/SignUpScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRoutename="Home" screenOptions={{
    headerShown: false
  }}>
    
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddNewBook" component={AddNewBook} />
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}
