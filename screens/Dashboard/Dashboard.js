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

    function viewPersonalDetailsHandler(){
        navigation.navigate("Personal Details",{data : authCtx.currentLoggedInStudent})
    }

    return (
        <View style={styles.rootContainer}>
            <View style = {styles.topDiv}>
                <Pressable onPress = {viewPersonalDetailsHandler} style = {{width:"100%"}}>
                <View style = {styles.personalCardStyle}>
                    <View style = {styles.personalCardContent}>
                    <Image source={{ uri : "https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-6368706-5250853.png"}} style={{ width:80,height:80}}/>
                        
                        {authCtx.loading ? <Text style={{color:"white"}}>Loading....</Text> :<>
                            {/* {authCtx.currentLoggedInStudent.map(())} */}
                            <Text style={{color:"yellow"}}>{authCtx.currentLoggedInStudent.Name} | {authCtx.currentLoggedInStatus}</Text>
                            <Text style={{color:"#45FFCA"}}>{authCtx.currentLoggedInId} | Class - {authCtx.currentLoggedInStudent.className}</Text>
                        </>}


                    </View>
                </View>
                </Pressable>
            </View>

            {/* bottomDiv */}
            <View style = {styles.bottomDiv}>
                <View style = {styles.firstRow}>
                    <Pressable onPress={CalendarNavigation}
                    >
                    <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"#662549",borderRadius:15,borderColor:"white",borderWidth:2}]}>
                    <Image source = {require("./../../assets/calendar.png")} style={{width:100,height:110}}/>
                    <Text style={{color:"yellow",fontWeight:"400"}}>Calendar</Text>
                    </View>
                    </Pressable>
                   <Pressable onPress={AttendanceNavigation}>
                   <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"#451952",borderRadius:15,borderColor:"white",borderWidth:2}]}>
                    <Image source = {require("./../../assets/attendance.png")} style={{width:80,height:110}}/>
                    <Text style={{color:"white",fontWeight:"400"}}>Attendance</Text></View>
                   </Pressable>
                </View>
                <View style = {styles.secondRow}>
                <Pressable onPress={FeeDetailsNavigation}>
                <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"#AE445A",borderRadius:15,borderColor:"white",borderWidth:2}]}>
                <Image source = {require("./../../assets/examfee.png")} style={{width:60,height:100}}/>
                <Text style={{color:"#CAEDFF",fontWeight:"400"}}>Fee Details</Text></View>
                </Pressable>
                    <Pressable onPress = {ResultsNavigation}>
                    <View style={[styles.bottomCard, {flexDirection:"column",justifyContent:"space-around",alignItems:"center",backgroundColor:"#F39F5A",borderRadius:15,borderColor:"white",borderWidth:2}]}>
                    <Image source = {require("./../../assets/result.png")} style={{width:"100%",height:110}}/>
                    <Text style={{color:"blue",fontWeight:"400"}}>Results</Text></View>
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
