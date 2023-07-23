import React,{useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import app from "../firebase/config";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth,createUserWithEmailAndPassword  } from "firebase/auth";


const LoginScreen = () => {
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    const [Email,SetEmail]=useState('');
    const [Password,SetPassword]=useState('');


    const handleSigneup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              Email,
              Password
              );    
              console.log("ali");
        }catch (error) {
            // Handle login error
        if (error.code === "auth/too-many-requests") {
              alert("too many requests try later !");
            }
            setLoading(false);
            alert(error);
          }
    }


    const handelSingneIn= async ()=>{
        // setLoading(true);
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            Email,
            Password
          );
          console.log("ali");

        //   setLoading(false);
        } catch (error) {
          // Handle login error
          if (error.code === "auth/user-not-found") {
            alert("user not found !");
            // setLoginFailed(true);
          }
          if (error.code === "auth/wrong-password") {
            alert("wrong password !");
            // setLoginFailed(true);
          }
          if (error.code === "auth/too-many-requests") {
            alert("too many requests try later !");
          }
        //   setLoading(false);
        }
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
            
            onPress={handelSingneIn}
            style={styles.button}
            
            >
                <Text style={styles.ButtunsText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={handleSigneup}
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