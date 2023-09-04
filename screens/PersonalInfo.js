import React,{useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet,FlatList,Button,Text, View,TextInput,TouchableOpacity } from 'react-native'
import app from "../firebase/config";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import MyIcon from '../components/MyIcon';
import ListItems from '../components/ListItems';
import Colors from "../constants/Colors";
import Constants from "expo-constants";
import { ListItem } from '@rneui/base';
import Task from '../components/Task';

function PersonalInfo() {
    const navigation =useNavigation();
    const auth = getAuth(app);



    return (
   <View style={styles.container}>


      <Button title="Go back" onPress={() => navigation.goBack()} />
   
      
  </View>
  )
}
const styles = StyleSheet.create({

    container:{
      flex: 1,
      paddingTop: Constants.statusBarHeight, // to make a padding top on screen  
    },
  
    body:{
      flexDirection: "row",
      padding: 15,
      backgroundColor: Colors.light
    }

});
export default PersonalInfo;
