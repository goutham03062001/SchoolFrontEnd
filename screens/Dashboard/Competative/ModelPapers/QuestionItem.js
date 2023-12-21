import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
const QuestionItem = ({ question, highlight, year }) => {
  const words = question.split(highlight);
  return (
    <View style={{ width: "100%" }}>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
      <Text style={{ fontSize: 10,}}>{year}</Text>
        <Text style={{ fontSize: 16 }}>{words[0]}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{highlight}</Text>
        <Text style={{ fontSize: 16 }}>{words[1]}</Text>
      </View>
    </View>
  );
};

export default QuestionItem;

const styles = StyleSheet.create({});
