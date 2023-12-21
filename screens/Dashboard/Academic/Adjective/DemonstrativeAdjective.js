import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const DemonstrativeAdjective = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>An adjective used to point out which person or thing we speak about is known as demonstrative adjective. </Text>
    <Text style={{fontSize:16,marginVertical:15}}>They are of two types – Definite Demonstratives and Indefinite Demonstratives. The more common Definitive Demonstratives are these.

</Text>
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex:This, that, these, those, any, such, some"
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16}}>1. This book is very interesting.</Text>
  <Text style={{fontSize:16}}>2. That girl is very beautiful.</Text>
  <Text style={{fontSize:16}}>3. These flowers are lovely.</Text>
  <Text style={{fontSize:16}}>4. Those books are not mine.</Text>

<Text style={{fontSize:16}}>Indefinite Demonstratives are these – any, some, such, other, any other, a certain, etc.</Text>

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
  )
}

export default DemonstrativeAdjective

const styles = StyleSheet.create({})