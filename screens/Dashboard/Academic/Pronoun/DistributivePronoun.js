import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const DistributivePronoun = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal:8}}>
  <Text style={{lineHeight:24,fontSize:16,marginBottom:10}}>A pronoun used to talk about each and every person separately is known as Distributive Pronoun.</Text>

  <BoldTextHelper text="EX: each, every, any, one, everyone, everybody, none, everything, either, neither, both"
    fontSize={16}
  />

  <View style={{marginVertical:15}}>
   
   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16}}>Each</Text>
   <Text style={{fontSize:16,marginVertical:8}}>
   “Each” refers to every one of a number of persons or things taken separately. Each means each without exception. Each is used in speaking about two or more things and it is used to pay attention to the individuals forming a group. Each is used if the number in the group is limited and definite.
   </Text>

    <Text style={{fontSize:16}}>1. Each of us has a book.</Text>
    <Text style={{fontSize:16}}>2. Each should love his own country. </Text>
 
   </View>


   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>Every : is used only in speaking more than two and when the number is indefinite.</Text>
    <Text style={{fontSize:16}}>1. Every (one) of the Indians is brave.</Text>
    <Text style={{fontSize:16}}>2. Every (one) of the citizens should defend his mother land.</Text>   
   </View>

   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>Everybody: it is used with a singular Verb.</Text>
    <Text style={{fontSize:16}}>1. Everybody house in the house was hungry.</Text>
    <Text style={{fontSize:16}}>2. Everybody is interested in his own welfare.</Text>
   </View>


   
   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>Everyone: it is used with a singular Verb.</Text>
    <Text style={{fontSize:16}}>1. Everyone cheated me.</Text>
    <Text style={{fontSize:16}}>2. Everyone in the theatre clapped with joy.</Text>
   </View>



   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>Everything: it is used with a singular Verb.</Text>
    <Text style={{fontSize:16}}>1. Everything was lost in the war.</Text>
    <Text style={{fontSize:16}}>2. She lost everything in life.</Text>   
   </View>



   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>Either: Either means the one or the other of the two and it is used only in speaking about two persons or things.</Text>
    <Text style={{fontSize:16}}>1. Either of my two sisters is beautiful.</Text>
    <Text style={{fontSize:16}}>2. Either of you can answer my question.</Text>   
   </View>

   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>Neither:  Neither means not the one or the other of the two and it is the negative of the either. It is used to talk about only two persons or things.</Text>
    <Text style={{fontSize:16}}>1. Neither of my parents is educated.</Text>
    <Text style={{fontSize:16}}>2. Neither of us passed the exam.</Text>   
   </View>


   
   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>None: it is used with a singular Verb to talk about more than two persons or things.</Text>
    <Text style={{fontSize:16}}>1. None of the girls is married.</Text>
    <Text style={{fontSize:16}}>2. None of my stories was (or were) published.</Text>   
    <Text style={{fontSize:16,marginVertical:9}}>
      
NOTE: Technically speaking, the word none is used with a plural Verb but a singular Verb is preferable. It doesn’t matter whether the verb is singular or plural but the sentence must be consistent.

    </Text>   
   </View>

   <View style={{marginVertical:6}}>
   <Text style={{fontSize:16,marginVertical:10}}>Any: it is used to talk about more than two persons or things. </Text>
    <Text style={{fontSize:16}}>1. Any (one) of the books will tell you about India.</Text>
    <Text style={{fontSize:16}}>2. Any (one) of my sisters can marry you.</Text>   
   </View>

  </View>
</View>
  </ScrollView>
  )
}

export default DistributivePronoun

const styles = StyleSheet.create({})