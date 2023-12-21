import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdverbsOfQuantityOrDegree = () => {
  return (
  <>
    <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}
      <Text style={{fontSize:17,marginVertical:20}}>Adverbs of Quantity or Degree </Text>

      <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show how much or in what degree or to what extent an action is done is known as an adverb of degree.</Text>
      {/* <Text style={{fontSize:16,marginVertical:15}}>Adverb of manner answers the question ‘how’?</Text> */}
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="Very, rather, fairly, quite, too, almost, hardly, fully, enough, so, no, pretty, pretty well, any, partly, much, wholly, as …. As, badly, truly, just, "
      />
      </Text>


      <Text style={{fontSize:16}}>1. He speaks English fluently.</Text>
      <Text style={{fontSize:16}}>2. It was very tragic.</Text>
      <Text style={{fontSize:16}}>3. They were fully prepared.</Text>
      <Text style={{fontSize:16}}>4. You are partly right.</Text>
      <Text style={{fontSize:16}}>5. She is entirely wrong.</Text>
      <Text style={{fontSize:16}}>6. He is utterly wrong.</Text>
      <Text style={{fontSize:16}}>7. It is too hard.	</Text>
      <Text style={{fontSize:16}}>8. These mangoes are almost ripe.</Text>
         </View>
  </View>
  </>
  )
}

export default AdverbsOfQuantityOrDegree

const styles = StyleSheet.create({})