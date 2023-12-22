import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText';
const ExclamatoryAdjective = () => {
  return (
   <>
          <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>The word” what “is known as an Exclamatory Adjective.</Text>
    {/* <Text style={{fontSize:16,marginVertical:15}}>They are of two types – Definite Demonstratives and Indefinite Demonstratives. The more common Definitive Demonstratives are these.

</Text> */}
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex: What"
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16}}>1. What a beauty! </Text>
  <Text style={{fontSize:16}}>2. What an insult!</Text>
  <Text style={{fontSize:16}}>3. What a tragedy!</Text>
  <Text style={{fontSize:16}}>4. What nonsense this is!</Text>


  </View>
</View>
  </ScrollView>
   </>
  )
}

export default ExclamatoryAdjective

const styles = StyleSheet.create({})