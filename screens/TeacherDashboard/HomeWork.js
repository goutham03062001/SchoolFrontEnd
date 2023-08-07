import { View, Text,StyleSheet} from 'react-native'
import React,{useContext,useState} from 'react'
import { TextInput,Button } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
export default function HomeWork() {
  const[description,setDescription] = useState("");
  const authContext = useContext(AuthContext);
  const className = authContext.currentLoggedInFaculty && authContext.currentLoggedInFaculty.classTeacher;
  const subjectName = authContext.currentLoggedInFaculty && authContext.currentLoggedInFaculty.teachingSubject;
   function sendHomeHandler(){
   authContext.postHomeWork(className,subjectName,description);
  }
  return (
    <View style = {styles.rootContainer}>
      <TextInput label="Write about home work" 
      onChangeText={(e)=>setDescription(e)}
      mode="outlined"
      placeholder="Write about home work"
      multiline={true}
      style={{height:130}}
      />
      <Button mode="contained" style={{marginVertical:10,borderRadius:0,width:"55%"}}
      onPress={sendHomeHandler}>{authContext.loading ? "Loading" : "Send Home Work"}</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{padding:10}
})