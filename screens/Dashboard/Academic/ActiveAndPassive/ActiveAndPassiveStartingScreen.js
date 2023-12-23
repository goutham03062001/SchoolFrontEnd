import { useState } from "react";
import { View, StyleSheet, Image, Dimensions, ScrollView,Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import BoldTextHelper from "../utils/BoldText";
import AssertiveSentence from "./AssertiveSentence";
import ImperativeSentence from "./ImperativeSentence";
import InterrogativeSentence from "./InterrogativeSentence";
import AdvancedPoints from "./AdvancedPoints";
const SentenceComponent = ({first ,second})=>{
    return(<View style={{marginTop:6}}>
        <BoldTextHelper text={first} fontSize={16}/>
        <Text style={{fontSize:16}}> {second}</Text>
    </View>)
}

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
                {index % 2 !== 1 ? (
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


const Drawer = createDrawerNavigator();
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
// import PersonalPronoun from "./PersonalPronoun";
import { Card } from "react-native-paper";
function StartingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        {/* This is for intro */}
        <View>
          <Text
            style={{
              fontSize: 19,
              textAlign: "center",
              marginBottom: 15,
              marginTop: 3,
              color: "red",
            }}
          >
            Reading
          </Text>
        </View>
      

        <View style={{ marginVertical: 20, padding: 5 }}>
          <Text style={{textAlign:"center",fontSize:17}}>Assertive Sentence:</Text>
          <Text style={{textAlign:"center",fontSize:17,marginTop:8}}>Single Object Sentences</Text>
        </View>


        <View  style={{paddingHorizontal:6}}>
            {/* sentencecomponent */}
            <SentenceComponent 
            first="1. He is eating an apple."
            second="An apple is being eaten by him."
            />

<SentenceComponent 
            first="2. Shekar is throwing a ball."
            second="A ball is being thrown by shekar."
            />



<SentenceComponent 
            first="3. We are posting letters."
            second="Letters are being posted by us."
            />



<SentenceComponent 
            first="4. I was playing cricket."
            second="Cricket was being played by me."
            />



<SentenceComponent 
            first="5. You were eating eggs. "
            second="Eggs were being eaten by you."
            />

<SentenceComponent 
            first="6. They have brought gifts. "
            second="Gifts have been brought by them."
            />

<SentenceComponent 
            first="7. He has drunk tea."
            second="Tea has been drunk by him."
            />

<SentenceComponent 
            first="8. She had sung a song."
            second="A song had been sung by her."
            />

<SentenceComponent 
            first="9. He will write a poem. "
            second="A poem will be written by him."
            />

<SentenceComponent 
            first="10. She can do nothing without hard work."
            second="Nothing can be done without hard work (by her). "
            />

<SentenceComponent 
            first="11. I am writing a novel."
            second="A novel is being written by me."
            />

<SentenceComponent 
            first="12. He is posting letters. "
            second="Letters are being posted by him."
            />

<SentenceComponent 
            first="13. They are drinking tea. "
            second="Tea is being drunk by them."
            />

<SentenceComponent 
            first="14. You were playing cricket."
            second="Cricket was being played by you."
            />

<SentenceComponent 
            first="15. She was counting eggs. "
            second="Eggs were being counted by her."
            />

<SentenceComponent 
            first="16. I shall do the work. "
            second="The work will be done by me"
            />

<SentenceComponent 
            first="17. We shall solve the problem.. "
            second="The problem will be solved by us."
            />

<SentenceComponent 
            first="19. He is writing a letter. "
            second="A letter is being written by him."
            />

<SentenceComponent 
            first="20. They are reading books."
            second="Books are being read by them."
            />

            <SimplifiedComponent
                sentence="21) Ram is helping me.
I am being helped by Ram.
22) They are mending the chairs.
The chairs are being mended by them.
23) Rani is teaching English.
English is being taught by Rani.
24) Ram has written a letter.
A letter has been written by Ram.
25) Mohan has read many books.
Many books have been read by Mohan.
26) I have helped him.
He has been helped by me.
27) He has scored hundred runs.
Hundred runs have been scored by him.
28) She has read the letter.
The letter has been read by her.
29) We have planned a trip to Kashmir.
A trip has been planned to Kashmir by us. 
30) Ramu was writing a letter.
A letter was being written by Ramu.
31) Harry was reading books.
Books were being read by Harry.
32) They were helping me.
I was being helped by them.
33) We were playing football.
Football was being played by us. 
34)  He was delivering a lecture.
A lecture was being delivered by him.
35)  He had written letters.
Letters had been written by him.
36)  Ramu had read many books.
Many books had been read by Ramu.
37)  Ramu had helped her.
She had been helped by Ramu.
38)  Ramu will write a letter.
A letter will be written by Ramu.
39)  Rani will read books.
Books will be read by Rani.
40) I shall help him.
He will be helped by me.
41)  Ramu will have written letter.
Letter will have been written by Ramu.
42)  Rani will have read many books.
Many books will have been read by Rani.
43)  I shall have helped him.
He will have been helped by me.
44) They can help you.
You can be helped by them.
45)  She should help him.
He should be helped by her.
46)  He reads a book.
A book is read by him.
47)  Ramu writes a letter.
A letter is written by Ramu.
48)  Rani follows me.
I am followed by Rani.
49)  Radha eats an apple.
An apple is eaten by Radha.
50) Birds build nests.
Nests are built by birds.
51) I drink milk.
Milk is drunk by me.
52) Shekar teaches English.
English is taught by Shekar.
53) Ramu wrote a letter.
A letter was written by Ramu.
54) Rani read many books.
Many books were read by Rani.
55)I helped her.
She was helped by me.
56) He bowled Sachin.
Sachin was bowled by him.
57) She looked after him.
He was looked after by her.
58) They laughed at him.
He was laughed at by them.
59) They laughed at the poor beggar.
The poor beggar was laughed at by them.
60) They looked after the girl.
The girl was looked after by them.
61) We called in the mechanic.
The mechanic was called in by us.
62) I sent for the doctor.
The doctor was sent by me.

