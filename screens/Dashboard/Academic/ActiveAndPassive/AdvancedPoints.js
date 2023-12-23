import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import BoldTextHelper from "../utils/BoldText";
const SimplifiedComponent = ({ sentence }) => {
  let sen = sentence.split(".");
  return (
    <>
      {sen.map((word, index) => (
        <View key={index}>
          {index === sen.length - 1 ? (
            <></>
          ) : (
            <>
              <Text>
                {index % 2 === 0 ? (
                  <>
                    <BoldTextHelper text={sen[index]} fontSize={16} />
                  </>
                ) : (
                  <Text style={{ fontSize: 16 }}>{sen[index]}</Text>
                )}
              </Text>
            </>
          )}
        </View>
      ))}
    </>
  );
};
const AdvancedPoints = () => {
  return (
    <ScrollView>
        <View style={{ marginVertical: 10 }}>
      <Text style={{ textAlign: "center", fontSize: 18 }}>Advanced Points</Text>

      <Text
        style={{
          paddingHorizontal: 6,
          fontSize: 16,
          lineHeight: 23,
          marginVertical: 10,
        }}
      >
        (1) If the imperative sentence carries the sense of request or advice,
        should be, must be used before the Third Form of the verb. These
        sentences do not begin with “Let”.
      </Text>

      <View style={{ marginVertical: 20, paddingHorizontal: 8 }}>
        <SimplifiedComponent
          sentence="136) Help the poor.
The poor should be helped.
137) Feed the child.
The child should be fed.
138) Love your country.
Your country should be loved.
"
        />
      </View>


      <View style={{marginVertical:20}}>
            <Text style={{fontSize:20,textAlign:"center"}}>Passive Voice: infinitive</Text>
            <Text style={{textAlign:"center",fontSize:15}}>(SUBJECT + VERB + OBJECT + TO BE + VERB)</Text>
     
        <View style={{marginVertical:15,paddingHorizontal:8}}>
            <SimplifiedComponent
                sentence="140) I have letters to write.
I have letters to be written.
141) She has no money to spend.
She has no money to be spent.
142) We have a lot of work to do.
We have a lot of work to be done.
143) I have no problems to think about.
I have no problems to be thought about.
144) She has children to look after.
She has children to be looked after.
*145) I expect Rani to love me. 
I expect to be loved by Rani.
146) I want to write the letter.
I want the letter to be written.
"
            />
        </View>

        <View style={{marginVertical:6,paddingHorizontal:8}}>
            <Text style={{fontSize:16,lineHeight:23}}>
            Some sentences begin with “There”, followed by verb + subject + infinitive. No change is made in such sentences in the passive voice expect that the simple preset infinitive is changed into the past infinitive (to be + past participle). The rest of the sentence remains unchanged.
            </Text>

            <View style={{marginVertical:20}}>
            <SimplifiedComponent
                sentence="146) There is no milk to waste.
There is no milk to be wasted.
147) There is no time to waste.
There is no time to be wasted.
"
            />
            </View>
        </View>


        <View>
        <View style={{marginVertical:6,paddingHorizontal:8}}>
            <Text style={{fontSize:18,lineHeight:23,textAlign:"center"}}>
            PASSIVE VOICE: verbs like TASTE, SMELL, and FEEL
            </Text>

            <View style={{marginVertical:20}}>
            <SimplifiedComponent
                sentence="148) This medicine tastes bitter.
This medicine is bitter when it is tasted.
149) The flower smells sweet.
The flower is sweet when it is smelt.
150) The material feels thin.
The material is thin when it is felt.

"
            />
            </View>
        </View>


        <View style={{marginVertical:6,paddingHorizontal:8}}>
            <Text style={{fontSize:18,lineHeight:23,textAlign:"center"}}>
            PASSIVE VOICE: Object Compliment
            </Text>

            <View style={{marginVertical:20}}>
            <SimplifiedComponent
                sentence="150) We elected him president.
He was elected president (by us).
151) They named her Ramya.
She was named Ramya (by them).
152) We thought him fool.
He was thought a fool. 
153) I considered Madavi very beautiful.
Madavi was considered to be very beautiful.
154) I always suppose Uma my wife.
Uma is always supposed to be my wife.


"
            />
            </View>
        </View>

        <View style={{marginVertical:6,paddingHorizontal:8}}>
            <Text style={{fontSize:18,lineHeight:23,textAlign:"center"}}>
            PASSIVE VOICE: That Clause
            </Text>

            <View style={{marginVertical:20}}>
            <SimplifiedComponent
                sentence="155) We say that she is a teacher.
