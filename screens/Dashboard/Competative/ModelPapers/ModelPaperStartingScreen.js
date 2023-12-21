import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Noun from "./Noun";
import Pronoun from "./Pronoun";
import Verb from "./Verb";
import Adverb from "./Adverb";
import Adjective from "./Adjective";

const Stack = createStackNavigator();
const StartingScreen1 = () => {
  const [authorized, setAuthorized] = useState(true);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Pressable
        onPress={() => {
          authorized
            ? navigation.navigate("Noun")
            : Alert.alert("Access Denied!", "You don't have any access");
        }}
      >
        <Card style={[{ backgroundColor: "#DED0B6" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                textAlign: "center",
                textAlign: "center",
              }}
            >
              Noun{" "}
              {authorized ? (
                <>
                  {/* <Image source={{uri:"https://img.icons8.com/ios/50/approval--v1.png"}} style={{width:25,height:25}}/> */}
                </>
              ) : (
                <>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/lock--v1.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </>
              )}
            </Text>
          </Card.Content>
        </Card>
      </Pressable>
      <Pressable
        onPress={() => {
          authorized
            ? navigation.navigate("Pronoun")
            : Alert.alert("Access Denied!", "You don't have any access");
        }}
      >
        <Card style={[{ backgroundColor: "#FFDE7D" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                textAlign: "center",
                textAlign: "center",
              }}
            >
              Pronoun{" "}
              {authorized ? (
                <>
                  {/* <Image source={{uri:"https://img.icons8.com/ios/50/approval--v1.png"}} style={{width:25,height:25}}/> */}
                </>
              ) : (
                <>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/lock--v1.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </>
              )}
            </Text>
          </Card.Content>
        </Card>
      </Pressable>

      <Pressable
        onPress={() => {
          authorized
            ? navigation.navigate("Verb")
            : Alert.alert("Access Denied!", "You don't have any access");
        }}
      >
        <Card style={[{ backgroundColor: "#A084E8" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                textAlign: "center",
              }}
            >
              Verb{" "}
              {authorized ? (
                <>
                  {/* <Image source={{uri:"https://img.icons8.com/ios/50/approval--v1.png"}} style={{width:25,height:25}}/> */}
                </>
              ) : (
                <>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/lock--v1.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </>
              )}
            </Text>
          </Card.Content>
        </Card>
      </Pressable>

      <Pressable
        onPress={() => {
          authorized
            ? navigation.navigate("Adverb")
            : Alert.alert("Access Denied!", "You don't have any access");
        }}
      >
        <Card style={[{ backgroundColor: "#00ADB5" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                textAlign: "center",
                textAlign: "center",
              }}
            >
              Adverb{" "}
              {authorized ? (
                <>
                  {/* <Image source={{uri:"https://img.icons8.com/ios/50/approval--v1.png"}} style={{width:25,height:25}}/> */}
                </>
              ) : (
                <>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/lock--v1.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </>
              )}
            </Text>
          </Card.Content>
        </Card>
      </Pressable>

      <Pressable
        onPress={() => {
          authorized
            ? navigation.navigate("Adjective")
            : Alert.alert("Access Denied!", "You don't have any access");
        }}
      >
        <Card style={[{ backgroundColor: "#6C5B7B" }, styles.cardStyle]}>
          <Card.Content style={styles.contentStyle}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                textAlign: "center",
              }}
            >
              Adjective{" "}
              {authorized ? (
                <>
                  {/* <Image source={{uri:"https://img.icons8.com/ios/50/approval--v1.png"}} style={{width:25,height:25}}/> */}
                </>
              ) : (
                <>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/lock--v1.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </>
              )}
            </Text>
          </Card.Content>
        </Card>
      </Pressable>
    </ScrollView>
  );
};

const StartingScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Model Paper"
          component={StartingScreen1}
          options={{ headerTitle: "Model Papers" }}
        />
        <Stack.Screen
          name="Noun"
          component={Noun}
          options={{ headerTitle: "Noun" }}
        />
        <Stack.Screen
          name="Pronoun"
          component={Pronoun}
          options={{ headerTitle: "Pronoun" }}
        />
        <Stack.Screen
          name="Verb"
          component={Verb}
          options={{ headerTitle: "Verb" }}
        />
        <Stack.Screen
          name="Adverb"
          component={Adverb}
          options={{ headerTitle: "Adverb" }}
        />
        <Stack.Screen
          name="Adjective"
          component={Adjective}
          options={{ headerTitle: "Adjective" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StartingScreen;

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
    justifyContent: "center",
  },
});
