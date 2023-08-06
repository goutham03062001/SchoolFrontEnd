import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeWork from './HomeWork';
import ViewHomeWork from './ViewHomeWork';
const Stack = createStackNavigator();
const HomeWorkHandler = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = "Homework" component={HomeWork}/>
        <Stack.Screen name = "viewing home work" component={ViewHomeWork}/>
    </Stack.Navigator>
  )
}

export default HomeWorkHandler