import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";

const CorrelativeConjunction = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 8 }}>
      <Text style={{ lineHeight: 22, fontSize: 16 }}>
        Conjunctions which are used in pairs are known as correlative
        conjunctions.
      </Text>
      <Text style={{ marginVertical: 10, gap: 10, paddingHorizontal: 6 }}>
        <BoldTextHelper
          text="Either – or, 
Neither – nor, 
Both – and, 
Al/though – yet, 
Whether – nor, 
Not only – but also, 
So – that, 
Such – that, 
Such – as, 
As - as, 
Not so – as, 
As – so, 
Hardly – when, 
Scarcely – when, 
No sooner – than, 
* Lest – should
"
          fontSize={16}
        />

     
      </Text>

      <View style={{marginVertical:8,gap:10}}>
        <Text style={{fontSize:16}}>1. Madavi is either a typist or a teacher.</Text>
        <Text style={{fontSize:16}}>2. She can speak neither English nor Hindi.</Text>
        <Text style={{fontSize:16}}>3. He is as much greatly as miserable.</Text>
        <Text style={{fontSize:16}}>4. He not only wrote but also sang it well.</Text>
        <Text style={{fontSize:16}}>5. Such was her reply that I never expected.</Text>
        <Text style={{fontSize:16}}>6. Vijaya is as beautiful as her sister.</Text>
        <Text style={{fontSize:16}}>7. Even if she is selfish, I will help her.</Text>
        <Text style={{fontSize:16}}>8. As you work, so the result is.</Text>
        <Text style={{fontSize:16}}>9. He went to Agra so that he might see his sister.</Text>
        <Text style={{fontSize:16}}>10. I had hardly reached home when the phone began ringing.</Text>
        <Text style={{fontSize:16}}>11. I don’t know whether she will marry him or continue her studies.</Text>
        <Text style={{fontSize:16}}>12. She had scarcely returned home when someone knocked at the door.</Text>
        <Text style={{fontSize:16}}>13. We had no sooner started for Hyderabad than our uncle arrived.</Text>
        <Text style={{fontSize:16}}>14. Though he tried to convince his wife, (yet) she was not happy with his words.</Text>
       
        </View>

        <View style={{marginVertical:18}}>
          <Text>Note : Position of Correlatives</Text>

          <Text style={{fontSize:16}}>
          If the first part of the pair is used before a noun, the second part should also be used before a noun, not before a verb, adjective or adverb.
          </Text>

          <Text style={{fontSize:16,marginVertical:10}}>
          Likewise, if the first part is used before a verb, adjective or adverb, the second part should also be used accordingly.
          </Text>
        </View>

        <View style={{marginVertical:18}}>
          <Text style={{fontSize:16}}>1. Either my father or my brother, or my uncle will help me in my hour of need. </Text>
          <Text style={{fontSize:16}}>2. He is neither strong nor courageous.</Text>
          <Text style={{fontSize:16}}>3. I shall either read or write a story.</Text>
          <Text style={{fontSize:16}}>4. He will not only encourage you but also help you.</Text>
        </View>

        <View>
          <Text style={{fontSize:16}}>
          The above noted correlative conjunctions are not only used in pairs but the position of their use in a sentence is also governed by some rules.
          </Text>
        </View>
    </View>
    </ScrollView>
  );
};

export default CorrelativeConjunction;

const styles = StyleSheet.create({});
