import {View,StyleSheet,Image,Dimensions,ScrollView} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
const Drawer = createDrawerNavigator();
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
import PersonalPronoun from "./PersonalPronoun";
import { Card } from 'react-native-paper';
function StartingScreen(){
    return(<>
          <ScrollView>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Personal Pronoun</Text>

            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>
        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Reflexive Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Emphatic Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Demonstrative Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>

      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Indefinite Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>


      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Interrogative Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>


      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Distributive Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>


      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Reciprocal Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>


      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Relative Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>


      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Relative Compound Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>

      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Possessive Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
    </ScrollView>
    </>)
}

function  PronounStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pronouns" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Personal Pronoun" component={PersonalPronoun} options={{headerTitle:"Personal Pronoun"}}/>
      <Drawer.Screen name="Reflexive Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Emphatic Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Demonstrative Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Indefinite Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Interrogative Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Distributive Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Reciprocal Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Relative Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Relative Compound Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Possessive Pronoun" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    cardStyle:{
        marginVertical:10,
        width:"95%",
        marginHorizontal:(Dimensions.get("screen").width)/50,
        borderRadius:10,
        elevation:5
    },
    contentStyle:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})

export default PronounStartingScreen;