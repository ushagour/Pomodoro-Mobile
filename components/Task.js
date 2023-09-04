import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Task = (props) => {
    const [state, setActive] = useState(false);
    const myIcon = <Icon name="email" size={30} color="#000000" />;


    const tooggleFocus=(state)=>{

        if (state==true) {
          setActive(false);
          
        } else {
          setActive(true);

        }
        
      }


 



     

return (
    <TouchableOpacity    onPress={()=>tooggleFocus(state,props.id)}>

<View  style={[styles.item, state? styles.active :"" ]}>{/* adding more styles to an elemens and adding  if else check for state varible   */}
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}>
                <View  style={styles.squareitem}>{myIcon}</View>
                </TouchableOpacity>
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
        width:30,
        height:30,
        backgroundColor:"#8a817c",
        opacity:0.4,
        borderRadius: 20,
        marginRight:15,
        borderColor: "#0a0908",
        // borderWidth: 2,

    },squareitem:{
        // alignItems:"center",
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