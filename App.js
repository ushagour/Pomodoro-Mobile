
import React, { useState } from 'react';
import { StyleSheet,Pressable , Text, View, FlatList, Platform,KeyboardAvoidingView,TextInput,TouchableOpacity, Keyboard,Button, Alert } from 'react-native';
import Task from "./components/Task.js";
import CountDown from 'react-native-countdown-component';

export default function App() {

  const [task,setTask]=useState();
  const [tasksItems,setTasksItems]=useState([]);

  const [Pomodoro, setPomodoro] = useState('pomodoro');

 
  


  const handelAddTask =()=>{
    if (task == "") {
      Alert.alert("Oops", 'Input is empty', [
        {
        text: 'Ok'
        }])
      return;
    }
      Keyboard.dismiss(); //  to remove focus on the keyboard after saving the task 
      setTasksItems([...tasksItems,task])
      setTask(null)
    

  }
  
 


  return (
    <View style={(Pomodoro=='pomodoro')? styles.ThemePomodoro : styles.ThemeBreak}>


         <View style={styles.pomodoroWrapper}>
          <View style={styles.pomodoroHeader}>

         <TouchableOpacity  onPress={() => setPomodoro('pomodoro')}>
               <Text style={styles.pomodoroText}>Pomodoro</Text>
                    </TouchableOpacity>
         <TouchableOpacity  onPress={() => setPomodoro('Break')}>
               <Text style={styles.pomodoroText}>Break</Text>
                    </TouchableOpacity>

          </View>
   
        
          <View style={styles.pomodoroTimer}>

        
         <CountDown
         
        until={25}
        // until={2}
        onPress={this.sendAgain} //default null
        size={60}
        onFinish={() => setPomodoro('Break')}
        digitStyle={null}
        digitTxtStyle={{color: '#fff'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        separatorStyle={{color: '#fff'}}


      />

         </View>
         <View>
      <Pressable style={styles.buttonStart} onPress={() => Alert.alert('Button with adjusted color pressed')}>
      <Text style={styles.text}>Start</Text>
    </Pressable>
         </View>
         </View>
        <View style={styles.tasksWrapper}>
            <Text id="title" style={styles.headerText}>Tasks :</Text>
            <View
                style={{
                  margin:10,
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
            <View style={styles.items}>
              {

                /* when you need to use a js dode you have to write it on {}
                                array map to ititate on the array items

                                return use () for multy line 
                */
                 tasksItems.map((item,index)=>{
                  
                  return(
   
                      
                      
                      <Task key={index} id={index} title={item}/>//propriety key cant be used in the componenets class create uour own prop like "id" 

    
    
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

  ThemePomodoro:{
    flexDirection: 'column',
    backgroundColor: '#bc4749',
    flex: 1,
    padding: 20,
  },
  ThemeBreak: {
    flexDirection: 'column',
    backgroundColor: '#219ebc',
    flex: 1,
    padding: 20,
  },
  pomodoroWrapper:{
    // flex:2,
    marginTop:30,
    backgroundColor: '#9b2226',
    borderRadius:20,
    borderColor:"#000814",
    borderWidth:1,
 
    
  },
  pomodoroHeader:{
    marginTop:20,
    flexDirection:"row", //create a row 
    justifyContent:'space-around',
  },

  pomodoroText:{
    color:"#FFFFFF",
    fontWeight:'bold',
    fontSize:20,
 
 },
 pomodoroTimer:{
    color:"#FFFFFF",
    fontWeight:'bold',
    justifyContent:"center",
    alignItems:"center",
 },

  TimerText:{
    paddingHorizontal:20,   
    color:"#FFFFFF",
    fontSize:100,
    fontWeight:'bold',


  },
 
  tasksWrapper:{
    flex:2,
    paddingTop:20,
    paddingHorizontal:20,   
    borderColor:"#C0C0C0",

  },
  headerText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },
  items:{
    marginTop:10,

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
  buttonStart: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    margin:12,
    elevation: 3,
    backgroundColor:"#fff",
  }, text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  }
});
