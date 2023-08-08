import React,{useState,useContext} from 'react';
import {View, StyleSheet,Text,TextInput,Button,Alert} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import {Button as PaperButton} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";

const Login = () => {
    const[mobile,setMobile] = useState('');
    const[admissionNumber,setAdmissionNumber] = useState('');
    const[password,setPassword] = useState('');
  const [role, setRole] = useState("Student");

    const navigation = useNavigation();
    const authContext = useContext(AuthContext);

   async function loginHandler(){
       if(role==="Student"){
        if( admissionNumber === "" || password === ""){
            return Alert.alert("Required All Fields","In order to login, you must fill all the details");
        }else{
            authContext.studentLogin(admissionNumber,password,role);
        }
       }
       if(role==="Teacher" || role === "Principal"){
        if(mobile === "" || password===""){
            return Alert.alert("Required All Fields","In order to login, you must fill all the details");
        }else{
            authContext.facultyLogin(mobile,password,role);
        }
       }
        // Alert.alert("Your credentials",name + " "+mobile+" "+age)
        // await AsyncStorage.setItem("mobile",mobile);
        // authContext.signup(mobile);
    }
    function LoginComponentHandler(){
        navigation.navigate("Signup")
    }
    return (
        <View style={styles.rootContainer}>
            <Text>Login</Text>
            <Picker
        style={styles.inputContainer}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        selectedValue={role}
      >
        <Picker.Item label="Student" value="Student" />
        <Picker.Item label="Teacher" value="Teacher" />
        <Picker.Item label="Principal" value="Principal" />
      </Picker>
             {role === "Student" && <>
             <TextInput placeholder='Enter your admission number' style = {styles.inputContainer}
                onChangeText={ (e)=>{setAdmissionNumber(e)}}
            />
            
            <TextInput placeholder='Enter your password' style = {styles.inputContainer}
                onChangeText={ (e)=>{setPassword(e)}}/>
           
             </>}
             {(role === "Teacher" || role==="Principal") && <>
             <TextInput placeholder='Enter your mobile number' style = {styles.inputContainer}
                onChangeText={ (e)=>{setMobile(e)}}

            />

            <TextInput placeholder='Enter your password' style = {styles.inputContainer}
                onChangeText={ (e)=>{setPassword(e)}}/>
           
             </>}
            
            <View style={styles.btn}>
            {
          authContext.loading ? <Button title="Loading...." style={styles.btn} /> : <Button title="Login" style={styles.btn} onPress={loginHandler} />
        }
            </View>

            <View style={{marginVertical:18,flexDirection:"row", justifyContent:"space-around",alignItems:"center"}}>
                <View>
                    <Text>Don't have an account ?</Text>
                </View>
                <PaperButton onPress= {LoginComponentHandler}>Signup here</PaperButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-start",
        alignItems:"center",
        padding:10
    },
    inputContainer:{
        width:"90%",
        height:50,
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black",
        marginTop:30,
        padding:5,
        borderRadius:5
    },
    btn:{
        width:"90%",
        marginTop:28,
        padding:2
    }
})

export default Login;
