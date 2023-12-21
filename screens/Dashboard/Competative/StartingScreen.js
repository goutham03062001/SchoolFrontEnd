import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useContext } from "react";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../../../context/AuthContext";
import ModelPaperStartingScreen from "./ModelPapers/ModelPaperStartingScreen";
import PreviousPaperStartingScreen from "./PreviousPapers/StartingScreen"
const Stack = createStackNavigator();
const RoutingScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.rootContainer}>
          <Pressable onPress={()=>navigation.navigate("Model Papers")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#31304D" }]}>
              <Text
                style={{ color: "#ECEE81", fontWeight: "600", fontSize: 18 }}
              >
                Model Papers
              </Text>
            </Card>
          </Pressable>

          <Pressable onPress={()=>navigation.navigate("Previous Papers")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#5F6F52" }]}>
              <Text style={{ color: "#ECEE81", fontSize: 18 }}>
                Previous Papers
              </Text>
            </Card>
          </Pressable>

         
        </View>
      </View>
    </>
  );
};




const StartingScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="competitive"
          component={RoutingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Model Papers" component={ModelPaperStartingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Previous Papers" component={PreviousPaperStartingScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </>
  );
};

export default StartingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    gap: 25,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: Dimensions.get("window").width / 1.08,
    height: 150,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
