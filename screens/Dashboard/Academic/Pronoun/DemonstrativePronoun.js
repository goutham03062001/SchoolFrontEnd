import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const DemonstrativePronoun = () => {
  return (
    <View style={{paddingHorizontal:8}}>
    <Text style={{lineHeight:24,fontSize:16,marginBottom:10}}>A pronoun used to point out the person or thing we talk about is known as a Demonstrative Pronoun.</Text>
 
    <BoldTextHelper text="Ex :This, that, these, those, such"
      fontSize={16}
    />

    <View style={{marginVertical:15}}>
      <Text style={{fontSize:16}}>1. This is my friend’s house.</Text>
      <Text style={{fontSize:16}}>2. These are my teacher’s books.</Text>
      <Text style={{fontSize:16}}>NOTE: These words may be used as Adjectives with Nouns and they are known as Demonstrative Adjectives.</Text>
      <Text style={{fontSize:16}}>1. This house is mine.</Text>
      <Text style={{fontSize:16}}>2. These things are his.</Text>
   
    </View>
  </View>
  )
}

export default DemonstrativePronoun

const styles = StyleSheet.create({})