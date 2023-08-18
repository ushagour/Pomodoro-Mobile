import React,{useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Button,Text, View,TextInput,TouchableOpacity } from 'react-native'
import app from "../firebase/config";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import MyIcon from '../components/MyIcon';

function ProfileScreen() {
    const navigation =useNavigation();
    return (
   <View style={styles.container}>


          <MyIcon
          
          size={50}
          name="email"
          backgroundColor="red"
          iconColor="white"
  
          />



   
   
           <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
  )
}
const styles = StyleSheet.create({

    container:{
      flexDirection: 'column',
      backgroundColor: '#f08080',
      flex: 1,
      padding: 20,
    },
    

});
export default ProfileScreen;