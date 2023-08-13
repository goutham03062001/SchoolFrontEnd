import { View, Text,StyleSheet} from 'react-native'
import React,{useContext,useState} from 'react'
import { TextInput,Button } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import { Picker } from "@react-native-picker/picker";

export default function HomeWork() {
  const[description,setDescription] = useState("");
  const [currentClass, setClass] = useState("6");

  const authContext = useContext(AuthContext);
  // const className = authContext.currentLoggedInFaculty && authContext.currentLoggedInFaculty.classTeacher;
  const subjectName = authContext.currentLoggedInFaculty && authContext.currentLoggedInFaculty.teachingSubject;
   function sendHomeHandler(){
   authContext.postHomeWork(currentClass,subjectName,description);
  }
  return (
    <View style = {styles.rootContainer}>

    <Text>Select A Class To Send HomeWork </Text>
      <Picker
      style={styles.inputContainer}
        onValueChange={(itemValue, itemIndex) => setClass(itemValue)}
        selectedValue={currentClass}>

        <Picker.Item label="10" value="10" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="6" value="6" />
      </Picker>
      <TextInput label="Write about home work" 
      onChangeText={(e)=>setDescription(e)}
      mode="outlined"
      placeholder="Write about home work"
      multiline={true}
      style={{height:130}}
      />
      <Button mode="contained" style={{marginVertical:10,borderRadius:0,width:"99%"}}
      onPress={sendHomeHandler}>{authContext.loading ? "Loading" : "Send Home Work To Class "+currentClass}</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{padding:10},
  inputContainer:{ width:"99%",
  height:50,
  backgroundColor:"white",
  borderWidth:1,
  borderColor:"black",
  marginTop:5,
  padding:5,
  borderRadius:5,
marginBottom:15}
})