import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdjectiveOfNumber = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>An adjective used to talk about the number of things or persons is known as Adjective of number.</Text>
    
    <Text style={{fontSize:16,marginVertical:15}}>An adjective which describe the merits or demerits, shape and size, colour and form, good qualities and bad ones, of a person or a thing are called Descriptive or Qualitative Adjectives</Text>
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex: : One, two, three, first, second, few, a few, no, all, some, many, most, several, any, a, an, a lot of, a number of, a heap of, plenty of, etc."
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
    */}
   
    <Text style={{marginVertical:16,fontSize:16}}>
    These Adjectives are always applied to countable things in both Singular and Plural Numbers. Among these, those which refer to definite Numbers (as one / two / three) are called Definite Numeral Adjectives, and those which refer to indefinite number (as many, several, few, etc) are called Indefinite Numeral Adjectives.
  </Text>
    
  <Text style={{fontSize:16}}>1. She wrote six papers for her B.A.</Text>
  <Text style={{fontSize:16}}>2. Only a few people are kind to the Poor.</Text>
  <Text style={{fontSize:16}}>3. I got first class in my B.A.</Text>
  <Text style={{fontSize:16}}>4. All students passed in the exam.</Text>
  <Text style={{fontSize:16}}>5. She has many books.</Text>
  <Text style={{fontSize:16}}>6. They have several houses.</Text>
  <Text style={{fontSize:16}}>7. There are no workers.</Text>
   
 
    
 

  </View>
</View>
  </ScrollView>
  )
}

export default AdjectiveOfNumber

const styles = StyleSheet.create({})