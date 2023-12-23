import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react';
const SimplifiedComponent = ({sentence})=>{
  const sen = sentence.split(",");

  return(<>
   {sen.map((word,index)=>{
    return(<View key={index}>
      <Text key={index} style={{fontSize:16}}>{sen[index]}</Text>
    </View>)
   })}
  </>)
}
const FormsOfPreposition = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal:8}}>
      <Text style={{fontSize:16,marginVertical:10}}>A Preposition has the following forms—</Text>

      <Text style={{fontSize:16,lineHeight:24}}>
      A. Simple Prepositions—Prepositions of one word are called Simple Prepositions. As— 
      </Text>
      <Text style={{fontSize:16,lineHeight:24,marginVertical:10}}>
Ex: In, of, to, at, by, for, from, off, on, out, through, till, up, with, down.

      </Text>



      <Text style={{fontSize:16,lineHeight:24}}>
      B. Compound Prepositions—Prepositions formed by adding a Prefix to a Noun, Adjective or Adverb are called Compound Prepositions. Outwardly they look like one-word Prepositions, but in fact they are compound words. As— 
      </Text>
      <Text style={{fontSize:16,lineHeight:24,marginVertical:10}}>
      Ex: About, above, across, along, amidst, among, amongst, around, before, behind, below, beneath, beside, between, beyond, inside, outside, underneath, within, without.
      </Text>



      
      <Text style={{fontSize:16,lineHeight:24}}>
      C. Phrase Prepositions—Some Phrases also serve as Single Prepositions. As—
      </Text>
      <View style={{marginTop:8}}>
      <SimplifiedComponent
        sentence=" Ex: According to, 
in consequence of,
agreeably to ,
in course of,
along with ,
in favour of,
away from ,
in front of,
because of ,
in lieu of,
by dint of ,
in order to,
by means of ,
in place of,
by reason of ,
in reference to,
by virtue of ,
in regard to,
by way of ,
in spite of,
conformably to,
instead of,
for the sake of ,
in the event of,
in accordance with ,
on account of,
in addition to ,
owing to,
in (on) behalf of ,
with a view to,
in case of ,
with an eye to,
in comparison to ,
with reference to,
in compliance with ,
with regard to"
      />
      </View>

      <Text style={{fontSize:16,lineHeight:24,marginVertical:10}}>
      4. Participle Prepositions—Some Present Participles are also used as Prepositions. As—
Concerning, considering, barring, during, notwithstanding, pending, regarding, respecting, touching.

      </Text>

    </View>

    <View style={{paddingHorizontal:8}}>

    </View>
    </ScrollView>
  )
}

export default FormsOfPreposition

const styles = StyleSheet.create({})