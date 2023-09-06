import React,{useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet,FlatList,Button,Text, View,TextInput,TouchableOpacity } from 'react-native'
import app from "../firebase/config";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Colors from "../constants/Colors";
import Constants from "expo-constants";
import Task from '../components/Task';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

function MyTasks() {
    const navigation =useNavigation();
    const auth = getAuth(app);



    const Menu = [{


      id:1,
      title:"this is  a simple damn task"
     
    },{

      id:2,
      title:"another one "
    }
      

  ];
    return (
   <View style={styles.container}>


      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={styles.ProfileHeader}>

          <ListItem
              title={auth.currentUser?.id}
              subTitle={auth.currentUser?.email}
              image={require("../assets/image/avatar/mypic.jpg")}
              // onPress={()=>{alert("you tapped on the profile ")}}
              renderRightActions={()=>{<ListItemDeleteAction onPress={()=>{console.log(`deleting....`);}} />}}

          />
        
   
  </View>





          <View style={styles.body}>
          <FlatList
        data={Menu}
        // keyExtractor={item => item.title}

        renderItem={({item}) => (
          <ListItem
                    /* listItems is a component */
                    title={item.title}
                    onPress={()=>{console.log(`deleting${item}....`);}}
                    renderRightActions={()=>{<ListItemDeleteAction onPress={()=>{console.log(`deleting${item}....`);}} />}}
                         />
                         
                   
                                  )
                      

      }

      />




          </View>
      
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
export default MyTasks;
