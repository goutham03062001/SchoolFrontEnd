import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const ReflexivePronoun = () => {
  return (
    <View style={{paddingHorizontal:8}}>
      <Text style={{lineHeight:24,fontSize:16,marginBottom:10}}>A pronoun used with self or selves to reflect the action of the very on the subject is known as a Reflexive Pronoun.</Text>
   
      <BoldTextHelper text="Ex : Myself, ourselves, yourself, yourselves, himself, herself, itself, themselves."
        fontSize={16}
      />

      <View style={{marginVertical:15}}>
        <Text style={{fontSize:16}}>1. I saw myself in the mirror.</Text>
        <Text style={{fontSize:16}}>2. We hurt ourselves.</Text>
        <Text style={{fontSize:16}}>3. You must know yourself.</Text>
      </View>
    </View>
  )
}

export default ReflexivePronoun

const styles = StyleSheet.create({})