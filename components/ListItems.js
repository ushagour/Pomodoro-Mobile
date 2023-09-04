import React from 'react';
import { View, Text, FlatList,Image, StyleSheet,TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable';
import Colors from "../constants/Colors";
import { SafeAreaView } from 'react-native-safe-area-context';

const ListItems = ({ title, subTitle, image, ImageComponent, onPress }) => {
     
  
        const renderRightActions=()=>{
        // console.log("swip right ");
        alert("action ")
       }
    

    return (
        // <View style={styles.Container}>
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.imgcercle}>
            {ImageComponent}
        {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
        // </View>
  );
};

const styles = StyleSheet.create({
    Container:{
        flexDirection: "row",
        padding: 15, 
        backgroundColor: Colors.light
    },
    imgcercle: {
      flexDirection:"row",
      padding: 10,

  },
  itemText: {
    fontSize: 18,
  },image:{
    width:70,
    height:70,
    borderRadius:35,
  },
  detailsContent:{
    marginLeft:10,
    justifyContent:"center"
  },
  title:{
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 4,

  }
});

export default ListItems;