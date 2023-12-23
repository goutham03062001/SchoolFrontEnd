import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import BoldTextHelper from '../utils/BoldText'
const SubordinatingConjunction = () => {
  return (
    <ScrollView>
    <View style={{ paddingHorizontal: 8 ,marginTop:9}}>
    <Text style={{ lineHeight: 22, fontSize: 16 }}>
    Conjunctions which are used to join clauses of unequal rank are known as Subordinating conjunctions.
        </Text>
    {/* <Text style={{ marginVertical: 10, gap: 10, paddingHorizontal: 6 }}>
      <BoldTextHelper
        text="As if  / As though, Even if , As well as, As soon as, So that, As much as, In as much as, On condition that, Provided that, In order that
"
        fontSize={16}
      />

   
    </Text> */}

    {/* <View style={{marginVertical:15,gap:10}}>
      <Text style={{fontSize:16}}>A. Cumulative or Copulative Conjunctions</Text>
      <Text style={{fontSize:16}}>B. Adversative Conjunctions</Text>
      <Text style={{fontSize:16}}>C. Disjunctive or Alternative Conjunctions		</Text>
      <Text style={{fontSize:16}}>D. Illative Conjunctions</Text>
     
      </View> */}

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,marginVertical:10}}>A. Time</Text>
    

      <BoldTextHelper
        text="Ex: 
        Before, after, till, until, since, when, while, as, as soon as"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. Madavi had gone before I spoke to her.		</Text>
        <Text style={{fontSize:16}}>2. I began my work after they had gone.</Text>
        <Text style={{fontSize:16}}>3. He retired to bed after the show was over.		</Text>
        <Text style={{fontSize:16}}>4. I will wait for you until you return.</Text>
        <Text style={{fontSize:16}}>5. Don’t go until I come.				</Text>
        <Text style={{fontSize:16}}>6. I shall wait till you come.</Text>
        <Text style={{fontSize:16}}>7. Wait for me till I return.	</Text>
        <Text style={{fontSize:16}}>8. I have known him since he was a child.</Text>

        <View style={{marginVertical:10}}>

        </View>
       
        <Text style={{fontSize:16}}>9. I haven’t seen Rani since she was married.	</Text>
        <Text style={{fontSize:16}}>10. I shall be happy when family is with me.</Text>
        <Text style={{fontSize:16}}>11. I shall meet you when you come next.</Text>
        <Text style={{fontSize:16}}>12. While I was in the service, I never saw him.</Text>
        <Text style={{fontSize:16}}>13. While there is life, there is hope.</Text>
        <Text style={{fontSize:16}}>14. He woke up as the clock struck six.</Text>
        <Text style={{fontSize:16}}>15. I got up as soon as he saw me.</Text>
      </View>


      <View style={{marginVertical:15}}>
        <Text style={{marginVertical:8,fontSize:18}}>NOTE - 1</Text>
        <Text style={{fontSize:16}}>
        If the principle clause is in the FUTURE TENSE, the subordinate clauses will beginning with conjunctions of time should be in the SIMPLE PRESENT or PRESENT PERFECT (not in SIMPLE FUTURE)
        </Text>
      </View>


      <View style={{marginVertical:15}}>
        <Text style={{marginVertical:8,fontSize:18}}>NOTE - 2</Text>
        <Text style={{fontSize:16}}>
        The clause following after is usually in the Present Perfect (not in simple present)
        </Text>
        <Text style={{fontSize:16,marginTop:10}}>EX: He will return after the train has left.</Text>
      </View>
