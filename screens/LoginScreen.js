import React,{useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'


const LoginScreen = () => {
    
    const [Email,SetEmail]=useState('');
    const [Password,SetPassword]=useState('');


    const handleSigneup =(email, password)=>{
    console.log(email, password);
    }
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
       >


 
        <View style={styles.Inputscontainer}> 
            <TextInput
            placeholder="Email"
            value={Email}
            onChangeText={text=>SetEmail(text)}
            style={styles.input}>
             </TextInput>

            <TextInput
            placeholder="Password"
            value={Password}
            onChangeText={text=>SetPassword(text)}
            secureTextEntry
            style={styles.input}
            >


            </TextInput>

        </View>
        <View style={styles.Buttunscontainer}> 



            <TouchableOpacity
            
            onPress={()=>{
                console.log(Email+' '+Password);
            }}
            style={styles.button}
            
            >
                <Text style={styles.ButtunsText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={handleSigneup(Email,Password)}
            style={[styles.button,styles.buttonOutLine]} //to give the component more than 1 style 
            
            >
                <Text style={styles.ButtunsText}>Register</Text>
            </TouchableOpacity>

        </View>
  


    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    Inputscontainer:{
        width:'80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        borderRadius:20,
        marginVertical: 7,
        height:40,
        fontSize:16,
        color:'black',
        borderWidth:.3,
        borderColor:'#ccc'



        
    },
    Buttunscontainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,

    },
    button:{
        backgroundColor:'#023047',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'

    },
    buttonOutLine:{
        backgroundColor:'#219ebc',
        marginTop:5,
        borderColor:'#8ecae6',
        borderWidth:2
        

    },
    ButtunsText:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
    }



})