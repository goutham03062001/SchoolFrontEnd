import { createContext,useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { BACKEND_API_URL } from "../utils/Constants";
import { Alert } from "react-native";
export const AuthContext = createContext({
    signup:(mobile,id)=>{},
    studentLogin:()=>{},
    logout:()=>{},
    authenticated:false,
    authenticateFun:()=>{},
    removeAuthenticate:()=>{},
    getDetails:(inputData)=>{},
    loading:false,
    currentLoggedInStudent:{},
    sendLeaveLetter : (id,reason,from,to)=>{},
    sentLetter : false,
    getHomeWorkByClassName : (className)=>{},
    homeWorksArr : [{}],
    facultySignup:(mobile,password)=>{},
    facultyLogin:(mobile,password)=>{},
    currentLoggedInStatus : "",
    currentLoggedInId:"",
    updateCurrentStatus : (role)=>{},
    getPersonalDetails : (id)=>{}
})

export default function AuthContextProvider({children}){
    const[authenticated,setAuthenticated] = useState(false);
    const[isAdmissionFound,setIsAdmissionFound] = useState(false);
    const[currStudentDetails,setCurrStudentDetails] = useState([{}]);
    const[loading,setLoading] = useState(false);
    const[sentLetter,setSentLetter] = useState(false);
    const[homeWorksArr,setHomeWorksArr] = useState([{}]);
    const[currentLoggedInStatus,setCurrentLoggedInStatus] = useState("");
    const[currentLoggedInId,setCurrentLoggedInId] = useState("");

    async function updateCurrentStatus(role,id){
       let currRole =  await AsyncStorage.getItem("role");
        setCurrentLoggedInStatus(currRole);
        setCurrentLoggedInId(id);
    }

    async function setLocalItem(role,id,idx){
        await AsyncStorage.setItem("isAuthenticated","true");
        await AsyncStorage.setItem("role",role);

        if(idx === 0){
            await AsyncStorage.setItem("AdmissionNumber",id);
            setCurrentLoggedInId(id);
        }if(idx === 1){
            //here id -> mobile
            await AsyncStorage.setItem("FacultyMobileNumber",id);
            setCurrentLoggedInId(id);

        }
    }
    async function signup(AdmissionNumber,password,role){
        setLoading(true);
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const body = {AdmissionNumber,password}
        const response = await axios.post(BACKEND_API_URL+"/StudentsRoutes/auth/signup",body,config).then((data)=>{
            console.log(data.data);
            if(data.data === "This admission number is already registered"){
                setLoading(false);
                return Alert.alert("Registration failed",data.data);
            }
            if(data.data === "you don't have any access"){
                setLoading(false);
                return Alert.alert("Registration Failed","you don't have any access");
            }
           if(data.data.AdmissionNumber){
            console.log("Authenticated user");
              setLocalItem(role,AdmissionNumber);
               setAuthenticated(true);
               setLoading(false);
           return Alert.alert("Registration Success","You are now authenticated");
           }
           
        }).catch((err)=>{console.log(err); setLoading(false); return Alert.alert("Registration Failed","Error Occurred while signup. Check your internet connection and try again later.")});
    }
    async function studentLogin(AdmissionNumber,password,role){
        // await AsyncStorage.setItem("isAuthenticated","true");
        // setAuthenticated(true);
        setLoading(true);
        const config = {    
            headers:{
                "Content-Type":"application/json"
            }
        }
        const body = {AdmissionNumber,password}
        const response = await axios.post(BACKEND_API_URL+"/StudentsRoutes/auth/login",body,config).then((data)=>{
            console.log(data.data);
            if(data.data === "You are not registered yet."){
                setLoading(false);
                return Alert.alert("Login Failed","You are not registered yet")
            }
            if(data.data === "Either your admission number or password is wrong!"){
                setLoading(false);
                return Alert.alert("Login Failed","Either your admission number or password is wrong!");
            }
            if(data.data.AdmissionNumber!==null){
                let idx = 0;
                setLocalItem(role,AdmissionNumber,idx);
                setLoading(false);
                return Alert.alert("Login Success !", "You are now logged in");
            }
        }).catch((err)=>{console.log("Error Occurred : "+err.message)});
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

    async function facultySignup(mobile,password,role){
        setLoading(true);
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const body = {mobile,password}
        const response = await axios.post(BACKEND_API_URL+"/TeacherRoutes/auth/Signup",body,config).then((data)=>{
            console.log(data.data);
            if(data.data === "This mobile number is already registered"){
            setLoading(false);

                return Alert.alert("warning","This mobile number is already registered");
            }
            if(data.data === "You don't have access"){
            setLoading(false);
            return Alert.alert("Warning","You don't have any access")
            }
            if(data.data.mobile){
                setLoading(false);
                let idx=1;
                setLocalItem(role,mobile,idx);
            }
        }).catch((err)=>{console.log(err.message)})
    }

    //Faculty Login

    async function facultyLogin(mobile,password,role){
        //faculty login
        setLoading(true);
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const body = {mobile,password}
        const response = await axios.post(BACKEND_API_URL+"/TeacherRoutes/auth/login",body,config).then((data)=>{
            console.log(data.data);

            if(data.data === "You are not registered"){
                setLoading(false);
                return Alert.alert("Login Failed","You are not registered");
            }if(data.data === "Either password or mobile is wrong"){
                setLoading(false);
                return Alert.alert("Login Failed",data.data);
            }
            if(data.data.mobile!==null){
                setLoading(false);
                let idx = 1;
                setLocalItem(role,mobile,idx)
                return Alert.alert("Login Success","You are now logged in!")
            }
           
        }).catch((err)=>{console.log(err.message)})
    }
    async function getPersonalDetails(admissionNumber){
        setLoading(true);
        const response = await axios.get(BACKEND_API_URL+"/Student/get/details/"+admissionNumber).then((data)=>{
            console.log("Loading current student details");
            console.log(data.data);
            setCurrStudentDetails(data.data);
            setLoading(false);
        }).catch((err)=>{
            console.log("Error Occurred : "+err.message);
            setLoading(false);
        })
    }
    const values = {
        signup: signup,
        studentLogin:studentLogin,
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
        homeWorksArr:homeWorksArr,
        facultySignup:facultySignup,
        facultyLogin:facultyLogin,
        currentLoggedInStatus:currentLoggedInStatus,
        currentLoggedInId:currentLoggedInId,
        updateCurrentStatus:updateCurrentStatus,
        getPersonalDetails:getPersonalDetails
    }
    return(<AuthContext.Provider value={values}>{children}</AuthContext.Provider>)
}