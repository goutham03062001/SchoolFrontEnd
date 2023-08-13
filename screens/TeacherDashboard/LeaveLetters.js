import { View, Text,StyleSheet } from 'react-native'
import React,{useEffect,useContext,useState} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Card,Divider,List } from 'react-native-paper';
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
            <List.Section>
              
              <List.Accordion title={`View Letter From ${letter.AdmissionNumber}`}>
                <View style={{gap:19,paddingLeft:15}}>
                <Text style={{lineHeight:30}}>Reason - {letter.reason}</Text>
                <Divider/>

                <Text>From - {letter.from}</Text>
                <Divider/>

                <Text>To - {letter.to}</Text>
                </View>
              </List.Accordion>
            </List.Section>
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