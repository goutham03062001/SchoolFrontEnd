import { StyleSheet, Text, View,SafeAreaView, Pressable,Linking,Image } from 'react-native'
import React,{useContext} from 'react'
import { Card } from 'react-native-paper';
import {AuthContext} from "../../../context/AuthContext";
import { useNavigation } from '@react-navigation/native';

const CardComponent = ({name})=>{
    const authContext = useContext(AuthContext);
    const navigation = useNavigation();
    function getTodaysExamLink(){
        authContext.getQuizLink();
    }
    function gotoExamHandler(){
      console.log("Redirecting to exam");
      
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
                {/* <Text>{authContext && authContext.quizExamLink && (authContext.quizExamLink[0].examName)}</Text> */}

                  {authContext && authContext.quizExamLink[0] ? <>
                   <Text style={{paddingVertical:20}}>
                   {authContext.quizExamLink[0].examName && authContext.quizExamLink[0].examName}
                   </Text>
                   <Text style={{color:"blue"}}>
                   {authContext.quizExamLink[0].examLink && authContext.quizExamLink[0].examLink}
                   </Text>
                  </> : <></>}                
                  </>
            </Card.Content>
        </Card>
        </Pressable>
       
      </View>
     
    </>)
}
const StartingScreen = () => {
    const authContext = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View>
      
      {
        authContext && authContext.loading ? <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
        <Image source={require("../../../assets/SplashAnimated.gif")}
          style={{width:150,height:100}}
        />
        <Text>Loading</Text>
        </View> : <>
  <CardComponent name = "Click here to get today's exam link"/>
        </>
      }        
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