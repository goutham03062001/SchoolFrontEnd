import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
const Results = () => {
  const navigation = useNavigation();
  function ViewResultsHandler() {
    console.log("View Results Handler");
    navigation.navigate("View Results");
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.cardContainer}>
        <View
          style={{
            width: "30%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: 10,
          }}
        >
          <Text style={{ color: "white" }}>FA-1 RESULT</Text>
        </View>
        <View>
          <Button
            mode="contained"
            style={{ borderRadius: 5 }}
            buttonColor="#C05CD3"
            onPress={ViewResultsHandler}
          >
            View Results
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    marginTop: 10,
  },
  cardContainer: {
    width: "96%",
    height: 130,
    backgroundColor: "white",
    elevation: 10,
    padding: 5,
    marginTop: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5C8CD3",
  },
});
export default Results;
