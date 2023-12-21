import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const AdjectiveOfQuantity = () => {
  return (
   <>
    <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      <Text style={{fontSize:16,marginVertical:15}}>An adjective used to talk about the quantity of things is known as adjective of quantity.</Text>
     
      <Text style={{fontSize:16,marginVertical:15}}>These adjectives are always applied to Uncountable Nouns in the Singular Number. The nouns which they qualify can never be in the Plural Number.</Text>
      
      <Text style={{fontSize:16,marginVertical:15}}>
      <BoldTextHelper
        text="Little, less, much, enough, no, none, any, whole, some, all, great, half, sufficient, a good deal of, a lot of, plenty of, a kilo, a pound, a ton, a quintal, a liter, a meter, "
      />
      </Text>
      
    <Text style={{fontSize:16}}>1. This is all the milk in the cup.	</Text>
    <Text style={{fontSize:16}}>2. There is enough sugar for the evening tea.</Text>
    <Text style={{fontSize:16}}>3. There is no bread in the cupboard.</Text>
    <Text style={{fontSize:16}}>4. There is one liter milk in the jug.</Text>
    <Text style={{fontSize:16}}>5. There is a little milk in the jug.</Text>
    <Text style={{fontSize:16}}>6. My father earned enough money.</Text>
    <Text style={{fontSize:16}}>7. He showed much courage in the war.</Text>
    </View>
  </View>
   </>
  )
}

export default AdjectiveOfQuantity

const styles = StyleSheet.create({})