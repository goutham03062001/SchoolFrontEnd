import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const DistributiveAdjective = () => {
  return (
    <>
        <ScrollView>
    <View style={{paddingHorizontal:7}}>
  <View>
    {/* collective noun */}

    <Text style={{fontSize:16,marginVertical:15}}>An adjective used to refer to each and every person or thing separately is known as Distributive adjective.</Text>
    {/* <Text style={{fontSize:16,marginVertical:15}}>They are of two types – Definite Demonstratives and Indefinite Demonstratives. The more common Definitive Demonstratives are these.

</Text> */}
    
    <Text style={{fontSize:16,marginVertical:15}}>
    <BoldTextHelper
      text="Ex: Each, every, either, neither, any, none, both,"
    />
    </Text>
 

    {/* <Text style={{fontSize:16}}>1. I shall certainly help you.</Text>
    <Text style={{fontSize:16}}>2. Ramya is obviously very clever.</Text>
   
   
    <Text style={{marginVertical:16,fontSize:16}}>
  Adverbs of affirmation are words which declare that a given statement or fact is true, or positive.
  </Text> */}
    
  <Text style={{fontSize:16}}>1. Each boy was awarded a diploma.</Text>
  <Text style={{fontSize:16}}>2. Every Indian is entitled to adult franchise.</Text>
  <Text style={{fontSize:16}}>3. Every citizen should love his mother land.</Text>
  <Text style={{fontSize:16}}>4. Neither party has got majority in the recent elections.</Text>

<Text style={{fontSize:16}}>5. Neither country accepted the treaty.</Text>
<Text style={{fontSize:16}}>6. You can take either road, this or that.</Text>



  </View>
</View>
  </ScrollView>
    </>
  )
}

export default DistributiveAdjective

const styles = StyleSheet.create({})