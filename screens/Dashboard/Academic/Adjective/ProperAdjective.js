import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import BoldTextHelper from '../utils/BoldText';
const ProperAdjective = () => {
  return (
    <>
            <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>The adjectives formed from Proper Nouns are called Proper Adjectives.</Text>
    {/* <Text style={{fontSize:16,marginVertical:15}}>They are of two types – Definite Demonstratives and Indefinite Demonstratives. The more common Definitive Demonstratives are these.

</Text> */}
    
    <Text style={{fontSize:16,marginVertical:15}}>
    {/* <BoldTextHelper
      text="Ex: Each, every, either, neither, any, none, both,"
    /> */}
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16}}>1. Indian army.</Text>
  <Text style={{fontSize:16}}>2. French wine.</Text>
  <Text style={{fontSize:16}}>3. American culture.</Text>
  <Text style={{fontSize:16}}>4. English language.</Text>

<Text style={{fontSize:16}}>5. Shakespearean plays.</Text>
{/* <Text style={{fontSize:16}}>6. You can take either road, this or that.</Text> */}



  </View>
</View>
  </ScrollView>
    </>
  )
}

export default ProperAdjective

const styles = StyleSheet.create({})