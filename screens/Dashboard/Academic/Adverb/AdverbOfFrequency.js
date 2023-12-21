import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdverbOfFrequency = () => {
  return (
    <>
     <View style={{paddingHorizontal:7}}>
      <View>
        {/* collective noun */}
        <Text style={{fontSize:17,marginVertical:20}}>Adverb of Frequency</Text>

        <Text style={{fontSize:16,marginVertical:15}}>An adverb used to show how often an action is done is known as an adverb of Frequency.</Text>
        <Text style={{fontSize:16,marginVertical:15}}>**Adverb of frequency answers the question how often?</Text>
        
        <Text style={{fontSize:16,marginVertical:15}}>
        <BoldTextHelper
          text="Ex: Once, twice, thrice, often, always, occasionally, frequently, seldom, sometimes, rarely, firstly, secondly, never, again, usually, generally, almost, already, hardly, nearly, just, quite. "
        />
        </Text>


        <Text style={{fontSize:16}}>1. They talked to each other again.</Text>
        <Text style={{fontSize:16}}>2. I just saw him at the gate.</Text>
        <Text style={{fontSize:16}}>3. He has already finished his home work.</Text>
        <Text style={{fontSize:16}}>4. He has rarely been coming to me.</Text>
        <Text style={{fontSize:16}}>5. We usually go there.	</Text>
        <Text style={{fontSize:16}}>6. We visited Thirupathi twice.</Text>
        <Text style={{fontSize:16}}>7. They never go to films.</Text>        
      </View>
    </View> 
    </>
  )
}

export default AdverbOfFrequency

const styles = StyleSheet.create({})