It is said that she is a teacher.
156) They believe that he killed his wife.
It is believed that he killed his wife.
157) People may point out that he cheated the poor girl.
It may be pointed out that he cheated the girl.
158) We admit that she has spoiled her life.
It is admitted that she has spoiled her life.
159) It provided that she had written the letter.
 It was proved that she had written the letter.



"
            />
            </View>
        </View>


        <View style={{marginVertical:6,paddingHorizontal:8}}>
            <Text style={{fontSize:18,lineHeight:23,textAlign:"center"}}>
            It is/was time + for object + passive form
            </Text>

            <View style={{marginVertical:20}}>
            <SimplifiedComponent
                sentence="160) It is time to send the telegram.
It is time for the telegram to be sent.
161) It is time to stop the work.
It is time for the work to be stopped.
162) It was time to apply for the post.
It was time for the post to be applied for. 
163) It was time to repair the watch.
It was time for the watch to be repaired.
164) It is time to shut the door.
It is time for the door to be shut.
165) It is time to prepare the time table.
It is time for the time table to be prepared.


"
            />
            </View>
        </View>



        <View style={{marginVertical:6,paddingHorizontal:8}}>
            <Text style={{fontSize:16,lineHeight:23}}>
            Some sentences containing double objectives begin with Let in the active voice. In passive voice also these sentences begin with Let, and the direct object (inanimate) object is used as the subject. Also, be should be used before the Third Form of the verb. 
            </Text>

            <View style={{marginVertical:20}}>
            <SimplifiedComponent
                sentence="160) It is time to send the telegram.
It is time for the telegram to be sent.
161) It is time to stop the work.
It is time for the work to be stopped.
162) It was time to apply for the post.
It was time for the post to be applied for. 
163) It was time to repair the watch.
It was time for the watch to be repaired.
164) It is time to shut the door.
It is time for the door to be shut.
165) It is time to prepare the time table.
It is time for the time table to be prepared.


"
            />
            </View>
        </View>

        <View style={{marginVertical:6,paddingHorizontal:8}}>
            <Text style={{fontSize:16,lineHeight:23,marginVertical:10}}>
            (8): Usually by is used before the object in the passive voice. But there are some verbs on account of which some other prepositions are used before the object in place of by.
            </Text>

<Text style={{fontSize:16,lineHeight:23,marginVertical:10}}>“AT” is used after: surprised, astonished, shocked, alarmed, disappointed, displeased, distressed, annoyed, agitated, amazed, rejoiced, vexed</Text> 

<Text style={{fontSize:16,lineHeight:23,marginVertical:10}}>
“To” is used after: known, obliged

</Text>

<Text style={{fontSize:16,lineHeight:23,marginVertical:10}}>
“With” is used after: pleased, satisfied, disgusted, impressed, crowded, disgusted, killed, lined, overgrown, covered, thronged

</Text>
<Text style={{fontSize:16,lineHeight:23,marginVertical:10}}>
“In” is used after: interested, contained, consisted, ground, 

</Text>

            <View style={{marginVertical:20}}>
            <SimplifiedComponent
                sentence="166) Her behaviour disappointed me.
I was disappointed at her behaviour.
168) His condition alarmed me.
I was alarmed at his condition.
169) I know her sister.
Her sister Is known to me.
170) Your honesty has pleased me.
I have been pleased with your honesty.
171) This job interests me.
I am interested in this job.
172) Your talk displeases me.
I am displeased at your talk.
173) Do you know Padma?.
Is Padma known to you?.
174) This bottle contains milk.
Milk is contained in this bottle.
175) This book interested me.
I was interested in this book.
176) This mill grinds the wheat.
The wheat is ground in the mill.
177) Snow covered the houses.
The houses were covered with snow.
178) Her performance satisfied me.
I was satisfied with her performance.
179) This society disgusted me.
I was disgusted with this society.
180) People lined the road.
The road was lined with people.
181) Large crowds thronged the streets.
The streets were thronged with large crowds.
182) Raju’s beauty pleases me.
I am pleased with Raju’s beauty.
183) Her words have displeased me.
I have been displeased with her words.
184) Her decision surprises me.
I am surprised at her decision. 
185) Padma’s success rejoices me.
I am rejoiced at Padma’s success. 
186) Padma’s death alarmed me.
I was alarmed at Padma’s death. 
187) Her rudeness vexed me.
I was vexed at her rudeness.


"
            />
            </View>
        </View>

        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default AdvancedPoints;

const styles = StyleSheet.create({});
