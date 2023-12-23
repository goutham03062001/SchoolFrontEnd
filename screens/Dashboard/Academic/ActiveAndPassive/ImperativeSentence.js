import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react';
import BoldTextHelper from '../utils/BoldText';
const SimplifiedComponent = ({ sentence }) => {
    const [state, setState] = useState(1);
    let sen = sentence.split(".");
  
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
const ImperativeSentence = () => {
  return (
    <ScrollView>
        <View style={{paddingHorizontal:8}}>
      <Text style={{fontSize:17,textAlign:"center"}}>Let + object + be + V3</Text>

      <SimplifiedComponent
        sentence="74) Open the door.
Let the door be opened.
77) Shut the door.
Let the door be shut.
78) Show the papers.
Let the papers be shown.
79) Post this letter.
Let this letter be posted.
80) Complete the work.
Let the work be completed.
81) Give up smoking.
Let the smoking be given up.
82) Pay the amount.
Let the amount be paid.
83) Send the application.
Let the application be sent.
* 84) Return the book to the library.
Let the book be returned to the library.
85) Help the poor.
Let the poor be helped.
86) Don’t read a bad novel.
Let not a bad novel be read (by you).
87) Don’t beat the child.
Let not the child be beaten.
88)Don’t defend the thief.
Let not the thief be defended.
89) Park the car.
Let not the car be parked.
"
      />
    </View>

    <View style={{marginVertical:20}}>
        <Text style={{fontSize:16,textAlign:"center"}}>You are requested / ordered / suggested / advised /etc + (not) to V1</Text>

        <View style={{marginVertical:15,paddingHorizontal:8}}>
            <SimplifiedComponent
                sentence="90) Please post this letter.
You are requested to post this letter.
91) Stay there.
You are commanded / ordered to stay there.
92) Teach me English.
You are asked to teach me English.
93) Blow out the candle.
You are asked to blow out the candle.
94) Apply for leave.
You are advised to apply for leave.
95) Shut the door.
You are ordered to shut the door.
96) Show mercy on the poor man.
You are begged to show mercy on the poor man.
97) Pay the money before April.
You are requested to pay the money before April.
98) Get me a glass of water.
You are ordered to get me a glass of water.
99) Be careful of your health.
You are advised to be careful of your health.
100) Help the poor.
You are advised to help the poor.
101) Don’t come late.
You are asked not to be late.
102) Don’t play with fire.
You are advised not to play with fire.
103) Don’t stick bills on the wall.
You are ordered not to stick bills on the wall.
104) Don’t wait for me.
You are advised not to wait for me.
105) Don’t tear the papers.
You are advised not to tear the papers.
"
            />
        </View>
    </View>
    </ScrollView>
  )
}

export default ImperativeSentence

const styles = StyleSheet.create({})