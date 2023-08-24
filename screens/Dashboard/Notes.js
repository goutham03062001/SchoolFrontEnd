import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView
} from "react-native";
import { Button, Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import PhysicsLab from "./Experiments/Tenth/PhysicsLab";
import BiologyLab from "./Experiments/Tenth/BiologyLab";
import MathsLab from "./Experiments/Tenth/MathsLab";
const Stack = createStackNavigator();
import { useNavigation } from "@react-navigation/native";
import ViewLabExperiments from "./Experiments/Tenth/ViewLabExperiments";
function DisplaySubjectsHandler() {
  const navigation = useNavigation();
  function MathsSubjectHandler(){
    navigation.navigate("Maths Lab");
  }
  function PhysicsSubjectHandler(){
    navigation.navigate("Physics Lab");
  }
  function BiologySubjectHandler(){
    navigation.navigate("Biology Lab");

  }
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        {/* <Pressable android_ripple={{ color: "#ccc" }}
        onPress = {MathsSubjectHandler}>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <Image
                source={require("../../assets/Maths.jpg")}
                style={{ width: "100%", height: 140 }}
              />

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text>Total Exp - 10</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Completed - 3 </Text>
                  <MaterialIcons name="done" size={20} color="green" />
                </View>
              </View>
            </Card.Content>
          </Card>
        </Pressable> */}

        <Pressable android_ripple={{ color: "#ccc" }}
        onPress={ PhysicsSubjectHandler }>
        <Card style={styles.cardStyle}>
          <Card.Content>
            <Image
              source={require("../../assets/Physics.jpg")}
              style={{ width: "100%", height: 140 }}
            />

            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
             
            </View>
          </Card.Content>
        </Card>
        </Pressable>

        <Pressable android_ripple={{ color: "#ccc" }}
        onPress = {BiologySubjectHandler}>
        <Card style={{ height: 250 }}>
          <Card.Content>
            <Image
              source={require("../../assets/Biology.jpeg")}
              style={{ width: "99%", height: "95%" }}
            />
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              
            </View>
          </Card.Content>
        </Card>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const Notes = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="MyExperiments"
          component={DisplaySubjectsHandler}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Physics Lab" component={PhysicsLab} 
        />
        <Stack.Screen name="Biology Lab" component={BiologyLab} />
        <Stack.Screen name="Maths Lab" component={MathsLab} />
        <Stack.Screen name="Virtual Lab" component={ViewLabExperiments} />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "flex-start",
    gap: 40,
    marginTop:50
  },
  cardStyle: {
    height: 210,
    paddingTop: 15,
  },
});

export default Notes;
