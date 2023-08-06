import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Calendar from "./Calendar"
import Dashboard from './Dashboard';
import Attendance from "./Attendance";
import FeeDetails from './FeeDetails';
import Results from './Results';
import { AuthContext } from '../../context/AuthContext';
const DashboardHandler = () => {
    const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
    <Stack.Screen name = "Dashboard" component={Dashboard} options={{ headerRight: ()=><Button
    onPress= {authCtx.logout}>Logout</Button>}}/>
        <Stack.Screen name = "Calendar" component={Calendar}/>
        <Stack.Screen name = "FeeDetails" component={FeeDetails}/>
        <Stack.Screen name = "Attendance" component={Attendance}/>
        <Stack.Screen name = "Results" component={Results}/>
    </Stack.Navigator>
  )
}

export default DashboardHandler