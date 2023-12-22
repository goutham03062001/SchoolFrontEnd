import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const EmphaticPronoun = () => {
  return (
    <View style={{paddingHorizontal:8}}>
      <Text style={{lineHeight:24,fontSize:16,marginBottom:10}}>A pronoun used for the sake of emphasis is known as Emphatic Pronoun.</Text>
   
      <BoldTextHelper text="Ex :Myself, ourselves, yourself, yourselves, himself, herself, itself, themselves"
        fontSize={16}
      />

      <View style={{marginVertical:15}}>
        <Text style={{fontSize:16}}>1. I myself showed you the way.</Text>
        <Text style={{fontSize:16}}>2. You yourself can explain it to me.</Text>
        <Text style={{fontSize:16}}>3. She herself washed her clothes.</Text>
      </View>
    </View>
  )
}

export default EmphaticPronoun

const styles = StyleSheet.create({})