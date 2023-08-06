import { createContext,useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { BACKEND_API_URL } from "../utils/Constants";
import { Alert } from "react-native";
export const AuthContext = createContext({
    signup:(mobile,id)=>{},
    login:()=>{},
    logout:()=>{},
    authenticated:false,
    authenticateFun:()=>{},
    removeAuthenticate:()=>{},
    getDetails:(inputData)=>{},
    loading:false,
    currentLoggedInStudent:[{}],
    sendLeaveLetter : (id,reason,from,to)=>{},
    sentLetter : false,
    getHomeWorkByClassName : (className)=>{},
    homeWorksArr : [{}]
})

export default function AuthContextProvider({children}){
    const[authenticated,setAuthenticated] = useState(false);
    const[isAdmissionFound,setIsAdmissionFound] = useState(false);
    const[currStudentDetails,setCurrStudentDetails] = useState([{}]);
    const[loading,setLoading] = useState(false);
    const[sentLetter,setSentLetter] = useState(false);
    const[homeWorksArr,setHomeWorksArr] = useState([{}]);
    async function setLocalItem(role,id){
        await AsyncStorage.setItem("isAuthenticated","true");
        await AsyncStorage.setItem("role",role);
        await AsyncStorage.setItem("AdmissionNumber",id);
    }
    async function signup(mobile,id,role){
        console.log("mobile number : ", mobile);
        setLoading(true);
        const response = await axios.get(BACKEND_API_URL+"/StudentsRoutes/authenticated/"+id).then((data)=>{
            console.log(data.data);
            if(data.data === "Not Found"){
                setLoading(false);
                return Alert.alert("Registration failed","you don't have permission to access this app");
            }
           if(data.data.AdmissionNumber){
            console.log("Authenticated user");
              setLocalItem(role,id);
               setAuthenticated(true);
               setLoading(false);
           return Alert.alert("Registration Success","You are now authenticated");
           }
           
        }).catch((err)=>{console.log(err); return Alert.alert("Registration Failed","Error Occurred while signup. Check your internet connection and try again later.")});
    }
    async function login(mobile){
        await AsyncStorage.setItem("isAuthenticated","true");
        setAuthenticated(true);
    }
    async function logout(){
        let allKeys = await AsyncStorage.getAllKeys();
        console.log("All stored keys : ",allKeys);
        await AsyncStorage.removeItem("isAuthenticated");

       return setAuthenticated(false);
    }
    function authenticateFun(){
        return setAuthenticated(true);
    }
    function removeAuthenticate(){
       return setAuthenticated(false);
    }
    async function getDetails(inputData){
        setLoading(true);
        setCurrStudentDetails(inputData);
        console.log("Fee Details");
        console.log(inputData.className);
        setLoading(false);
    } 
    async function sendLeaveLetter(id,reason,from,to,className){
        setLoading(true);
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const body = { AdmissionNumber:id, reason,from,to};
        // /StudentsRoutes/leaveLetter
        const response = await axios.post(BACKEND_API_URL+"/StudentsRoutes/leaveLetter/newLetter/"+className,body,config).then((data)=>{
            console.log("leave letter status");
            console.log(data.data);
            if(data.data._id){
                setSentLetter(true);
            }
        setLoading(false);

        }).catch((err)=>{
            console.log(err.message);
            return Alert.alert("Error Occurred","Error Occurred while sending your leave letter, try again after some time.");
        })
    }
    async function  getHomeWorkByClassName(className){
        setLoading(true);
        const response = await axios.get(BACKEND_API_URL+"/StudentsRoutes/homeWork/all/"+className).then((data)=>{
            console.log(data.data);
            setHomeWorksArr(data.data);
            setLoading(false);
        }).catch((err)=>{console.log(err.message)});
    }
    const values = {
        signup: signup,
        login:login,
        logout:logout,
        authenticated:authenticated,
        authenticateFun:authenticateFun,
        removeAuthenticate:removeAuthenticate,
        getDetails : getDetails,
        loading : loading,
        currentLoggedInStudent:currStudentDetails,
        sendLeaveLetter:sendLeaveLetter,
        sentLetter:sentLetter,
        getHomeWorkByClassName:getHomeWorkByClassName,
        homeWorksArr:homeWorksArr
    }
    return(<AuthContext.Provider value={values}>{children}</AuthContext.Provider>)
}