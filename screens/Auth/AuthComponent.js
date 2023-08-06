import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Signup from './Signup';
const AuthComponent = () => {
    return (
       <Stack.Navigator>
        <Stack.Screen name = "Registration" component={Signup}/>
       </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AuthComponent;
