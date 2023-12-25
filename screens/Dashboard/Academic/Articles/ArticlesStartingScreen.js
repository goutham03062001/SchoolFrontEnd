import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  View
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native-paper";
const Drawer = createDrawerNavigator();
// import PartsofSpeechStartingScreen from './CommonNoun/QuizModel';
// import PersonalPronoun from "./PersonalPronoun";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import BoldTextHelper from "../utils/BoldText"

function StartingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
      <Text style={{fontSize:19,paddingHorizontal:7,lineHeight:26,marginTop:8,textAlign:"center"}}>
      Kinds of Articles 
      </Text>
      <Text style={{fontSize:16,marginTop:8,paddingHorizontal:8}}>
      (i) Indefinite Article—A or An 
      </Text>
      <Text style={{fontSize:16,marginTop:8,paddingHorizontal:8}}>
      (ii) Definite Article—The
      </Text>
          <View style={{paddingHorizontal:7}}>
    <View>
      {/* collective noun */}

      <Text style={{fontSize:18,marginVertical:15}}>Kinds of conjunctions:</Text>
      
      <Text style={{fontSize:16,marginVertical:15,lineHeight:25,textAlign:"justify",paddingHorizontal:5}}>
      
      Indefinite Article (A/An) shows indefiniteness and Definite Article (The) shows definiteness. Articles (A, An, The) are used before Nouns under some rules. When a Singular Countable Noun is used for the first time, Article A or An is used before it. But when a Countable Noun, whether Singular or Plural, is used for a definite thing, or refers to a thing or person that has already been referred to earlier, Article The is used before it. Thus when a Singular Countable Noun is used for the first time, Article a or an is used before it, but when the same noun is repeated in the same sentence or in the subsequent sentences, Article The is used before it because then it becomes a definite thing already referred to earlier. As—
      </Text>
   

     
    </View>

    <View>
      <Text style={{fontSize:16,marginTop:8,paddingHorizontal:8}}>1. I have a book. The book is very informative.</Text>
      <Text style={{fontSize:16,marginTop:8,paddingHorizontal:8}}>2. I have a book, though the book is not very informative.</Text>
      <Text style={{fontSize:16,marginTop:8,paddingHorizontal:8}}>3. There was a house. The house was very large.</Text>
      <Text style={{fontSize:16,marginTop:8,paddingHorizontal:8}}>4. There was a house and the house was very large.</Text>
    </View>
  </View>


       <View style={{marginVertical:15}}>
       <Pressable onPress={(e) => navigation.navigate("Correlative")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Definite Articles</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          onPress={(e) => navigation.navigate("Compound")}
        >
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Indefinite Articles</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable onPress={(e) => navigation.navigate("Coordinating")}>
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Omission Of the Article</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          onPress={(e) => navigation.navigate("Subordinating")}
        >
          <Card style={[{ backgroundColor: "#22092C" }, styles.cardStyle]}>
            <Card.Content style={styles.contentStyle}>
              <Text style={{ color: "white" }}>Subordinating conjunctions</Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/long-arrow-right.png",
                }}
                style={{ width: 30, height: 20 }}
              />
            </Card.Content>
          </Card>
        </Pressable>
       </View>

      
        
      </ScrollView>
    </>
  );
}

function ArticlesStartingScreen() {
  return (
    <Drawer.Navigator>
     <Drawer.Screen
        name="Articles - Reading"
        component={StartingScreen}
        options={{ headerTitle: "Articles - Reading" }}
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
    justifyContent: "space-around",
  },
});

export default ArticlesStartingScreen;
