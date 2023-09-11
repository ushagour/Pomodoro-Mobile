import React,{useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import app from "../firebase/config";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import Colors from '../constants/Colors';


const LoginScreen = () => {
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    const [email,SetEmail]=useState('');
    const [name,SetName]=useState('');
    const [password,SetPassword]=useState('');
    const [confirmPassword,SetconfirmPassword]=useState('');
    const [error, setError] = useState('');


    const navigation =useNavigation();

    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user =>{

        if(user){
          navigation.replace("Home")
        }
      })
return unsubscribe;

    },[]);

    const handleSigneup = async () => {
        try {
                                    // Validate inputs
                            if (!email || !name || !password || ! confirmPassword) {
                                setError('All fields are required');
                                return;
                            }
                        
                            if (password !== confirmPassword) {
                                setError('Passwords do not match');
                                return;
                            }



                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                    );    
                    const user = userCredential.user;
            
           
        }catch (err) {
            // Handle login error
        if (err.code === "auth/too-many-requests") {
              alert("too many requests try later !");
            }
            setLoading(false);
            alert(err);
          }
    }


 
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
       >

<View style={styles.headerwrapper}>
        <Text style={styles.headerTitle}>Registre</Text>


        {error ? <Text style={styles.errorText}>{error}</Text> : null}


        </View>
 
        <View style={styles.Inputscontainer}> 
            <TextInput
            placeholder="Name"
            value={name}
            onChangeText={text=>SetName(text)}
            style={styles.input}>
             </TextInput>
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text=>SetEmail(text)}
            style={styles.input}>
             </TextInput>

            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text=>SetPassword(text)}
            secureTextEntry
            style={styles.input}
            >
            </TextInput>
            <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text=>SetconfirmPassword(text)}
            secureTextEntry
            style={styles.input}
            >
            </TextInput>

        </View>
        <View style={styles.Buttunscontainer}> 



          
            <TouchableOpacity           
            onPress={handleSigneup}
            style={styles.button} //to give the component more than 1 style 
            
            >
                <Text style={styles.ButtunsText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={() => navigation.navigate('Login')}       
                 style={[styles.button,styles.buttonOutLine]}
            
            >
                <Text style={styles.ButtunsText}>Login</Text>
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
    headerwrapper:{},
    headerTitle:{
      fontSize: 33,
      marginBottom: 16,
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
    },
    errorText: {
        color: Colors.danger,
        marginBottom: 16,
      },


})