</View>
 

 <View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18,marginVertical:10}}>B. Cause / Reason</Text>
   
      <BoldTextHelper
        text="Because, since, as, for, that, considering that, seeing that, now that, in that, in as much as, noun + that, adjective + that"
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. I must go because my mother is ill.</Text>
        <Text style={{fontSize:16}}>2. He failed because he didn’t work hard.</Text>
        <Text style={{fontSize:16}}>3. Since it is raining, I can’t go.</Text>
        <Text style={{fontSize:16}}>4. Since it is dark, take the torch with you.</Text>
        <Text style={{fontSize:16}}>5. As she is my sister, I like her.</Text>
        <Text style={{fontSize:16}}>6. As it is raining, I can’t go.</Text>
        <Text style={{fontSize:16}}>7. We started late for morning was very cold. (reason / cause)</Text>
        <Text style={{fontSize:16}}>8. He can’t be trusted for he takes everything casually.</Text>
      </View>

      <View style={{marginVertical:10}}>
        <Text style={{fontSize:18}}>Advanced Examples</Text>
        <Text style={{fontSize:16}}>9. Considering that it was very cold, he did not go for swimming.</Text>
        <Text style={{fontSize:16}}>10. Seeing that the morning was very foggy, we started late.</Text>
        <Text style={{fontSize:16}}>11. Now that you have come, I can take a little rest.</Text>
        <Text style={{fontSize:16}}>12. He deserves praise in that he has secured first position.</Text>
        <Text style={{fontSize:16}}>13. I am glad that he has passed. (reason / cause)</Text>
        <Text style={{fontSize:16}}>14. He must suffer in as much as he is so lazy.</Text>
        <Text style={{fontSize:16}}>15. A fool that he is, he must suffer.</Text>
        <Text style={{fontSize:16}}>16. Foolish that his actions are, he must suffer.</Text>

      </View>
</View>



<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>C. Purpose</Text>
    
    

      <BoldTextHelper
        text="Ex: That, lest "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. We eat that we may live.</Text>
        <Text style={{fontSize:16}}>2. He walked quietly lest he should disturb his mother.</Text> 
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>D. Result / Consequence</Text>
    
      <BoldTextHelper
        text="Ex: That "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. She sang so beautifully that we were impressed very much. </Text>
        
      
      </View>
</View>


<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>E. Condition</Text>
    
      <BoldTextHelper
        text="Ex: If, unless, until, provided, provided that, in case, supposing that "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. If you are honest, you will be responsible. </Text>
        <Text style={{fontSize:16}}>2. If you start early, you will reach in time. </Text>
        <Text style={{fontSize:16}}>3. If she comes here, I shall talk to her. </Text>
        <Text style={{fontSize:16}}>4. I shall fail unless you help me.  </Text>
        <Text style={{fontSize:16}}>5. Unless you ask me, I can’t teach you. </Text>
        
        <View style={{marginVertical:10}}>
        <Text style={{fontSize:18}}>Advanced Examples</Text>
        <Text style={{fontSize:16}}>6. You can take the book provided you return it by tomorrow.</Text>
        <Text style={{fontSize:16}}>7. You will succeed provided you are honest.</Text>
        <Text style={{fontSize:16}}>8. He will succeed provided that he deals honestly.</Text>
        <Text style={{fontSize:16}}>9. I will go alone in case he doesn’t come.</Text>
        <Text style={{fontSize:16}}>10. Supposing that he is honest, he will succeed.</Text>


      </View>
      
      </View>
</View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>F. Concession</Text>
    
      <BoldTextHelper
        text="Though, although, however, even if, whatever, no matter, for all, adjectives / adverbs + as "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. Although he has a lot of money, he doesn’t spend it. </Text>
        <Text style={{fontSize:16}}>2. However hard he tried, he failed in the exam. </Text>
        <Text style={{fontSize:16}}>3. Even if he is selfish, I will help him. </Text>
        <Text style={{fontSize:16}}>4. For all they say about him, he is good man.</Text>
        <Text style={{fontSize:16}}>5. No matter what you say, I will go ahead. </Text>
        
        
        <Text style={{fontSize:16}}>6. Whatever be the case, he will remain my friend.</Text>
        <Text style={{fontSize:16}}>7. Simple as he is, he is not a fool.</Text>
        <Text style={{fontSize:16}}>8. Roughly as he behaves, he is not a cruel man.</Text>
        

      
      </View>
</View>

<View>
    {/* Cumulative or Copulative Conjunctions */}
    <Text style={{fontSize:18}}>G. Comparison</Text>
    
      <BoldTextHelper
        text="Ex: Ex: As – as, no so/as — as, than (with comparative degree adjectives) "
        fontSize={16}

      />

      <View style={{marginVertical:8}}>
        <Text style={{fontSize:16}}>1. She respected me more than I thought.	 </Text>
        <Text style={{fontSize:16}}>2. Ramya walks as beautiful as a film star. </Text>
        <Text style={{fontSize:16}}>3. This book is as good as that.			 </Text>
        <Text style={{fontSize:16}}>4. This book is not so (as) good as that.</Text>
        <Text style={{fontSize:16}}>5. This book is better than that.</Text>
        
        
      
      </View>
</View>
  </View>
  </ScrollView>
  )
}

export default SubordinatingConjunction

const styles = StyleSheet.create({})