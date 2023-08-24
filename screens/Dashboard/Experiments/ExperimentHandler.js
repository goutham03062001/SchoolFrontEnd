import { View, Text,StyleSheet,Pressable,Image } from 'react-native'
import React,{useContext} from 'react';
import { AuthContext } from "../../../context/AuthContext";
import { Card,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import PhysicsLab from './Tenth/PhysicsLab';
import MathsLab from './Tenth/MathsLab';
import BiologyLab from './Tenth/BiologyLab';
import ViewLabExperiments from './Tenth/ViewLabExperiments';
function DisplaySubjectsHandler(){
  const authContext = useContext(AuthContext);
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
  return(<>
    <>
    {authContext && authContext.currentLoggedInStudent ? <>
      <View style={styles.rootContainer}>
        <>
          
            <Pressable android_ripple={{ color: "#ccc" }}
        onPress={ PhysicsSubjectHandler }>
        <Card style={styles.cardStyle}>
          <Card.Content>
            <Image
              source={require("../../../assets/Physics.jpg")}
              style={{ width: "100%", height: 140 }}
            />

            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
             <Text>Class - {authContext.currentLoggedInStudent.className}</Text>
            </View>
          </Card.Content>
        </Card>
        </Pressable>

        <Pressable android_ripple={{ color: "#ccc" }}
        onPress = {BiologySubjectHandler}>
        <Card style={{ height: 300 ,marginTop:10}}>
          <Card.Content>
            <Image
              source={require("../../../assets/Biology.jpeg")}
              style={{ width: "99%", height: "90%" }}
            />

            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
             <Text>Class - {authContext.currentLoggedInStudent.className}</Text>
              
            </View>
          </Card.Content>
        </Card>
        </Pressable>
          
        </>
      </View>
    </> : <></>}
 
  </>

  </>)
}

const ExperimentHandler = () => {
   
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
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:50
    }
})

export default ExperimentHandler