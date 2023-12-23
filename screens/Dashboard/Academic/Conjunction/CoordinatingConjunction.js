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



<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>C. Disjunctive or Alternative Conjunctions</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:22}}>
    Conjunctions which are used to express a choice between two alternatives are known as Disjunctive or Alternative conjunctions.    
    </Text>
    

      <BoldTextHelper
        text="Ex: Or, nor, either - or, neither- nor, whether – or, else"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. I don’t know whether he has gone or not.</Text>
        <Text style={{fontSize:16}}>2. I doubt whether he will help me or not.</Text>
        <Text style={{fontSize:16}}>3. Whether he will help me or not is a doubtful.</Text>
        <Text style={{fontSize:16}}>4. I am not sure whether she gets the job or she will have to continue teaching. </Text>
        <Text style={{fontSize:16}}>5. You must tell the truth or I can’t help you.</Text>
        <Text style={{fontSize:16}}>6. She is neither a teacher nor a typist.</Text>
        <Text style={{fontSize:16}}>7. She neither loved him nor liked to marry him.</Text>
        <Text style={{fontSize:16}}>8. You must either return my mother or sell your home to me.</Text>
        <Text style={{fontSize:16}}>9. You must do the work sincerely else you will lose the job.</Text>
      
      
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>D. Illative Conjunctions</Text>
    <Text style={{marginTop:10,fontSize:16,lineHeight:22}}>
    Conjunctions which are used to express an inference are known as Illative conjunctions.    </Text>
    

      <BoldTextHelper
        text="Ex: For, since, so, therefore, consequently"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. I loved Madavi for she is very beautiful.</Text>
        <Text style={{fontSize:16}}>2. Since you have money, you can help him.</Text>
        <Text style={{fontSize:16}}>3. He is poor so he cannot visit America.</Text>
        <Text style={{fontSize:16}}>4. He is my enemy therefore I dislike him. </Text>
        <Text style={{fontSize:16}}>5. I have never seen him since his father died.</Text>
        <Text style={{fontSize:16}}>6. You can have apples or grapes.</Text>
        <Text style={{fontSize:16}}>7. You can go to Kanpur or luck now.</Text>
        <Text style={{fontSize:16}}>8. Many new developments have taken place since I left home.</Text>
        <Text style={{fontSize:16}}>9. My father died last year consequently we faced several problems.</Text>
      
      
      </View>
</View>
  </View>
  </ScrollView>
  )
}

export default CoordinatingConjunction

const styles = StyleSheet.create({})