import {View,StyleSheet,Image,Dimensions,ScrollView,Pressable} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
const Drawer = createDrawerNavigator();
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
import PersonalPronoun from "./PersonalPronoun";
import ReflexivePronoun from "./ReflexivePronoun";
import EmphaticPronoun from "./EmphaticPronoun";
import DemonstrativePronoun from "./DemonstrativePronoun";
import IndefinitePronoun from "./IndefinitePronoun";
import InterrogativePronoun from "./InterrogativeScreen";
import DistributivePronoun from "./DistributivePronoun";
import ReciprocalPronoun from "./ReciprocalPronoun";
import RelativePronoun from "./RelativePronoun";
import RelativeCompoundPronoun from "./RelativeCompoundPronoun";
import PossessivePronoun from "./PossessivePronoun"
import { Card } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
function StartingScreen(){
  const navigation = useNavigation();
    return(<>
          <ScrollView>
          <View style={{paddingHorizontal:8,marginTop:10}}>
            <Text style={{fontSize:16,lineHeight:22}}>A word which is used in the place of noun ins known as a "Pronoun"</Text>
            <Text>Ex: I, We, You, He, She, It, They</Text>
          
            <Text style={{marginVertical:17,fontSize:17}}>Kinds of Proper Nouns</Text>

            <View style={{gap:14,marginVertical:8}}>
              <Text style={{fontSize:16}}>1. Personal Pronoun</Text>
              <Text style={{fontSize:16}}>2. Reflexive pronoun</Text>
              <Text style={{fontSize:16}}>3. Emphatic pronoun</Text>
              <Text style={{fontSize:16}}>4. Demonstrative pronoun</Text>
              <Text style={{fontSize:16}}>5. Indefinite pronoun</Text>
              <Text style={{fontSize:16}}>6. Interrogative pronoun</Text>
              <Text style={{fontSize:16}}>7. Distributive pronoun</Text>
              <Text style={{fontSize:16}}>8. Reciprocal pronoun</Text>
              <Text style={{fontSize:16}}>9. Relative pronoun</Text>
              <Text style={{fontSize:16}}>10. Relative compound pronoun</Text>
              <Text style={{fontSize:16}}>11. Possessive pronoun</Text>
            </View>
          </View>
     <Pressable onPress={()=>navigation.navigate("Personal Pronoun")}>
     <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Personal Pronoun</Text>

            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>
        </Card.Content>
      </Card>
     </Pressable>
   <Pressable onPress={()=>navigation.navigate("Reflexive Pronoun")}>
   <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Reflexive Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
   </Pressable>
      <Pressable onPress={()=>navigation.navigate("Emphatic Pronoun")}>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Emphatic Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      </Pressable>
      
      <Pressable onPress={()=>navigation.navigate("Demonstrative Pronoun")}>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Demonstrative Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      </Pressable>

      <Pressable onPress={()=>navigation.navigate("Indefinite Pronoun")}>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Indefinite Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      </Pressable>


      <Pressable onPress={()=>navigation.navigate("Interrogative Pronoun")}>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Interrogative Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      </Pressable>


      <Pressable onPress={()=>navigation.navigate("Distributive Pronoun")}>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Distributive Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      </Pressable>


     <Pressable onPress={()=>navigation.navigate("Reciprocal Pronoun")}>
     <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Reciprocal Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
     </Pressable>


     <Pressable onPress={()=>navigation.navigate("Relative Pronoun")}>
     <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Relative Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
     </Pressable>


     <Pressable onPress={()=>navigation.navigate("Relative Compound Pronoun")}>
     <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Relative Compound Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
     </Pressable>

      <Pressable onPress={()=>navigation.navigate("Possessive Pronoun")}>
      <Card style={[{backgroundColor:"#22092C"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white"}}>Possessive Pronoun</Text>
            <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/>

        </Card.Content>
      </Card>
      </Pressable>
    </ScrollView>
    </>)
}

function  PronounStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pronouns" component={StartingScreen} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Personal Pronoun" component={PersonalPronoun} options={{headerTitle:"Personal Pronoun"}}/>
      <Drawer.Screen name="Reflexive Pronoun" component={ReflexivePronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Emphatic Pronoun" component={EmphaticPronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Demonstrative Pronoun" component={DemonstrativePronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Indefinite Pronoun" component={IndefinitePronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Interrogative Pronoun" component={InterrogativePronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Distributive Pronoun" component={DistributivePronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Reciprocal Pronoun" component={ReciprocalPronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Relative Pronoun" component={RelativePronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Relative Compound Pronoun" component={RelativeCompoundPronoun} options={{headerTitle:"Pronoun"}}/>
      <Drawer.Screen name="Possessive Pronoun" component={PossessivePronoun} options={{headerTitle:"Pronoun"}}/>
      
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