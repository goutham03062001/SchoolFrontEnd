import React,{useContext,useEffect,useState} from 'react';
import {View, StyleSheet,Text,Image, Pressable} from 'react-native';
import { Button ,Card} from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import {styles} from "./css/DashboardStyling";
import { useNavigation } from '@react-navigation/native';
import Attendance from './Attendance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BACKEND_API_URL } from '../../utils/Constants';
const Dashboard = () => {
   
    const authCtx = useContext(AuthContext);
    const currId = authCtx.currentLoggedInId;
    console.log("CurrentId : "+currId);
    useEffect(()=>{
        authCtx.getPersonalDetails(currId);
    },[currId])
    const navigation = useNavigation();

    function CalendarNavigation(){
        navigation.navigate("Calendar");
    }
    function AttendanceNavigation(){
        navigation.navigate("Attendance");
    }
    function FeeDetailsNavigation(){
        navigation.navigate("FeeDetails");
    }
    function ResultsNavigation(){
        navigation.navigate("Results");
    }
    
    return (
        <View style={styles.rootContainer}>
            <View style = {styles.topDiv}>
                <Card style = {styles.personalCardStyle}>
                    <Card.Content style = {styles.personalCardContent}>
                    <Image source={{ uri : "https://img.icons8.com/color/96/circled-user-male-skin-type-1-2--v1.png"}} style={{ width:80,height:80}}/>
                        {/* {
                            loadingDetails ? 
                                <Text>Loading.. Details</Text>
                             : <>
                            {currStudentDetails && <>
                            <Text>{currStudentDetails.Name} | {currentRole}</Text>
                        <Text>ID- {admissionNumber} |  Class - {currStudentDetails.className}</Text>
                        </>}
                            </>
                        } */}
                        {authCtx.loading ? <Text>Loading....</Text> :<>
                            {/* {authCtx.currentLoggedInStudent.map(())} */}
                            <Text>{authCtx.currentLoggedInStudent.Name} | {authCtx.currentLoggedInStatus}</Text>
                            <Text>{authCtx.currentLoggedInId} | Class - {authCtx.currentLoggedInStudent.className}</Text>
                        </>}


                    </Card.Content>
                </Card>
            </View>

            {/* bottomDiv */}
            <View style = {styles.bottomDiv}>
                <View style = {styles.firstRow}>
                    <Pressable onPress={CalendarNavigation}>
                    <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center"}]}>
                    <Image source = {require("./../../assets/calendar.png")} style={{width:60,height:60}}/>
                    <Text>Calendar</Text>
                    </View>
                    </Pressable>
                   <Pressable onPress={AttendanceNavigation}>
                   <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center"}]}>
                    <Image source = {require("./../../assets/attendance.png")} style={{width:60,height:60}}/>
                    <Text>Attendance</Text></View>
                   </Pressable>
                </View>
                <View style = {styles.secondRow}>
                <Pressable onPress={FeeDetailsNavigation}>
                <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center"}]}>
                <Image source = {require("./../../assets/examfee.png")} style={{width:60,height:60}}/>
                <Text>Fee Details</Text></View>
                </Pressable>
                    <Pressable onPress = {ResultsNavigation}>
                    <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center"}]}>
                    <Image source = {require("./../../assets/results.png")} style={{width:60,height:60}}/>
                    <Text>Results</Text></View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

// const styles = StyleSheet.create({
//     rootContainer:{
//         padding:100
//     }
// })

export default Dashboard;
