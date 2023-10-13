import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Dashboard from './Dashboard';

import { AuthContext } from '../../context/AuthContext';
import Classes from './Academic/Classes';
import StartingScreen from './Competative/StartingScreen';
import SixthStartingScreen from './Academic/class6/SixthStartingScreen';
const DashboardHandler = () => {
    const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
    <Stack.Screen name = "Dashboard" component={Dashboard} options={{ headerRight: ()=><Button
    onPress= {authCtx.logout}>Logout</Button>}}/>
    <Stack.Screen name="Academic" component={Classes}/>
    <Stack.Screen name="Competitive" component={StartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Class 6" component={SixthStartingScreen} options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

export default DashboardHandler