import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const EmphasizingAdjective = () => {
  return (
    <>
            <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>An adjective used to emphasize a noun is known as Emphasizing adjective.</Text>
    {/* <Text style={{fontSize:16,marginVertical:15}}>They are of two types – Definite Demonstratives and Indefinite Demonstratives. The more common Definitive Demonstratives are these.

</Text> */}
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex: Own, very"
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16}}>1. I saw it with my own eyes.</Text>
  <Text style={{fontSize:16}}>2. His own book was lost.</Text>
  <Text style={{fontSize:16}}>3. That was the very book I was looking for. </Text>
  <Text style={{fontSize:16}}>4. This happened before my very eyes.</Text>



  </View>
</View>
  </ScrollView>
    </>
  )
}

export default EmphasizingAdjective

const styles = StyleSheet.create({})