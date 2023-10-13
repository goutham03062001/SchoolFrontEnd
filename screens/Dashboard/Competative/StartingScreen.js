import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useContext } from "react";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../../../context/AuthContext";
import ViewExams from "./Exams/ViewExam";
const Stack = createStackNavigator();
const RoutingScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "brown" }}>
        <View style={styles.rootContainer}>
          <Pressable onPress={() => navigation.navigate("Exams")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#A2678A" }]}>
              <Text
                style={{ color: "#ECEE81", fontWeight: "600", fontSize: 18 }}
              >
                This Week Exams
              </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Previous Exams")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#BEADFA" }]}>
              <Text style={{ color: "#57375D", fontSize: 18 }}>
                Previous Exams
              </Text>
            </Card>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Upcoming Exams")}>
            <Card style={[styles.cardStyle, { backgroundColor: "#A084E8" }]}>
              <Text style={{ color: "white", fontSize: 18 }}>
                Upcoming Exams
              </Text>
            </Card>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const CurrentExams = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    authContext.getCurrentWeekExams();
  }, []);
  function OpenExamHandler(inputLink){
    console.log("Exam Link "+inputLink);
    navigation.navigate("Exam Screen",{data:inputLink})
  }
  return (
    <>
      <ScrollView>
      {authContext && authContext.loading && (<>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:100}}>
          <Text>Loading your exams</Text>
          <Image source = {require("../../../assets/Spinner.gif")} style={{width:"70%",height:"50%"}}/>
        </View>
      </>)}
        {authContext && !authContext.loading &&
        authContext.currentWeekExamsArr &&
        authContext.currentWeekExamsArr.length > 0 ? (
          <>
            <View>
              {authContext.currentWeekExamsArr &&
                authContext.currentWeekExamsArr.map((exam, key = exam._id) => (
                 <Pressable key={exam._id} onPress={(data)=>{OpenExamHandler(exam.examLink)}}>
                    <Card style={{marginTop:15,width:"95%",marginHorizontal:5}}>
                      <Card.Content style={{padding:15,marginVertical:15}}>
                      <Text>{authContext.currentWeekExamsArr.indexOf(exam)+1}</Text>
                      {/* <Text key={exam._id}>{exam._id}</Text> */}
                  <Text style={{padding:10,color:"blue"}}>Exam Link : {exam.examLink}</Text>
                  <Text style={{padding:10,color:"green"}}>Exam Description : {exam.description}</Text>
                      </Card.Content>
                    </Card>
                 </Pressable>
                ))}
            </View>
          </>
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
};

const PreviousExams = () => {
  return (
    <>
      <Text>previous exams</Text>
    </>
  );
};

const UpcomingExams = () => {
  return (
    <>
      <Text>upcoming exams</Text>
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
        <Stack.Screen name="Exams" component={CurrentExams} />
        <Stack.Screen name="Previous Exams" component={PreviousExams} />
        <Stack.Screen name="Upcoming Exams" component={UpcomingExams} />
        <Stack.Screen name="Exam Screen" component={ViewExams} />
      </Stack.Navigator>
    </>
  );
};

export default StartingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    gap: 15,
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
