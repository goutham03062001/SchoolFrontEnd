import {View,StyleSheet,Dimensions,Pressable} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import BoldTextHelper from "../utils/BoldText";
import { useNavigation } from "@react-navigation/native";
import TransitiveVerbs from "./TransitiveVerbs";
import IntransitiveVerbs from "./IntransitiveVerbs";
import AuxiliaryVerbs from "./AuxiliaryVerbs";
import VerbForms from "./VerbForms"
const Drawer = createDrawerNavigator();

// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';

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
            <Text>
            Verbs be divided into the following three categories—
            </Text>
        </Text>

        <View style={{marginVertical:20,gap:10}}>
            <Text style={{fontSize:16}}>
                <Text>(1) Transitive Verbs</Text>
            </Text>
                <Text style={{fontSize:16}}>(2) Intransitive Verbs</Text>
                <Text style={{fontSize:16}}>(3) Auxiliary Verbs / Modal Verbs</Text>
        </View>


        <View style={{marginVertical:18}}>
        <Text style={{fontSize:18,marginBottom:10,color:"brown",textAlign:"center"}}>Types of Verbs</Text>
       
        <Pressable onPress={()=>navigation.navigate("Transitive Verbs")}>
        <Card style={[{backgroundColor:"#FFDE7D"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"black",fontSize:15}}>Transitive Verbs</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>

        </Pressable>
     

        <Pressable onPress={()=>navigation.navigate("Intransitive Verbs")}>
        <Card style={[{backgroundColor:"#435585"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Intransitive Verbs</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>



        <Pressable onPress={()=>navigation.navigate("Auxiliary Verbs / Modal Verbs")}>
        <Card style={[{backgroundColor:"#735085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Auxiliary Verbs / Modal Verbs</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>


        <Pressable onPress={()=>navigation.navigate("Verb Forms")}>
        <Card style={[{backgroundColor:"#123085"},styles.cardStyle]}>
        <Card.Content style={styles.contentStyle}>
            <Text style={{color:"white",fontSize:15}}>Verb Forms</Text>
            {/* <Image source={{uri:"https://img.icons8.com/color/48/000000/long-arrow-right.png"}} style={{width:30,height:20}}/> */}

        </Card.Content>
      </Card>
        </Pressable>
        </View>
      </View>
      </View>
    </>)
}

function  VerbStartingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Verbs" component={StartingScreen} />
      <Drawer.Screen name = "Transitive Verbs" component={TransitiveVerbs}/>
      <Drawer.Screen name = "Intransitive Verbs" component={IntransitiveVerbs}/> 
      <Drawer.Screen name="Auxiliary Verbs / Modal Verbs" component={AuxiliaryVerbs} />
      <Drawer.Screen name="Verb Forms" component={VerbForms} />
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

export default VerbStartingScreen;