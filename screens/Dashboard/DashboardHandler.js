import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Dashboard from './Dashboard';

import { AuthContext } from '../../context/AuthContext';
import Classes from './Academic/AcademicStartingScreen';
import StartingScreen from './Competative/StartingScreen';
import NounsStartingScreen from "./Academic/class6/NounsStartingScreen";
import PronounStartingScreen from './Academic/Pronoun/PronounStartingScreen';
import AdjectiveStartingScreen from './Academic/Adjective/AdjectiveStartingScreen';
import AdverbStartingScreen from './Academic/Adverb/AdverbStartingScreen';
import ConjunctionStartingScreen from './Academic/Conjunction/ConjunctionStartingScreen';
const DashboardHandler = () => {
    const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
    <Stack.Screen name = "Dashboard" component={Dashboard} options={{ headerRight: ()=><Button
    onPress= {authCtx.logout}>Logout</Button>}}/>
    <Stack.Screen name="Academic" component={Classes}/>
    <Stack.Screen name="Competitive" component={StartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Noun's" component={NounsStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Pronoun" component={PronounStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Adjective" component={AdjectiveStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Adverb" component={AdverbStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Conjunction" component={ConjunctionStartingScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default DashboardHandler