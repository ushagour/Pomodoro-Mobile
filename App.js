
import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform,KeyboardAvoidingView,TextInput,TouchableOpacity } from 'react-native';
import Task from "./components/Task.js";
export default function App() {

  
  return (
    <View style={styles.container}>
        <View style={styles.tasksWrapper}>
            <Text style={styles.headerText}>To day's Tasks :</Text>
            <View style={styles.items}>
                <Task  title={'Lorem ipsum dolor sit amet'}/>
            </View>
        </View>




    <KeyboardAvoidingView 
    
    behavior={Platform.OS ==="ios"?"padding":"height"}
    style={styles.WriteTaskWrapper}
    
    
  >

<TextInput style={styles.input} placeholder={'write a task '}/>
<TouchableOpacity>
<View style={styles.addWrapper}>

<Text style={styles.TextAdd}>+</Text>
</View>
</TouchableOpacity>

</KeyboardAvoidingView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,   
  },
  headerText:{
    fontSize:24,
    fontWeight:'bold',

  },
  items:{
    marginTop:30,

  },
  WriteTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center",

  },input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:"#fff",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
  },addWrapper:{
    height:60,
    width:60,
    borderRadius:60,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C0C0",
    borderWidth:1,

    

  },
  TextAdd:{},
});