"
            />
        </View>

        <View style={{marginVertical:50,paddingHorizontal:8}}>
        <Text style={{fontSize:17,textAlign:"center"}}>Double Object Sentences</Text>
          <SimplifiedComponent
            sentence="
63) She teaches me Hindi.
I am taught Hindi by her. 
64) They gave you a prize.
You were given a prize by them.
65) I shall give you necessary help.
You will be given necessary help by me.
66) The manager granted me the permission.
I was granted the permission by the manager.
67) The principal issued me the conduct certificate.
I was issued the conduct certificate by the principal.
68) The bank sanctioned me the loan.
I was sanctioned the loan by the bank.
69) Madavi bought me a good book.
I was bought a good book by Madavi.
70) They offered him a nice job.
He was offered a nice job by them.
"
          />
        </View>

        <View style={{marginVertical:10,paddingHorizontal:8}}>
            <Text style={{textAlign:"center",fontSize:17,marginBottom:49}}>Negative Sentences</Text>
            <SimplifiedComponent
              sentence="
              71) The boy did not kill the cat.
The cat was not killed by the boy.
72) The baby was not hitting a toy.
A toy was not being hit by the baby.
73) This boy cannot lift the box.
The box cannot be lifted by this boy
"
            />
        </View>
       
        <Divider />
        <Text style={{ marginLeft: 10, marginVertical: 12, color: "blue" }}>
          Goto
        </Text>
      {/* <Pressable onPress={()=>navigation.navigate("Assertive Sentence")}>
      <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Assertive Sentence
            </Text>

            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
              }}
              style={{ width: 30, height: 20 }}
            />
          </Card.Content>
        </Card>
      </Pressable> */}
        

        <Pressable onPress={()=>navigation.navigate("Imperative Sentence")}>
        <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Imperative Sentence
            </Text>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
              }}
              style={{ width: 30, height: 20 }}
            />
          </Card.Content>
        </Card>

        </Pressable>


       <Pressable onPress={()=>navigation.navigate("Interrogative Sentence")}>
       <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Interrogative Sentence
            </Text>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
              }}
              style={{ width: 30, height: 20 }}
            />
          </Card.Content>
        </Card>
       </Pressable>

       <Pressable onPress={()=>navigation.navigate("Advanced Points")}>
       <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Advanced Points
            </Text>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
              }}
              style={{ width: 30, height: 20 }}
            />
          </Card.Content>
        </Card>
       </Pressable>

     

     


      
        
      </ScrollView>
    </>
  );
}

function ActiveAndPassiveStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Assertive Sentence"
        component={StartingScreen}
        options={{ headerTitle: "Active and  Passive Voice" }}
      />
      <Drawer.Screen
        name="Imperative Sentence"
        component={ImperativeSentence}
        options={{ headerTitle: "Active and  Passive Voice" }}
      />
      <Drawer.Screen
        name="Interrogative Sentence"
        component={InterrogativeSentence}
        options={{ headerTitle: "Active and  Passive Voice" }}
      />
      <Drawer.Screen
        name="Advanced Points"
        component={AdvancedPoints}
        options={{ headerTitle: "Active and  Passive Voice" }}
      />
      {/* <Drawer.Screen name="Personal Pronoun" component={PersonalPronoun} options={{headerTitle:"Personal Pronoun"}}/> */}
      
    
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: 10,
    width: "95%",
    marginHorizontal: Dimensions.get("screen").width / 50,
    borderRadius: 10,
    elevation: 5,
  },
  contentStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 11,
  },
});

export default ActiveAndPassiveStartingScreen;
