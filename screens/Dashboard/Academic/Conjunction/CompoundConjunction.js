import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const CompoundConjunction = () => {
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 8 }}>
    <Text style={{ lineHeight: 22, fontSize: 16 }}>
    Group of words which are used as conjunctions are known as compound conjunctions.
    </Text>
    <Text style={{ marginVertical: 10, gap: 10, paddingHorizontal: 6 }}>
      <BoldTextHelper
        text="As if  / As though, Even if , As well as, As soon as, So that, As much as, In as much as, On condition that, Provided that, In order that
"
        fontSize={16}
      />

   
    </Text>

    <View style={{marginVertical:8,gap:10}}>
      <Text style={{fontSize:16}}>1. He applied for a job in order that he might help his father.</Text>
      <Text style={{fontSize:16}}>2. He spends as if he were a rich man.</Text>
      <Text style={{fontSize:16}}>3. He danced with joy as if he had won the prize.</Text>
      <Text style={{fontSize:16}}>4. He behaved as though he were a king.</Text>
      <Text style={{fontSize:16}}>5. She appears as though she were a film star.</Text>
      <Text style={{fontSize:16}}>6. As soon as I saw Madavi, I fell in love with her.</Text>
      <Text style={{fontSize:16}}>7. Madavi as well as her friend is beautiful.</Text>
      <Text style={{fontSize:16}}>8. He saved some money so that he might use it in future.</Text>
      <Text style={{fontSize:16}}>9. Even if she is beautiful, I won’t marry her.</Text>
      <Text style={{fontSize:16}}>10. I shall give the job provided that you must know typing.</Text>
      <Text style={{fontSize:16}}>11. I can lend you the money on condition that you return it in a month.</Text>
     
      </View>

 
  </View>
  </ScrollView>
  )
}

export default CompoundConjunction

const styles = StyleSheet.create({})