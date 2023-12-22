import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
import { ScrollView } from 'react-native-gesture-handler'
const IndefinitePronoun = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:8}}>
    <Text style={{lineHeight:24,fontSize:16,marginBottom:10}}>A pronoun is used to talk about a person or thing indefinitely is known as Indefinite Pronoun.</Text>
 
    <BoldTextHelper text="Ex :one, everyone, everybody, someone. Somebody, anyone, anybody, no one, nobody, none, everything, something, nothing, anything, some, many, several, other, any, no other, no, few, both, few, all, another."
      fontSize={16}
    />

    <View style={{marginVertical:15}}>
     
     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>One</Text>
      <Text style={{fontSize:16}}>1. One has to be careful about one’s health.</Text>
      <Text style={{fontSize:16}}>2. One must know what one has to do.</Text>
      <Text style={{fontSize:16}}>3. One must know what one has to do.</Text>
   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>None</Text>
      <Text style={{fontSize:16}}>1. None of my parents is (or are) educated.</Text>
      <Text style={{fontSize:16}}>2. None of my sister is (or are) beautiful.</Text>   
     </View>

     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Nobody</Text>
      <Text style={{fontSize:16}}>1. Nobody helped me.</Text>
      <Text style={{fontSize:16}}>2. Nobody can be perfect in anything.</Text>   
     </View>



     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Nothing</Text>
      <Text style={{fontSize:16}}>1. Nothing is as sweet as honey.</Text>
      <Text style={{fontSize:16}}>2. Nothing has been written about his early life.</Text>   
      <Text style={{fontSize:16}}>3. Nothing can be achieved without a strong desire.</Text>   
     </View>





     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>No One</Text>
      <Text style={{fontSize:16}}>1. No one is ready to help me.</Text>
      <Text style={{fontSize:16}}>2. No one can live without money.</Text>   
     </View>




     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Some</Text>
      <Text style={{fontSize:16}}>1. Some are born great.</Text>
      <Text style={{fontSize:16}}>2. Some achieve greatness by hard work.</Text>   
      <Text style={{fontSize:16}}>3. Some failed in the exam.</Text>   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Someone</Text>
      <Text style={{fontSize:16}}>1. Someone opened the door.</Text>
      <Text style={{fontSize:16}}>2. Someone threw a stone at me.</Text>   
      <Text style={{fontSize:16}}>3. Some is calling you.</Text>   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Something</Text>
      <Text style={{fontSize:16}}>1. Something must be done about it.</Text>
      <Text style={{fontSize:16}}>2. Something should be given to the patient.</Text>   
      <Text style={{fontSize:16}}>3. Something is better than nothing.</Text>   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Any</Text>
      <Text style={{fontSize:16}}>1. Any (one) of you can do that.</Text>
      {/* <Text style={{fontSize:16}}>2. Something should be given to the patient.</Text>    */}
      {/* <Text style={{fontSize:16}}>3. Something is better than nothing.</Text>    */}
     </View>



     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Anybody</Text>
      <Text style={{fontSize:16}}>1. Anybody can speak in his mother tongue.</Text>
      <Text style={{fontSize:16}}>2. Anybody can tell you about my uncle.</Text>   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Anything</Text>
      <Text style={{fontSize:16}}>1. Have you got anything to teach us?</Text>
      <Text style={{fontSize:16}}>2. Have you brought anything for me from Delhi?</Text>   
     </View>

     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Anyone</Text>
      <Text style={{fontSize:16}}>1. Can anyone of you teach me the poem?</Text>
      <Text style={{fontSize:16}}>2. Can anyone of you tell me this address?</Text>   
     </View>

     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>All</Text>
      <Text style={{fontSize:16}}>1. All are equal in the eyes of law.</Text>
      <Text style={{fontSize:16}}>2. All of you can stay with us.</Text>   
     </View>



     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Few</Text>
      <Text style={{fontSize:16}}>1. Few escaped from the danger.</Text>
      <Text style={{fontSize:16}}>2. Few attended the function.</Text>   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Many</Text>
      <Text style={{fontSize:16}}>1. Many of us believe in God.</Text>
      <Text style={{fontSize:16}}>2. Many of the students are unmarried.</Text>   
      <Text style={{fontSize:16}}>3. Many of them passed the exam.</Text>   
      <Text style={{fontSize:16}}>4. Many of my poems are published.</Text>   
     </View>


     <View style={{marginVertical:6}}>
     <Text style={{fontSize:16}}>Several</Text>
      <Text style={{fontSize:16}}>1. Several of the girls are beautiful.</Text>
      <Text style={{fontSize:16}}>2. Several of us have faith in rebirth.</Text>   
      <Text style={{fontSize:16}}>3. Several Indians are illiterate.</Text>   
     </View>


    </View>
  </View>
    </ScrollView>
  )
}

export default IndefinitePronoun

const styles = StyleSheet.create({})