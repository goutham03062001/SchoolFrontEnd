import React ,{useState,useContext}from 'react';
import {View, StyleSheet,Text,Image,Dimensions} from 'react-native';
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

import AnimatedSplash from 'react-native-animated-splash-screen';
import StartingScreen from './screens/NotificationScreen';
import { Platform } from 'react-native';
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
         <BottomTab.Navigator
         
         >
          <BottomTab.Screen name = "dashboard" component={DashboardHandler}
          options={{ tabBarIcon : ()=><Image source={require("./assets/Home.png")} style={{width:25,height:28}}/> ,headerShown:false,tabBarActiveBackgroundColor:"#BC7AF9",tabBarInactiveBackgroundColor:"#ffff",tabBarActiveTintColor:"white",tabBarItemStyle:{borderRadius:1,padding:2,borderBottomRightRadius:25,borderTopRightRadius:1}}}
          />
         
          <BottomTab.Screen name = "Notifications" component={StartingScreen}
            options={{ tabBarIcon : ()=><Image source={require("./assets/Notifications.png")} style={{width:40,height:40}}/>,
            headerShown : false,tabBarActiveBackgroundColor:"#191D88",tabBarActiveTintColor:"white",tabBarItemStyle:{borderRadius:1,padding:2,borderBottomRightRadius:25,borderTopRightRadius:1},
            }}
          />

       
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
     
      </NavigationContainer>
  )
}

function App(){
  const [loading,setLoading] = useState(false);
  setTimeout(()=>{
    setLoading(true);
  },5000);


  return (
    <>
    
      <View style={styles.container}>
      <AuthContextProvider>
      <AnimatedSplash
      translucent={true}
      isLoaded={loading}
      logoImage={require("./assets/SplashAnimated.gif")}
      backgroundColor={"#1cccad"}
      logoHeight={Dimensions.get('window').width}
      logoWidth={Dimensions.get('window').height}
    >

<NavigationComponent/>
    </AnimatedSplash>
       
      </AuthContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    padding:50
  },
  container:{
    flex:1,
    justifyContent:"center",
  }
})

export default App;
