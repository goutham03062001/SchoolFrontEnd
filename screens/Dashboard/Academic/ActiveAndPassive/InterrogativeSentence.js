import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react';
import BoldTextHelper from '../utils/BoldText';
const SimplifiedComponent = ({ sentence }) => {
    const [state, setState] = useState(1);
    let sen = sentence.split("?");
  
    function updateState() {
      setState((prevState) => prevState + 1);
    }
  
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
const InterrogativeSentence = () => {
  return (
    <ScrollView>  

    <View style={{marginVertical:20}}>
    <Text style={{fontSize:17,textAlign:"center"}}>Let + object + be + 3</Text>

        <View style={{marginVertical:15,paddingHorizontal:8}}>
        <SimplifiedComponent
        sentence="106) Is he eating an apple?
Is an apple being eaten by him?
107) Are we posting letters?
Are letters being posted by us?
108) Was I playing cricket?
Was cricket being played by me?
109) Were you eating eggs?
Were eggs being eaten by you?
110) Have they brought gifts?
Have gifts been brought by them? 
111) Has he drunk tea?
Has tea been drunk by him?
112) Had she sung a song?
Had a song been sung by her?
113) Will Raju write a poem?
Will a poem be written by Raju?
114) Will you help me?
Shall I be helped by you?
115) Can she do nothing without hard work?
Can nothing be done without hard work by her? 
116) Am I writing a novel?
Is a novel written by me?
117) Is he posting letters?
Are letters being posted by him?
118) Are they drinking tea?
Is tea being drunk by them?
119) Were you playing cricket?
Was cricket being played by you?
120) Was she counting eggs?
Were eggs being counted by her?
121) Shall I do the work?
Will the work be done by me?
122) Shall we solve the problem?
Will the problem be solved by us?
123) Does he help Ram?
Is Ram helped by him?
124) Has he killed the rat?
Has the rat been killed by him?
125) Do you speak Telugu?
Is Telugu spoken by you?
126) Does your father spend the money?
Is the money spent by your father?
* 127) Does she love me?
Am I loved by her?
128) Do they sell watches here?
Are watches sold here (by them)?
129) Did you post the letter?
Was the letter posted by you?
130) Did they sell the houses?
Were the houses sold by them?
*131) Who wrote this poem?
By whom was this poem written?
*132) Who killed the man?
By whom was the man killed?
*133) Who has deceived you?
By whom have you been deceived?
*134) What pleased you so much?
With what were you pleased so much?
*135) What do you know about computers?
What is known to you about computers?


"
      />
        </View>
    </View>
    </ScrollView>
  )
}

export default InterrogativeSentence

const styles = StyleSheet.create({})