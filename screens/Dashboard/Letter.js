import React,{useState,useContext} from 'react';
import {View, StyleSheet,Text,Alert} from 'react-native';
import {Button,Card,TextInput} from "react-native-paper";
import { AuthContext } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Letter = () => {
    const[reason,setReason] = useState("");
    const[fromDate,setFromDate] = useState("");
    const[toDate,setToDate] = useState("");
    const[closeBtnClicked,setCloseBtnClicked] = useState(false);
    const authContext = useContext(AuthContext);
    const currClass = authContext.currentLoggedInStudent && authContext.currentLoggedInStudent.className;
    async  function formHandler(){
        const currId = await AsyncStorage.getItem("AdmissionNumber");
        if(reason==="" || fromDate==="" || toDate===""){
            return Alert.alert("Warning","please fill all the details in leave letter")
        }else{
            return Alert.alert("Confirm","Are you sure you want to send leave letter",[
                {
                    text:"Cancel",
                    onPress : ()=>{ setReason(""); setFromDate(""); setToDate("")},
                    style:"cancel"
                },
                {
                    text : "Ok",
                    onPress : ()=>{
                        console.log("Clicked on Ok");
                         authContext.sendLeaveLetter(currId,reason,fromDate,toDate,currClass);
                        if(authContext.sentLetter){
                            setReason(""); setFromDate(""); setToDate("");
                        }
                },
                    
                    
                }
            ])
        }
    }
    function closeHandler(){
        setReason(""); setFromDate(""); setToDate("");
        setCloseBtnClicked(true);
    }
    return (
        <View style={styles.rootContainer}>
            <Text style={{marginVertical:15,textAlign:"center",fontSize:18}}>Send leave to your class teacher</Text>

            <Card>
              <Card.Content>
                <TextInput placeholder='Enter the reason' mode='outlined'
                    onChangeText={ (e)=> setReason(e)}
                    value={reason}
                />
                <TextInput placeholder='Enter from date ' mode='outlined'
                    onChangeText={ (e)=> setFromDate(e)}
                    value={fromDate}

                />
                <TextInput placeholder='Enter to date ' mode='outlined'
                    onChangeText={ (e)=> setToDate(e)}
                    value={toDate}
                />
                {authContext.loading  ? <Button mode="contained-tonal" style={{borderRadius:0, marginTop:20}}
                >Loading</Button> : authContext.sentLetter ? <>
                    <Button style={{borderRadius:0, marginTop:20,backgroundColor:closeBtnClicked ? '' : "#7AA874"}}
                onPress = {closeHandler}
                ><Text style={{color:"white"}}>Letter Sent!! you can now close</Text></Button>
                </> : <><Button mode="contained-tonal" style={{borderRadius:0, marginTop:20}}
                onPress={formHandler}>Send leave letter</Button></>}
               
              </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        padding:7,
       
    }
})

export default Letter;
