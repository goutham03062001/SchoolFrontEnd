import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert,ActivityIndicator } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { Button as PaperButton } from "react-native-paper";
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
      <Text>Signup</Text>
      <Picker
        style={styles.inputContainer}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        selectedValue={role}
      >
        <Picker.Item label="Student" value="Student" />
        <Picker.Item label="Teacher" value="Teacher" />
        <Picker.Item label="Principal" value="Principal" />
      </Picker>
     
      {role === "Student" && (
        <>
        <TextInput
          placeholder="Enter your admission number"
          style={styles.inputContainer}
          onChangeText={(e) => {
            setAdmissionNumber(e);
          }}
        />

      <TextInput
        placeholder="Create your password"
        style={styles.inputContainer}
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
        </>
      )}
     
      {role === "Teacher" && (<>
        <TextInput
          placeholder="Enter your mobile number"
          style={styles.inputContainer}
          onChangeText={(e) => {
            setMobile(e);
          }}
        />

      <TextInput
        placeholder="Create your password"
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
          onChangeText={(e) => {
            setMobile(e);
          }}
        />

      <TextInput
        placeholder="Create your password"
        style={styles.inputContainer}
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
      </>)}

      <View style={styles.btn}>
        {
          authContext.loading ? <Button title="Loading...." style={styles.btn} /> : <Button title="Signup" style={styles.btn} onPress={signupHandler} />
        }
      </View>

      <View
        style={{
          marginVertical: 18,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View>
          <Text>Already have an account ?</Text>
        </View>
        <PaperButton onPress={LoginComponentHandler}>Login here</PaperButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  inputContainer: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 30,
    padding: 5,
    borderRadius: 5,
  },
  btn: {
    width: "90%",
    marginTop: 28,
    padding: 2,
  },
});

export default Signup;
