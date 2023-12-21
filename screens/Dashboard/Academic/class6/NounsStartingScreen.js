import {View,StyleSheet,Dimensions,Pressable} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import BoldTextHelper from "../Adverb/BoldTextHelper";
import { useNavigation } from "@react-navigation/native";
const Drawer = createDrawerNavigator();
import ArticlesStartingScreen from './ProperNoun/ProperNounStartingScreen';
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
import CommonNounStartingScreen from "./CommonNoun/CommonNounStartingScreen";
import { Card } from 'react-native-paper';
function StartingScreen(){
    const navigation = useNavigation();
    return(<>
      <View style={{padding:2}}>
      <View style={{height:"10%"}}>
        <Text style={{textAlign:'center',fontSize:18,color:"red"}}>Reading</Text>
      </View>

      <View style={{padding:3,justifyContent:"flex-start",alignContent:"stretch"}}>
        <Text style={{fontSize:16,lineHeight:26}}>
            <Text>A word used to name a <BoldTextHelper text="person"/>, <BoldTextHelper text="animal"/>, <BoldTextHelper text="thing"/>, <BoldTextHelper text="place"/>,etc and an <BoldTextHelper text="idea"/> or a <BoldTextHelper text="quality of mind"/> is called a noun
            </Text>
        </Text>

        <View style={{marginVertical:20,gap:10}}>
            <Text style={{fontSize:16}}>
                <Text>1. <BoldTextHelper text="Radha"/> works in Gurukula school. (person)</Text>
            </Text>
                <Text style={{fontSize:16}}>2. <BoldTextHelper text ="Peacock"/> is a national bird. (bird)</Text>
                <Text style={{fontSize:16}}>3.  I have a <BoldTextHelper text ="Peacock"/>. (bird)</Text>
                <Text style={{fontSize:16}}>4. <BoldTextHelper text ="Hyderabad"/> is a national bird. (bird)</Text>
                <Text style={{fontSize:16}}>5. We all have <BoldTextHelper text ="freedom"/> . (idea/state of mind)</Text>
        </View>


        <View style={{marginVertical:18}}>
        <Text style={{fontSize:18,marginBottom:10,color:"brown",textAlign:"center"}}>Types of Nouns</Text>
       
        <Pressable onPress={()=>navigation.navigate("Proper Noun")}>
        <Card style={[{backgroundColor:"#FFDE7D"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"black",fontSize:15}}>Proper Nouns</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>

        </Pressable>
     

        <Pressable onPress={()=>navigation.navigate("Common Noun")}>
        <Card style={[{backgroundColor:"#435585"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Common Nouns</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>

        </View>
      </View>
      </View>
    </>)
}

function  SixthStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Nouns" component={StartingScreen} />
      <Drawer.Screen name = "Proper Noun" component={ArticlesStartingScreen}/>
      <Drawer.Screen name = "Common Noun" component={CommonNounStartingScreen}/>
      {/* <Drawer.Screen name="Article" component={Article} /> */}
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
    }
})

export default SixthStartingScreen;