import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Card, Button, List, Avatar } from "react-native-paper";

function CardComponent({ month, percentage, d, p, a }) {
  return (
    <>
      <Card style={{ marginTop: 6 }}>
        <Card.Title
          title={month}
          subtitle={`${percentage}%`}
          left={(props) => <Avatar.Icon {...props} icon="calendar" />}
          right={(props) => (
            <View
              style={{
                marginRight: 12,
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 8,
              }}
            >
              <Text style={{ color: "blue", fontWeight: "bold" }}>D-{d}</Text>
              <Text style={{ color: "green", fontWeight: "bold" }}>P-{p}</Text>
              <Text style={{ color: "red", fontWeight: "bold" }}>A-{a}</Text>
            </View>
          )}
        />
        <Card.Content></Card.Content>
      </Card>
    </>
  );
}
const Attendance = () => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Text>Month wise Attendance</Text>
        <CardComponent month="June" percentage="70" d="10" p="7" a="3" />
        <CardComponent month="July" percentage="70" d="20" p="20" a="3" />
        {/* <CardComponent month="August" percentage="73" d="25" p="20" a="5" />
        <CardComponent month="September" percentage="90" d="21" p="20" a="1" />
        <CardComponent month="October" percentage="100" d="23" p="20" a="3" />
        <CardComponent month="November" percentage="79" d="23" p="20" a="3" />
        <CardComponent month="December" percentage="92" d="20" p="20" a="3" />
        <CardComponent month="January" percentage="80" d="18" p="15" a="3" />
        <CardComponent month="February" percentage="100" d="17" p="17" a="0" />
        <CardComponent month="March" percentage="100" d="20" p="20" a="0" />
        <CardComponent month="April" percentage="100" d="20" p="20" a="0" /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
  },
});

export default Attendance;
