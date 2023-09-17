import { StyleSheet, Text, View,SafeAreaView, Pressable,Linking } from 'react-native'
import React,{useContext} from 'react'
import { Card } from 'react-native-paper';
import {AuthContext} from "../../../context/AuthContext";
const CardComponent = ({name})=>{
    const authContext = useContext(AuthContext);
    function getTodaysExamLink(){
        authContext.getQuizLink();
    }
    function gotoExamHandler(){
        return Linking.openURL(authContext && (authContext.quizExamLink[0].examLink));
    }
    return(<>
         <View style={styles.cardOuterStyle}>
        <Pressable onPress={getTodaysExamLink}>
        <Card style={{backgroundColor:"#C3DDDD"}}>
            <Card.Content>
                <Text style={{color:"blue"}}>{name}</Text>
                
            </Card.Content>
        </Card>
        </Pressable>

       
      </View>


      <View style={styles.cardOuterStyle}>
        
        <Pressable onPress={gotoExamHandler} style={{marginTop:10}}>
            

            <Card style={{backgroundColor:"#C3DDDD"}}>
            <Card.Content>
            <>
                <Text>Quiz Details</Text>
                <Text>{authContext && (authContext.quizExamLink[0].examName)}</Text>
                <Text>{authContext && (authContext.quizExamLink[0].examLink)}</Text>
                
            </>
            </Card.Content>
        </Card>
        </Pressable>
       
      </View>
     
    </>)
}
const StartingScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View>
        <CardComponent name = "Today's Quiz Exam Link"/>
        
      </View>
    </SafeAreaView>
  )
}

export default StartingScreen

const styles = StyleSheet.create({
    rootContainer:{
        marginTop:50,
        padding:10
    },
    cardOuterStyle:{
        marginTop:10,
        
    }
})