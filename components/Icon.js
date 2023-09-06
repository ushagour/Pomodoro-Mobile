import React, { Component } from 'react'
import { View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
const Icon = ({size=40,name,backgroundColor="#540b0e",iconColor="#000000"}) => {

    return(

        <View style={{height:size,width:size,borderRadius:size /2 ,backgroundColor:backgroundColor,justifyContent:'center',alignItems:'center'}}>


        <MaterialCommunityIcons name={name} color={iconColor} size={size *0.5}/>
          
        </View>

    )
  
}

export default Icon;