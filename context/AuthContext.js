import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BACKEND_API_URL } from "../utils/Constants";
import { Alert } from "react-native";
export const AuthContext = createContext({
  signup: (mobile, id) => {},
  studentLogin: () => {},
  logout: () => {},
  authenticated: false,
  authenticateFun: () => {},
  removeAuthenticate: () => {},
  getDetails: (inputData) => {},
  loading: false,
  currentLoggedInStudent: {},
  currentLoggedInStatus: "",
  currentLoggedInId: "",
  updateCurrentStatus: (role) => {},
  getPersonalDetails: (id) => {},
  getAllQuizzes:()=>{},
  quizExamsArr : []
});

export default function AuthContextProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmissionFound, setIsAdmissionFound] = useState(false);
  const [currStudentDetails, setCurrStudentDetails] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [sentLetter, setSentLetter] = useState(false);
  const [homeWorksArr, setHomeWorksArr] = useState([{}]);
  const [currentLoggedInStatus, setCurrentLoggedInStatus] = useState("");
  const [currentLoggedInId, setCurrentLoggedInId] = useState("");
  const [currentLoggedInFaculty, setCurrentLoggedInFaculty] = useState({});
  const [currentLeaveLettersByClassName, setCurrentLeaveLettersByClassName] = useState([{}]);
  const [currentStudentMarks, setCurrentStudentMarks] = useState({});
  const [feeDetails, setFeeDetails] = useState([{}]);
  const [quizExamLink, setQuizExamLink] = useState([]);
  const [currentWeekExamsArr, setCurrentWeekExamsArr] = useState([]);
  const[quizExamsArr,setQuizExamsArr] = useState([])
  async function updateCurrentStatus(role, id) {
    let currRole = await AsyncStorage.getItem("role");
    setCurrentLoggedInStatus(currRole);
    setCurrentLoggedInId(id);
  }

  async function setLocalItem(role, id, idx) {
    await AsyncStorage.setItem("isAuthenticated", "true");
    await AsyncStorage.setItem("role", role);

    if (idx === 0) {
      await AsyncStorage.setItem("AdmissionNumber", id);
      setCurrentLoggedInId(id);
    }
    if (idx === 1) {
      //here id -> mobile
      await AsyncStorage.setItem("FacultyMobileNumber", id);
      setCurrentLoggedInId(id);
    }
  }
  async function signup(AdmissionNumber, password, role) {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { AdmissionNumber, password };
    const response = await axios
      .post(BACKEND_API_URL + "/StudentsRoutes/auth/signup", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "This admission number is already registered") {
          setLoading(false);
          return Alert.alert("Registration failed", data.data);
        }
        if (data.data === "you don't have any access") {
          setLoading(false);
          return Alert.alert(
            "Registration Failed",
            "you don't have any access"
          );
        }
        if (data.data.AdmissionNumber) {
          console.log("Authenticated user");
          setLocalItem(role, AdmissionNumber);
          setAuthenticated(true);
          setLoading(false);

          return Alert.alert(
            "Registration Success",
            "You are now authenticated"
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        return Alert.alert(
          "Registration Failed",
          "Error Occurred while signup. Check your internet connection and try again later."
        );
      });
  }
  async function studentLogin(AdmissionNumber, password, role) {
    // await AsyncStorage.setItem("isAuthenticated","true");
    // setAuthenticated(true);
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { AdmissionNumber, password };
    const response = await axios
      .post(BACKEND_API_URL + "/api/Auth/Login", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "You are not registered yet.") {
          setLoading(false);
          return Alert.alert("Login Failed", "You are not registered yet");
        }
        if (
          data.data === "Either your admission number or password is wrong!"
        ) {
          setLoading(false);
          return Alert.alert(
            "Login Failed",
            "Either your admission number or password is wrong!"
          );
        }
        if (data.data.AdmissionNumber !== null) {
          let idx = 0;
          setLocalItem(role, AdmissionNumber, idx);
          setLoading(false);
          return Alert.alert("Login Success !", "You are now logged in");
        }
      })
      .catch((err) => {
        console.log("Error Occurred : " + err.message);
        setLoading(false);
      });
  }
  async function logout() {
    let allKeys = await AsyncStorage.getAllKeys();
    console.log("All stored keys : ", allKeys);
    await AsyncStorage.removeItem("isAuthenticated");
    await AsyncStorage.removeItem("role");
    await AsyncStorage.removeItem("AdmissionNumber");
    await AsyncStorage.removeItem("FacultyMobileNumber");

    return setAuthenticated(false);
  }
  function authenticateFun() {
    return setAuthenticated(true);
  }
  function removeAuthenticate() {
    return setAuthenticated(false);
  }
  async function getDetails(inputData) {
    setLoading(true);
    setCurrStudentDetails(inputData);
    console.log("Fee Details");
    console.log(inputData.className);
    setLoading(false);
  }

  async function facultySignup(mobile, password, role) {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { mobile, password };
    const response = await axios
      .post(BACKEND_API_URL + "/TeacherRoutes/auth/Signup", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "This mobile number is already registered") {
          setLoading(false);

          return Alert.alert(
            "warning",
            "This mobile number is already registered"
          );
        }
        if (data.data === "You don't have access") {
          setLoading(false);
          return Alert.alert("Warning", "You don't have any access");
        }
        if (data.data.mobile) {
          setLoading(false);
          let idx = 1;
          setLocalItem(role, mobile, idx);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async function facultyLogin(mobile, password, role) {
    //faculty login
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { mobile, password };
    const response = await axios
      .post(BACKEND_API_URL + "/TeacherRoutes/auth/login", body, config)
      .then((data) => {
        console.log(data.data);
        if (data.data === "You are not registered") {
          setLoading(false);
          return Alert.alert("Login Failed", "You are not registered");
        }
        if (data.data === "Either password or mobile is wrong") {
          setLoading(false);
          return Alert.alert("Login Failed", data.data);
        }
        if (data.data.Name) {
          console.log("Name : " + data.data);
          console.log("Current Faculty Details ");
          console.log(data.data);
          setLoading(false);
          let idx = 1;
          setLocalItem(role, mobile, idx);
          setCurrentLoggedInFaculty(data.data);

          return Alert.alert("Login Success", "You are now logged in!");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);

      });
  }
  async function getPersonalDetails(admissionNumber) {
    setLoading(true);
    const response = await axios
      .get(BACKEND_API_URL + "/Student/get/details/" + admissionNumber)
      .then((data) => {
        console.log("Loading current student details");
        console.log(data.data);
        setCurrStudentDetails(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error Occurred : " + err.message);
        setLoading(false);
      });
  }

  async function getAllQuizzes(){
    try {
        console.log("Loading Quizzes")
        const response = await axios.get(BACKEND_API_URL+"/api/Quiz/upload/getQuizDetails");
        setLoading(true);
        if(response.data){
            console.log("All quiz",response.data);
            setQuizExamsArr(response.data)
        setLoading(false);

        }
    } catch (error) {
        setLoading(false);
        return Alert.alert("Error Occurred!","Something went wrong");

    }
  }
  const values = {
    signup: signup,
    studentLogin: studentLogin,
    logout: logout,
    authenticated: authenticated,
    authenticateFun: authenticateFun,
    removeAuthenticate: removeAuthenticate,
    getDetails: getDetails,
    loading: loading,
     currentLoggedInStudent: currStudentDetails,
    sentLetter: sentLetter,
    homeWorksArr: homeWorksArr,
    facultySignup: facultySignup,
    facultyLogin: facultyLogin,
    currentLoggedInStatus: currentLoggedInStatus,
    currentLoggedInId: currentLoggedInId,
    updateCurrentStatus: updateCurrentStatus,
    getPersonalDetails: getPersonalDetails,
    currentLoggedInFaculty: currentLoggedInFaculty,
    currentLeaveLettersByClassName: currentLeaveLettersByClassName,
    currentStudentMarks: currentStudentMarks,
    feeDetails: feeDetails,
    quizExamLink: quizExamLink,
    currentWeekExamsArr: currentWeekExamsArr,
    getAllQuizzes:getAllQuizzes,
    quizExamsArr:quizExamsArr
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
