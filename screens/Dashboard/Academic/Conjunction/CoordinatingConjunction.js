import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const CoordinatingConjunction = () => {
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 8 ,marginTop:9}}>
    <Text style={{ lineHeight: 22, fontSize: 16 }}>
    Conjunctions which are used to join together clauses of equal rank are known as coordinating conjunctions. Coordinating conjunctions are divided into four kinds, namely     </Text>
    {/* <Text style={{ marginVertical: 10, gap: 10, paddingHorizontal: 6 }}>
      <BoldTextHelper
        text="As if  / As though, Even if , As well as, As soon as, So that, As much as, In as much as, On condition that, Provided that, In order that
"
        fontSize={16}
      />

   
    </Text> */}

    <View style={{marginVertical:15,gap:10}}>
      <Text style={{fontSize:16}}>A. Cumulative or Copulative Conjunctions</Text>
      <Text style={{fontSize:16}}>B. Adversative Conjunctions</Text>
      <Text style={{fontSize:16}}>C. Disjunctive or Alternative Conjunctions		</Text>
      <Text style={{fontSize:16}}>D. Illative Conjunctions</Text>
     
      </View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>A. Cumulative or Copulative Conjunctions:</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:22}}>
    Conjunctions which are used to express a choice between two alternatives are known as Cumulative or Copulative conjunctions. 
    </Text>
    <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16}}>
      Conjunctions which are used to join statements are known as Cumulative or Copulative conjunctions.
      </Text>

      <BoldTextHelper
        text="Ex: And, so, both and, not only … but also, as well as, etc."
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. She looked and smiled at me.</Text>
        <Text style={{fontSize:16}}>2. He is my father so I respect him.</Text>
        <Text style={{fontSize:16}}>3. They both gave me money and stood by me in trouble.</Text>
        <Text style={{fontSize:16}}>4. As well as writing the letter for me, he posted it.</Text>
        <Text style={{fontSize:16}}>5. They not only invited me to the diner but also sent a car for me.</Text>
      </View>
</View>
 

 <View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>B. Adversative Conjunctions:</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:22}}>
    Conjunctions which are used to express a contrast between two statements are known as Adversative conjunctions.    </Text>
    {/* <Text style={{textAlign:"center",marginVertical:10}}>Or</Text>

      <Text style={{fontSize:16}}>
      Conjunctions which are used to join statements are known as Cumulative or Copulative conjunctions.
      </Text> */}

      <BoldTextHelper
        text="Ex: But, yet, still, only, whereas, nevertheless"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. She is beautiful but poor.</Text>
        <Text style={{fontSize:16}}>2. You are intelligent still you have to work hard.</Text>
        <Text style={{fontSize:16}}>3. He beats his wife yet he loves her.</Text>
        <Text style={{fontSize:16}}>4. As well as writing the letter for me, he posted it.</Text>
        <Text style={{fontSize:16}}>5. They not only invited me to the diner but also sent a car for me.</Text>
      </View>
</View>
  </View>
  </ScrollView>
  )
}

export default CoordinatingConjunction

const styles = StyleSheet.create({})