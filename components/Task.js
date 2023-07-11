import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const Task = (props) => {
    const [state, setActive] = useState(false);


    const tooggleFocus=(state)=>{

        if (state==true) {
          setActive(false);
          
        } else {
          setActive(true);
          
        }
        
      }


return (
    <TouchableOpacity    onPress={()=>tooggleFocus(state)}>

<View  style={[styles.item, state? styles.active :"" ]}>{/* adding more styles to an elemens and adding  if else check for state varible   */}
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{props.title}</Text>
        </View>

        <View style={styles.circular}></View>
</View>
</TouchableOpacity>

)}
const styles = StyleSheet.create({
    item: {
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
      


    },
    active:{
        borderColor: '#000814',borderWidth:2
    },
    itemLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"
    }
    ,
    square:{
        width:24,
        height:24,
        backgroundColor:"#8a817c",
        opacity:0.4,
        borderRadius: 10,
        marginRight:15,
        borderColor: "#0a0908",
        borderWidth: 2,

    }
    ,itemText:{
        maxWidth:"88%",//for dening the text to be to long and toutch the cercle 
    }
    ,circular:{
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;