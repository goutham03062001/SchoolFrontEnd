import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from './BoldTextHelper'
import { ScrollView } from 'react-native-gesture-handler'
const AdverbOfAffirmation = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      {/* <Text style={{fontSize:16,marginVertical:15}}>**Adverb of time answers the question when?	**</Text> */}
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="Yes, surely, certainly, certainly not, perhaps, definitely, really, obviously, doubtlessly, no, not, never,   "
      />
      </Text>
   

      <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
      <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
     
     
      <Text style={{marginVertical:16,fontSize:16}}>
    Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
    </Text>
      
    <Text style={{fontSize:16}}>1. Yes, he is my friend.</Text>
    <Text style={{fontSize:16}}>2. The soldier should certainly get an award for bravery.</Text>
    <Text style={{fontSize:16}}>3. He will surely give you money.</Text>
    <Text style={{fontSize:16}}>4. We are definitely leaving tomorrow.</Text>
    <Text style={{fontSize:16}}>5. Pooja doubtlessly agrees on his side</Text>
    <Text style={{fontSize:16}}>6. I would obviously feel awesome about your comment.</Text>
    <Text style={{fontSize:16}}>7. They are really staying tonight for a sleepover.</Text>
     
    <Text style={{marginVertical:16,fontSize:16}}>
    Adverbs of negation are words which declare that a given statement is false, or negative.
    </Text>
      
    <Text style={{fontSize:16}}>1. I have no money.</Text>
    <Text style={{fontSize:16}}>2. You are not my enemy.</Text>
    <Text style={{fontSize:16}}>3. I have never seen him.</Text>
    <Text style={{fontSize:16}}>4. I almost ran out of words.</Text>
    <Text style={{fontSize:16}}>5. Rani scarcely does her house duties.</Text>
    <Text style={{fontSize:16}}>6. He no longer takes interest in his work.</Text>
    <Text style={{fontSize:16}}>7. The brothers hardly ever meet each other.</Text>
    <Text style={{fontSize:16}}>8. Simran rarely visits her mom on weekends.</Text>
     

    </View>
  </View>
    </ScrollView>
  )
}

export default AdverbOfAffirmation

const styles = StyleSheet.create({})