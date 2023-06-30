
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Task from "./components/Task.js";
export default function App() {

  
  return (
    <View style={styles.container}>
        <View style={styles.tasksWrapper}>
            <Text style={styles.headerText}>To day's Tasks :</Text>
            <View style={styles.items}>
                <Task  title={'first task'}/>
            </View>
        </View>
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

  }
});
