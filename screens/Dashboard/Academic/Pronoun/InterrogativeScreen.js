import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const InterrogativeScreen = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:8}}>
    <Text style={{lineHeight:24,fontSize:16,marginBottom:10}}>A pronoun used to make a question is known as an Interrogative Pronoun.</Text>
 
    <BoldTextHelper text="EX: who, whose, which, whom, what"
      fontSize={16}
    />

    <View style={{marginVertical:15}}>
     
     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Who</Text>
      <Text style={{fontSize:16}}>1. Who was the first Prime Minister of India?</Text>
      <Text style={{fontSize:16}}>2. Who is known as the Father of the Nation? </Text>
   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Whom</Text>
      <Text style={{fontSize:16}}>1. Whom do you want to see?</Text>
      <Text style={{fontSize:16}}>2. Whom do you wish to marry?</Text>   
     </View>

     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Whose</Text>
      <Text style={{fontSize:16}}>1. Whose are these books?</Text>
     </View>



     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Which</Text>
      <Text style={{fontSize:16}}>1. Which is the longest river in India?</Text>
      <Text style={{fontSize:16}}>2. Which is the tallest building in India?</Text>   
     </View>





     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>What</Text>
      <Text style={{fontSize:16}}>1. What do you expect me to do?</Text>
      <Text style={{fontSize:16}}>2. What can I give you?</Text>   
      <Text style={{fontSize:16}}>3. What is she? She is a teacher.</Text>   
      <Text style={{fontSize:16}}>4. Who is she? She is Rani.</Text>   
     
      <Text style={{fontSize:16}}>
        <BoldTextHelper text="What + be + like: It is used to make a request for a description."/>
      </Text>
      <Text style={{fontSize:16}}>1. What is the day like? The day is very hot.</Text>
      <Text style={{fontSize:16}}>2. What is she like? She is clever and beautiful with pleasant manner.</Text>

     </View>

    </View>
  </View>
    </ScrollView>
  )
}

export default InterrogativeScreen

const styles = StyleSheet.create({})