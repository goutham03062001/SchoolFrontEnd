import React ,{useContext}from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider from './context/AuthContext';
import Signup from './screens/Auth/Signup';
import Login from './screens/Auth/Login';
import DashboardHandler from './screens/Dashboard/DashboardHandler';
import { AuthContext } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
import { AntDesign,Foundation, SimpleLineIcons , MaterialIcons} from '@expo/vector-icons'; 
import { Button } from 'react-native-paper';
import HomeWork from './screens/Dashboard/HomeWork';
import Letter from './screens/Dashboard/Letter';
import Notes from './screens/Dashboard/Notes';
import HomeWorkHandler from './screens/Dashboard/HomeWorkHandler';
import FacultyDashboard from "./screens/TeacherDashboard/Dashboard";
import FacultyHomeWork from "./screens/TeacherDashboard/HomeWork"
import FacultyLeaveLetter from "./screens/TeacherDashboard/LeaveLetters";
import TeacherDashboardHandler from './screens/TeacherDashboard/TeacherDashboardHandler';
function AuthStack(){
  return(<>
      <Stack.Navigator>
          <Stack.Screen name = "Signup" component={Signup}/>
          <Stack.Screen name = "Login" component={Login}/>
        </Stack.Navigator>
  </>)
}
function Authenticated(){
  return(<>
         <BottomTab.Navigator>
          <BottomTab.Screen name = "dashboard" component={DashboardHandler}
          options={{ tabBarIcon : ()=><AntDesign name="home" size={24} color="black" /> , headerShown:false}}
          />
          <BottomTab.Screen name = "Experiments" component={Notes}
            options={{ tabBarIcon : ()=><Image source={{uri : "https://img.icons8.com/ios/50/test-tube.png"}} style={{width:25,height:28}}/>,
            headerShown:false}}
          />
          <BottomTab.Screen name = "Leave Letter" component={Letter}
            options={{ tabBarIcon : ()=><Image source = {{uri : "https://img.icons8.com/ios/50/secured-letter--v1.png"}} style={{width:25,height:23}}/>}}
          />
          <BottomTab.Screen name = "home work" component={HomeWorkHandler}
            options={{ tabBarIcon : ()=><Image source={{uri : "https://img.icons8.com/ios/50/homework.png"}} style={{width:25,height:28}}/>,
            headerShown : false
            }}
          />
        </BottomTab.Navigator>

  </>)
}
function TeacherComponent(){
  const authContext = useContext(AuthContext);

  return(<>
    <BottomTab.Navigator>
      <BottomTab.Screen name = "DASHBOARD" component={TeacherDashboardHandler} options={ { tabBarIcon : ()=><AntDesign name = "home" size={24} color="black"/>,
      headerRight : ()=><Button onPress = {authContext.logout}>Logout</Button>,title:"Dashboard",headerTitleStyle:{fontSize:18}}}/>
      <BottomTab.Screen name = "HOME WORK" component={FacultyHomeWork} options={ { tabBarIcon : ()=><Image source={{uri : "https://img.icons8.com/ios/50/homework.png"}} style={{width:25,height:28}}/>,
      title:"Home Work",headerTitleStyle:{fontSize:18}}}/>
      <BottomTab.Screen name = "LEAVE LETTERS" component={FacultyLeaveLetter} options={ { tabBarIcon : ()=><Image source = {{uri : "https://img.icons8.com/ios/50/secured-letter--v1.png"}} style={{width:25,height:23}}/>,
      title:"Leave Letters",headerTitleStyle:{fontSize:18}}}/>
    </BottomTab.Navigator>
  </>)
}
  async function isAuthenticatedFun(){
    const authContext = useContext(AuthContext);
  let isAuth = await AsyncStorage.getItem("isAuthenticated");
  let currentRole = await AsyncStorage.getItem("role");
  let currentStudentId = await AsyncStorage.getItem("AdmissionNumber");
  let currFacMobile = await AsyncStorage.getItem("FacultyMobileNumber");
  console.log("isAuthKey :",isAuth);
  console.log("role",currentRole);
  console.log("Id",currentStudentId);
  if(isAuth!==null){
    authContext.authenticateFun();
    if(currentRole === "Student"){
    authContext.updateCurrentStatus(currentRole,currentStudentId);

    }if(currentRole==="Teacher"){
    authContext.updateCurrentStatus(currentRole,currFacMobile);
      
    }
  }else{
    authContext.removeAuthenticate();
  }
}
function NavigationComponent(){
  const authContext = useContext(AuthContext);
  isAuthenticatedFun();
  return(
<NavigationContainer>
     {!authContext.authenticated  && <AuthStack/>}
     {authContext.authenticated && authContext.currentLoggedInStatus === "Student" && <Authenticated/>}
     {authContext.authenticated && authContext.currentLoggedInStatus === "Teacher" && <TeacherComponent/>}
     
      </NavigationContainer>
  )
}

function App(){
  return (
    <>
      <AuthContextProvider>
        <NavigationComponent/>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    padding:50
  }
})

export default App;
