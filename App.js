
import React, { useState } from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import PersonalInfo from './screens/PersonalInfo';
import MyTasks from './screens/MyTasks';
export default function App() {

  
  const Stack = createNativeStackNavigator();

 


  return (

    <NavigationContainer>
              <Stack.Navigator  screenOptions={{headerShown: false}}>
              <Stack.Screen   name="Login" Options={{headerShown: false}}  component={LoginScreen} />
              <Stack.Screen name="Home"  component={HomeScreen} />
              <Stack.Screen name="ProfileScreen"  component={ProfileScreen} />
              <Stack.Screen name="PersonalInfo"  component={PersonalInfo} />
              <Stack.Screen name="MyTasks"  component={MyTasks} />
              </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
},
});
