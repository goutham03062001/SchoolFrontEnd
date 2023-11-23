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
    getPersonalDetails : (id)=>{},
    currentLoggedInFaculty : {},
    getCurrentFacultyDetails : (id)=>{},
    getLeaveLettersByClassName:(className)=>{},
    currentLeaveLettersByClassName : [{}],
    postHomeWork:(className,subjectName,description)=>{},
    getExamMarks : (examName,className,admissionId,studentName)=>{},
    currentStudentMarks : {},
    getStudentDetailsByClassName: (className)=>{},
    loadFeeDetails:(AdmissionNumber)=>{},
    feeDetails:[{}],
    getQuizLink: ()=>{},
    quizExamLink : [],
    getCurrentWeekExams : ()=>{},
    currentWeekExamsArr:[]
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
    const[currentLoggedInFaculty,setCurrentLoggedInFaculty] = useState({});
    const[currentLeaveLettersByClassName,setCurrentLeaveLettersByClassName] = useState([{}]);
    const[currentStudentMarks,setCurrentStudentMarks] = useState({});
    const[feeDetails,setFeeDetails] = useState([{}]);
    const[quizExamLink,setQuizExamLink] = useState([]);
    const[currentWeekExamsArr,setCurrentWeekExamsArr] = useState([]);
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
        const response = await axios.post(BACKEND_API_URL+"/Auth/Login",body,config).then((data)=>{
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
        await AsyncStorage.removeItem("role");
        await AsyncStorage.removeItem("AdmissionNumber");
        await AsyncStorage.removeItem("FacultyMobileNumber");

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
            if(data.data.Name){
                console.log("Name : "+data.data);
                console.log("Current Faculty Details ");
                console.log(data.data);
                setLoading(false);
                let idx = 1;
                setLocalItem(role,mobile,idx);
            setCurrentLoggedInFaculty(data.data);

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
    async function getCurrentFacultyDetails(mobile){
        setLoading(true);
        console.log("Current Mobile : "+mobile);
        const response = await axios.get(BACKEND_API_URL+"/TeacherRoutes/auth/get/"+mobile).then((data)=>{
            console.log(data.data);
            setLoading(false);
            setCurrentLoggedInFaculty(data.data);
        }).catch((err)=>{
            console.log(err.message);
            setLoading(false);
        })
    }

    async function getLeaveLettersByClassName(className){
        setLoading(true);
        const response = await axios.get(BACKEND_API_URL+"/TeacherRoutes/leaveLetters/"+className).then((data)=>{
            console.log(data.data);
            setLoading(false);
            setCurrentLeaveLettersByClassName(data.data);
        }).catch((err)=>{
            console.log('Error Occurred : '+err.message);
            setLoading(false);
        })
    }
    
    async function postHomeWork(className,subjectName,description){
        setLoading(true);
        console.log("response");

        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const body = {description}
        const response = await axios.post(BACKEND_API_URL+"/TeacherRoutes/homework/newHomeWork/className/"+className+"/subject/"+subjectName,body,config).then((data)=>{
            console.log("response");
            if(data.data._id!==null){
                console.log(data.data);
                setLoading(false);
                return Alert.alert("Home Work Sent Successfully!","Home work sent to all your class students");
            }
        }).catch((err)=>{
            console.log("Error Occurred : "+err.message);
            setLoading(false);
        })
    }

    async function getStudentDetailsByClassName(className){ 
        console.log("Getting Student Details By Class Name");
        setLoading(true);
        const response = await axios.get(BACKEND_API_URL+"/TeacherRoutes/classDetails/"+className).then((data)=>{
            console.log("Current Class Students Details : ");
            setCurrStudentDetails(data.data); //CurrentStudentDetails 
            console.log(data.data);
        }).catch((error)=>{console.log("Error Occurred : "+error.message)});
    }
    
    async function getExamMarks(examName,className,admissionId,studentName){
        setLoading(true);
        const response = await axios.get(BACKEND_API_URL+"/Exams/"+examName+"/"+className+"/"+admissionId+"/"+studentName+"/get/marks").then((data)=>{
            console.log("STUDENT EXAM MARKS BY ID");
            console.log(data.data);
            setCurrentStudentMarks(data.data);
            setLoading(false);
        }).catch((err)=>{
            console.log("Error Occurred : "+err.message);
            setLoading(false);
        })
    }

    async function loadFeeDetails(AdmissionNumber){
        try {
            const response = await axios.get(BACKEND_API_URL+"/StudentRoutes/FeeDetails/get/AdmissionNumber/"+AdmissionNumber)
            if(response){
                console.log("Payment History")
                console.log(response.data);
                setFeeDetails(response.data);
            }else{
                console.log("No response !!");
            }
        } catch (error) {
            setLoading(false);
            console.log("Error Occurred "+error.message)
        }
    }
    async function getQuizLink(){
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const examDate = new Date().toLocaleDateString('en-US',options);
        try {
            setLoading(true);
            console.log("Getting today's exam ");
            const body = {examDate}
            const response = await axios.get(BACKEND_API_URL+`/StudentsRoutes/Quiz/exam/date/:examDate`,body);
            if(response){
                console.log(response.data);
                setQuizExamLink(response.data)
                
            }else{
                console.log("No response!!");
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("Error Occurred "+error.message)

        }
    }

    async function getCurrentWeekExams(){
        try {
            setLoading(true);
            console.log("Getting This Week Exams")
            const response = await axios.get(BACKEND_API_URL+"/Exams/getCurrentWeekExams");
            if(response){
                console.log(response.data);
                setCurrentWeekExamsArr(response.data);
            console.log(" This Week Exams")

            }else{
                console.log("No response!")
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("Error Occurred "+error.message)

        }
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
        getPersonalDetails:getPersonalDetails,
        currentLoggedInFaculty:currentLoggedInFaculty,
        getCurrentFacultyDetails:getCurrentFacultyDetails,
        getLeaveLettersByClassName:getLeaveLettersByClassName,
        currentLeaveLettersByClassName:currentLeaveLettersByClassName,
        postHomeWork:postHomeWork,
        getExamMarks:getExamMarks,
        currentStudentMarks:currentStudentMarks,
        getStudentDetailsByClassName:getStudentDetailsByClassName,
        loadFeeDetails:loadFeeDetails,
        feeDetails:feeDetails,
        getQuizLink:getQuizLink,
        quizExamLink:quizExamLink,
        getCurrentWeekExams:getCurrentWeekExams,
        currentWeekExamsArr:currentWeekExamsArr
    }
    return(<AuthContext.Provider value={values}>{children}</AuthContext.Provider>)
}