import { StyleSheet, Text, View,ScrollView,Dimensions,Image,Pressable } from 'react-native'
import React,{useContext,useEffect} from 'react'
import { Card } from 'react-native-paper';
import { AuthContext } from '../../../../context/AuthContext';
import QuizModel from './QuizModel';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const QuizExam = ({route})=>{
  const navigation = useNavigation();
  return(<>
    <QuizModel quizId={route.params.data}/>
  </>)
}
  
const DisplayQuizNames = ()=>{
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  useEffect(()=>{
    authContext.getAllQuizzes();
  },[])
  return (
    <>
  <View>
    {authContext && authContext.loading ? <Text>Loading ...</Text> : <>
    
    {authContext && authContext.quizExamsArr && (
      <>
       {/* <QuizModel quizData = {authContext && authContext.quizExamsArr}/> */}
       {authContext.quizExamsArr.map((exam,index)=>(<>
        {exam && (<Pressable key={index} style={styles.cardStyle} onPress={()=>{navigation.navigate("Quiz",{data : exam._id})}}>
          <Text>{exam._id}</Text>
        </Pressable>)}
       </>))}
      </>
      )}
    </>}
  </View>
    </>
  
  )
}
const StartingScreen = () => {
return(<>
  <Stack.Navigator> 
        <Stack.Screen
          name="Previous Paper"
          component={DisplayQuizNames}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Quiz" component={QuizExam}/>
      </Stack.Navigator>
</>)
}

export default StartingScreen

const styles = StyleSheet.create({
  cardStyle:{
    marginVertical:10,
    width:"95%",
    marginHorizontal:(Dimensions.get("screen").width)/50,
    borderRadius:1,
    elevation:1,
    padding:40,
    borderBottomColor:'green',
    borderBottomWidth:2
},
contentStyle:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"center"
}
})