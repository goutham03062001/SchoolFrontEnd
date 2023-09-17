import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native'
import React,{useContext} from 'react'
import { Card } from 'react-native-paper';
import {AuthContext} from "../../../context/AuthContext"
const CardComponent = ({name})=>{
    const authContext = useContext(AuthContext)
    function getTodaysExamLink(){
        authContext.getQuizLink();
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
    </>)
}
const StartingScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View>
        <CardComponent name = "Today's Quiz"/>
        
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