import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TeacherDashboard from "./Dashboard"
import StudentDetails from './StudentDetails';
const Stack = createStackNavigator();
const TeacherDashboardHandler = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = "TEACHER DASHBOARD" component={TeacherDashboard} options={{ headerShown:false}}/>
        <Stack.Screen name = "Student Details" component={StudentDetails} options={{ headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default TeacherDashboardHandler