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

function ProfileScreen() {
    const navigation =useNavigation();
    const auth = getAuth(app);



    const Menu = [{

            id:1,
            title:"Personal Informations",
            icon:{
              name: "format-list-bulleted",
              backgroundColor: Colors.primary
            },
            redirect:"PersonalInfo"
            

    },
    {
      id :2 ,title :"My Tasks" ,icon:{name:"format-list-bulleted",backgroundColor:Colors.secondary} ,redirect:"MyTasks"
    }
  ];
    return (
   <View style={styles.container}>


      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <View style={styles.ProfileHeader}>

          <ListItem
          
          // ImageComponent={ /*  DEFAULT value is the icon  but if you wanna use the image to ranfder your profile avatar you can use the image proprity*/
          //   <Icon
          
            //   size={50}
            //   name="email"
            //   backgroundColor="red"
            //   iconColor="white" 
      
            //   />
            // }
              title={auth.currentUser?.id}
              subTitle={auth.currentUser?.email}
              image={require("../assets/image/avatar/mypic.jpg")}
              onPress={()=>{alert("you tapped on the profile ")}}
          />
        
   
  </View>





          <View style={styles.ProfileMenu}>
          <FlatList
        data={Menu}
        keyExtractor={item => item.title}

        renderItem={({item}) => (
                    /* listItems is a component */
                                    <ListItem
                                    
                                    onPress={() => navigation.navigate(item.redirect)} 
                                    title={item.title}
                                    ImageComponent={ 
                                                      <Icon
                                                
                                                    name={item.icon.name}
                                                    backgroundColor={item.icon.backgroundColor}
                                                    />
                                                  }
                  
                                    />
                                  )
                 
      }

      />




          </View>
          <ListItem
        
        title="Logout"
        ImageComponent={ 
                          <Icon
                    
                        name="logout"
                        backgroundColor="#ffe66d"
                        />
                      }
        
        
        />
  </View>
  )
}
const styles = StyleSheet.create({

    container:{
      flex: 1,
      paddingTop: Constants.statusBarHeight, // to make a padding top on screen  
    },
  
    ProfileMenu:{
      flexDirection: "row",
      padding: 15,
      backgroundColor: Colors.light
    }

});
export default ProfileScreen;