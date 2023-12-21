import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const InterrogativeAdjective = () => {
  return (
    <>
        <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>An adjective used to question is known as Interrogative adjective. </Text>
    
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex:What, which, whose"
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16}}>1. What advice shall I give you?</Text>
  <Text style={{fontSize:16}}>2. What language do you teach at college?</Text>
  <Text style={{fontSize:16}}>3. Which book do you want?</Text>
  <Text style={{fontSize:16}}>4. Which places do you wish to visit?.</Text>

<Text style={{fontSize:16}}>5. Whose photograph is this?</Text>
<Text style={{fontSize:16}}>6. Whose hand writing is this?</Text>
<Text style={{fontSize:16}}>7. Whose book is that?</Text>
<Text style={{fontSize:16}}>8. On whose recommendation did you apply for this post?</Text>

<Text style={{fontSize:16,marginVertical:15}}>
Here it should be remembered that a singular Demonstrative should go with a singular noun, and a plural Demonstrative with a plural Noun. Therefore we cannot write this boys or these boy.
</Text>
<Text style={{fontSize:16}}>
A certain book			certain books
</Text>
<Text style={{fontSize:16}}>
The other book			the other books
</Text>
<Text style={{fontSize:16}}>
Such a boy			such boys
</Text>
<Text style={{fontSize:16}}>
Any man			any men
</Text>
<Text style={{fontSize:16}}>
The same boy			the same boys
</Text>
  </View>
</View>
  </ScrollView>
    </>
  )
}

export default InterrogativeAdjective

const styles = StyleSheet.create({})