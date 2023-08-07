import { View, Text,StyleSheet } from 'react-native'
import React,{useEffect,useContext,useState} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
const LeaveLetters = () => {
  const authContext = useContext(AuthContext);
  const [leaveLettersData,setLeaveLettersData] = useState([{}])
  let className = authContext && authContext.currentLoggedInFaculty.classTeacher;
  useEffect(()=>{
    async function loadFun(){
      console.log("className"+className);
 authContext.getLeaveLettersByClassName(className);
    setLeaveLettersData(authContext.currentLeaveLettersByClassName);
    }
    loadFun();
  },[className]);
  return (
    <ScrollView>
      <View style = {styles.rootContainer}>
      <Text style={{marginVertical:18,textAlign:'center'}}>You have received  - {authContext.currentLeaveLettersByClassName.length} letters </Text>
      <View style = {{gap:10}}>
      { authContext.currentLeaveLettersByClassName && authContext.currentLeaveLettersByClassName.map((letter)=>(<>
        <>
          <Card style = {{backgroundColor:"white", borderRadius:0,elevation:5,padding:5}}>
            <Card.Content style = {{gap:18,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
            <View style = {{gap:20}}>
              <Text style = {{color:"blue"}}>Student Id  </Text>
              <Text style = {{color:"green"}}>Reason  </Text>
              <Text style = {{color:"red"}}>From  </Text>
              <Text style = {{color:"orange"}}>To </Text>
            </View>
            <View style = {{gap:20}}>
              <Text>-</Text>
              <Text>-</Text>
              <Text>-</Text>
              <Text>-</Text>
            </View>
            <View style = {{gap:20}}>
              <Text style = {{color:"blue"}}>{letter.AdmissionNumber}</Text>
              <Text style={{color:"green"}}>{letter.reason}</Text>
              <Text style = {{color:"red"}}>{letter.from}</Text>
              <Text style = {{color:"orange"}}>{letter.to}</Text>
            </View>
            </Card.Content>
          </Card>
        </>
      </>))}
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    padding : 5
  }
})
export default LeaveLetters