
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Platform,KeyboardAvoidingView,TextInput,TouchableOpacity, Keyboard } from 'react-native';
import Task from "./components/Task.js";
export default function App() {

  const [task,setTask]=useState();
  const [tasksItems,setTasksItems]=useState([]);
  
  
  const handelAddTask =()=>{
    
    Keyboard.dismiss(); //  to remove focus on the keyboard after saving the task 
    setTasksItems([...tasksItems,task])
    setTask(null)
  }
  
  const ComplateTask=(index)=>{
    let copytasksItems =[...tasksItems];
    copytasksItems.splice(index,1)  //index and numbre of item deleted 
    setTasksItems(copytasksItems)
  }

  return (
    <View style={styles.container}>
        <View style={styles.tasksWrapper}>
            <Text style={styles.headerText}>To day's Tasks :</Text>
            <View style={styles.items}>
              {

                /* when you need to use a js dode you have to write it on {}
                                array map to ititate on the array items

                                return use () for multy line 
                */
                 tasksItems.map((item,index)=>{
                  
                  return(
                    <TouchableOpacity key={index} onPress={()=>ComplateTask(index)}>
                      
                      
                      <Task  title={item}/>

                    </TouchableOpacity>
    
    
                  )
                })

              }
           
            </View>
        </View>

    <KeyboardAvoidingView     
    behavior={Platform.OS ==="ios"?"padding":"height"}
    style={styles.WriteTaskWrapper}>

    <TextInput style={styles.input} placeholder={'write a task '} value={task} onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={()=>handelAddTask()}>
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
