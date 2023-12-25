import React,{useState,useContext} from 'react';
import {View, StyleSheet,Text,TextInput,Button,Alert,Image,Dimensions} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import {Button as PaperButton,ActivityIndicator} from "react-native-paper";
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
            <View style={styles.topContainer}>
            {/* <Text style={{textAlign:'center',paddingVertical:10,fontSize:18,color:"#8338ec"}}>LOGIN</Text> */}
      <Image source={require("../../assets/LoginImage.png")} style = {{width : "90%",height:"95%"}}/>
            </View>

            <View style={styles.bottomContainer}>
            {/* <Picker
        style={styles.inputContainer}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        selectedValue={role}
      >
      </Picker> */}
             {role === "Student" && <>
             <TextInput placeholder='Enter your  mobile number' style = {styles.inputContainer}
                onChangeText={ (e)=>{setAdmissionNumber(e)}}
                placeholderTextColor="white"
            />
            
            <TextInput placeholder='Enter your password' style = {styles.inputContainer}
                onChangeText={ (e)=>{setPassword(e)}}
                placeholderTextColor="white"

                />
           
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
          authContext.loading ?           <ActivityIndicator animating={true} color="brown" />
 : <Button title="Login" style={styles.btn} onPress={loginHandler} color="#504099"/>
        }
            </View>

            <View style={{marginVertical:18,flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
                <View>
                    <Text>Don't have an account ?</Text>
                </View>
                <PaperButton onPress= {LoginComponentHandler}>Signup here</PaperButton>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        flexDirection:"column",
        justifyContent: "flex-start",
        alignItems:"center",
        // padding: 18,
        backgroundColor:"#C3DDDD"
      },
      topContainer:{
        width:"100%",
        height:"40%",
        backgroundColor:"white",
        padding:10,
        borderBottomRightRadius:Dimensions.get("screen").width/1.2
      },
      bottomContainer:{
        width:"100%",
        height:"50%",
        padding:18
      },
    inputContainer:{
        width:"100%",
        height:50,
        backgroundColor:"#9D44C0",
        borderWidth:1,
        borderColor:"black",
        marginTop:20,
        padding:10,
        borderRadius:10,
        color:"yellow"
    },
    btn:{
        width:"100%",
        marginTop:25,
        padding:2
    }
})

export default Login;
