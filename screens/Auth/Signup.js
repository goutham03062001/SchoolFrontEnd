import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert ,Image, Dimensions} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { Button as PaperButton,ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
const Signup = () => {
  const [mobile, setMobile] = useState("");
  const [AdmissionNumber, setAdmissionNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);

  async function signupHandler() {
    console.log("Current Role : "+role);
    if (role === "Student") {
      if (        
        AdmissionNumber === "" ||
        password === ""
      ) {
        return Alert.alert(
          "Required All Fields",
          "please fill all the details"
        );
      }
      else{
        authContext.signup(AdmissionNumber,password,role);
      }
    } 
    if(role==="Teacher"){
      if(mobile === "" || password ===""){
        return Alert.alert(
          "Required All Fields",
          "please fill all the details" 
        );
      }else{
        //Faculty signup
        authContext.facultySignup(mobile,password,role);
      }
    }
    
    
    // Alert.alert("Your credentials",name + " "+mobile+" "+age)
    // await AsyncStorage.setItem("mobile",mobile);
    // authContext.signup(mobile);
  }
  function LoginComponentHandler() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.rootContainer}>
     <View style={styles.topContainer}>
     {/* <Text style={{textAlign:'center',paddingVertical:10,fontSize:18,color:"#8338ec"}}>CREATE NEW ACCOUNT </Text> */}
      <Image source={require("../../assets/SignupImage.png")} style = {{width : "90%",height:"95%"}}/>
     </View>
      <View style={styles.bottomContainer}>
      {/* <Picker
        style={styles.inputContainer}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        selectedValue={role}
        placeholderTextColor="white"
      >
        <Picker.Item label="Student" value="Student" />
        <Picker.Item label="Teacher" value="Teacher" />
        <Picker.Item label="Principal" value="Principal" />
      </Picker> */}
     
      {role === "Student" && (
        <>
        <TextInput
          placeholder="Enter your admission number"
          style={styles.inputContainer}
          placeholderTextColor="white"

          onChangeText={(e) => {
            setAdmissionNumber(e);
          }}
        />

      <TextInput
        placeholder="Create your password"
        style={styles.inputContainer}
        placeholderTextColor="white"

        onChangeText={(e) => {
          setPassword(e);
        }}
      />
        </>
      )}
     
      {/* {role === "Teacher" && (<>
        <TextInput
          placeholder="Enter your mobile number"
          placeholderTextColor="white"

          style={styles.inputContainer}
          onChangeText={(e) => {
            setMobile(e);
          }}
        />

      <TextInput
        placeholder="Create your password"
        placeholderTextColor="white"

        style={styles.inputContainer}
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
      </>)}


      {role === "Principal" && (<>
        <TextInput
          placeholder="Enter your mobile number"
          style={styles.inputContainer}
          placeholderTextColor="white"

          onChangeText={(e) => {
            setMobile(e);
          }}
        />

      <TextInput
        placeholder="Create your password"
        placeholderTextColor="white"

        style={styles.inputContainer}
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
      </>)} */}

      <View style={styles.btn}>
        {
          authContext.loading ? <>
          <ActivityIndicator animating={true} color="brown" />

          </> : <Button title="Signup"  onPress={signupHandler} color="#504099"
          />
        }
      </View>

      <View
        style={{
          marginVertical: 18,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text>Already have an account ?</Text>
        </View>
        <PaperButton onPress={LoginComponentHandler}>Login here</PaperButton>
      </View>
      </View>
    </View>
  );
};

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
  inputContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#9D44C0",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 20,
    padding: 5,
    borderRadius: 5,
    color:"white"
  },
  btn: {
    width: "100%",
    marginTop: 20,
    padding: 5,
    
    
  },
 
});

export default Signup;
